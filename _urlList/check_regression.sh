#! /bin/sh

cat blc_output.txt | uniq | grep -Eo "(http|https).* " | sort| uniq > unique_current_urls.txt

cat url_list.txt unique_current_urls.txt | sort | uniq > new_url_list.txt
regression=false
while IFS= read -r line
do
	err=$(curl -Is $line | head -n 1 | grep 404)
	if [ "$err" ]; then
		if [ "$regression" = false ] ; then
			echo "FAIL: REGRESSION"
			regression=true
		fi
		echo "BROKEN $line $err"
	fi
	unset err
done < new_url_list.txt
cp new_url_list.txt url_list.txt
if [ $regression ]; then
	echo "FAIL"
else 
	echo "SUCCESS"
fi
