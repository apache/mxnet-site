$(document).ready(function () {
  $("head").append(
    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css' />"
  );

  $(".trigger").before(`
    <div class="gs-search-border">
        <div id="gs-search-icon"></div>
        <form id="global-search-form">
            <input id="global-search" type="text" title="Search" placeholder="Search" />
            <div id="global-search-dropdown-container">
                <button class="gs-current-version btn" type="button" data-toggle="dropdown">
                    <span id="gs-current-version-label">1.6</span>
                    <svg class="gs-dropdown-caret" viewBox="0 0 32 32" class="icon icon-caret-bottom" aria-hidden="true">
                        <path class="dropdown-caret-path" d="M24 11.305l-7.997 11.39L8 11.305z"></path>
                    </svg>
                </button>
                <ul class="gs-opt-group gs-version-dropdown">
                    <li class="gs-opt gs-versions">master</li>
                    <li class="gs-opt active gs-versions">1.6</li>
                    <li class="gs-opt gs-versions">1.5.0</li>
                    <li class="gs-opt gs-versions">1.4.1</li>
                    <li class="gs-opt gs-versions">1.3.1</li>
                    <li class="gs-opt gs-versions">1.2.1</li>
                    <li class="gs-opt gs-versions">1.1.0</li>
                    <li class="gs-opt gs-versions">1.0.0</li>
                    <li class="gs-opt gs-versions">0.12.1</li>
                    <li class="gs-opt gs-versions">0.11.0</li>
                </ul>
            </div>
            <span id="global-search-close">x</span>
        </form>
    </div>
    `);

  $(".trigger").prepend(`
    <div id="global-search-mobile-border">
        <div id="gs-search-icon-mobile"></div>
        <input id="global-search-mobile" placeholder="Search..." type="text"/>
        <div id="global-search-dropdown-container-mobile">
            <button class="gs-current-version-mobile btn" type="button" data-toggle="dropdown">
                <svg class="gs-dropdown-caret" viewBox="0 0 32 32" class="icon icon-caret-bottom" aria-hidden="true">
                    <path class="dropdown-caret-path" d="M24 11.305l-7.997 11.39L8 11.305z"></path>
                </svg>
            </button>
            <ul class="gs-opt-group gs-version-dropdown-mobile">
                <li class="gs-opt gs-versions">master</li>
                <li class="gs-opt active gs-versions">1.6</li>
                <li class="gs-opt gs-versions">1.5.0</li>
                <li class="gs-opt gs-versions">1.4.1</li>
                <li class="gs-opt gs-versions">1.3.1</li>
                <li class="gs-opt gs-versions">1.2.1</li>
                <li class="gs-opt gs-versions">1.1.0</li>
                <li class="gs-opt gs-versions">1.0.0</li>
                <li class="gs-opt gs-versions">0.12.1</li>
                <li class="gs-opt gs-versions">0.11.0</li>
            </ul>
        </div>
    </div>
  `);

  $.getScript(
    "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js",
    function () {
      const default_version = $("#gs-current-version-label").text();
      // bind docsearch
      const globalSearch = docsearch({
        apiKey: "500f8e78748bd043cc6e4ac130e8c0e7",
        indexName: "apache_mxnet",
        inputSelector: "#global-search",
        algoliaOptions: {
          facetFilters: ["version:" + default_version],
        },
        debug: false, // Set debug to true if you want to inspect the dropdown
      });

      const globalSearchMobile = docsearch({
        apiKey: "500f8e78748bd043cc6e4ac130e8c0e7",
        indexName: "apache_mxnet",
        inputSelector: "#global-search-mobile",
        algoliaOptions: {
          facetFilters: ["version:" + default_version],
          hitsPerPage: 5,
        },
        debug: false, // Set debug to true if you want to inspect the dropdown
      });

      // search bar animation and event listeners for desktop
      $("#gs-search-icon").click(function () {
        $(".trigger").fadeOut("fast", function () {
          $("#global-search-form").css("display", "inline-block");
          $("#global-search-close").show();
          $("#global-search-dropdown-container").show();
          $("#global-search")
            .animate({
              width: "300px",
            })
            .focus();
        });
      });

      $("#global-search-close").click(function () {
        $("#global-search-dropdown-container").hide();
        $("#global-search").animate(
          {
            width: "0px",
          },
          function () {
            $(this).hide();
            $("#global-search-form").hide();
            $(".trigger").fadeIn("fast");
          }
        );
      });

      $("#global-search-dropdown-container").click(function (e) {
        $(".gs-version-dropdown").toggle();
        e.stopPropagation();
      });

      $("ul.gs-version-dropdown li").each(function () {
        $(this).on("click", function () {
          $("#global-search").val("");
          $(".gs-version-dropdown li.gs-opt.active").removeClass("active");
          $(this).addClass("active");
          $("#gs-current-version-label").html(this.innerHTML);
          globalSearch.algoliaOptions = {
            facetFilters: ["version:" + this.innerHTML],
          };
        });
      });

      // search bar event listeners for mobile and tablet
      $("#global-search-dropdown-container-mobile").click(function (e) {
        $(".gs-version-dropdown-mobile").toggle();
        e.stopPropagation();
      });

      $("ul.gs-version-dropdown-mobile li").each(function () {
        $(this).on("click", function () {
          $("#global-search-mobile")
            .val("")
            .attr("placeholder", "v - " + this.innerHTML);
          $(".gs-version-dropdown-mobile li.gs-opt.active").removeClass(
            "active"
          );
          $(this).addClass("active");
          globalSearchMobile.algoliaOptions = {
            facetFilters: ["version:" + this.innerHTML],
            hitsPerPage: 5,
          };
        });
      });

      // Common logic
      $(document).click(function () {
        $(".gs-version-dropdown").hide();
        $(".gs-version-dropdown-mobile").hide();
      });
    }
  );
});
