#!/usr/bin/env python

import sys
from subprocess import check_output, STDOUT, CalledProcessError


def prepare_link_test_result(command_output):
    # Constant string patterns
    NEW_PAGE_TEST_START_REGEX = "Getting links from:"
    BROKEN_PAGE_START_REGEX = "BROKEN"
    PAGE_TEST_END_REGEX = "Finished! "
    
    # Whitelisted broken links patterns
    HTTP_403_REGEX = "(HTTP_403)"
    HTTP_401_REGEX = "(HTTP_401)"
    BLC_UNKNOWN_REGEX = "(BLC_UNKNOWN)"
    HTTP_UNDEFINED = "HTTP_undefined"
    FALSE_SCALA_API_DOC_LINK = "java$lang.html"
    FALSE_SCALA_API_DEPRECATED_LINK = "api/scala/docs/deprecated-list.html"
    FALSE_PAPER_LINK = "https://static.googleusercontent.com/media/research.google.com/en/pubs/archive/45488.pdf"

    # Initialize flags with happy case
    current_page = ""
    current_page_broken = False
    current_page_broken_links = ""

    broken_links_count = 0
    broken_links_summary = ""

    for line in command_output.splitlines():
        if line.startswith(NEW_PAGE_TEST_START_REGEX):
            # New page test is starting. Reset the flags
            current_page = line.split(NEW_PAGE_TEST_START_REGEX)[1]
            current_page_broken = False
            current_page_broken_links = ""

        if line.find(BROKEN_PAGE_START_REGEX) != -1:
            # Skip (401, 403, unknown issues)
            if HTTP_403_REGEX not in line and HTTP_401_REGEX not in line and BLC_UNKNOWN_REGEX not in line and HTTP_UNDEFINED not in line and FALSE_SCALA_API_DOC_LINK not in line and FALSE_SCALA_API_DEPRECATED_LINK not in line and FALSE_PAPER_LINK not in line:
                current_page_broken = True
                current_page_broken_links += line.split(BROKEN_PAGE_START_REGEX)[1] + "\n"

        if line.startswith(PAGE_TEST_END_REGEX):
            if current_page_broken:
                broken_links_count += 1
                broken_links_summary += "\nURL - " + current_page
                broken_links_summary += "\nBroken Links\n" + current_page_broken_links

    return broken_links_count, broken_links_summary

# Command to check broken links
# Reference - https://www.npmjs.com/package/broken-link-checker
cmd = "blc https://mxnet.incubator.apache.org -ro"
broken_links_count = 0
broken_links_summary = ""

print("Starting broken link test with command $ " + cmd)
try:
    command_output = check_output(cmd, stderr=STDOUT, shell=True)
    print("Writing output to a file.")
    with open("blc_output.txt", "w") as text_file:
        for line in command_output.splitlines():
            text_file.write("{}\n".format(line))
    print("Done")
    broken_links_count, broken_links_summary = prepare_link_test_result(command_output)
except CalledProcessError as ex:
    if ex.returncode > 1:
        print("Failed to do broken link test. Console output : \n" + ex.output)
        sys.exit(ex.returncode)
    broken_links_count, broken_links_summary = prepare_link_test_result(ex.output)

# These START and END string in output is used to parse the script output in automated scripts and nightly jobs.
print("START - Broken links count")
print(broken_links_count)
print("END - Broken links count")

print("START - Broken links summary")

if broken_links_count == 0:
    print("No broken links in https://mxnet.incubator.apache.org")
    print("END - Broken links summary")
    sys.exit(0)
else:
    print(broken_links_summary)
    print("END - Broken links summary")
    sys.exit(-1)