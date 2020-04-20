#!/bin/bash

if [ -z "$1" ] || [ ! -d "$1" ] ; then
	printf "Usage: $0 <Directory to Search> <File Expression>\n"
	printf "\tex. tinypng.sh . 'thumb*.jpg' // All JPG thumbnails in current directory\n"
	printf "\tex. tinypng.sh subdirectory/ '*.png' // All PNG files under subdirectory\n"
	exit 1
fi

APIKEY="hf3Vd9cTDJcMhxb40rKcgYkXCgqg90N1"
LOGFILE="tinypng.log"

# Find all jpg/png files with names starting with 'thumb*' (thumbnails)
FILES="$(find $1 -type f)";
for FILE in $FILES ; do

	# Prepend './' if directory was given (to match output from '.')
	if [ "$1" != "." ] ; then
		FILE="./$FILE"
	fi

	# Sanity check to ensure file exists
	if [ -e "$FILE" ] ; then

		# Check if the file has been compressed previously
		if [ -e "$LOGFILE" ] && (grep -Fxq "$FILE" "$LOGFILE") ; then
			printf "$FILE has already been compressed\n"
			continue
		fi

		# Upload file to tinypng compression service
		printf "Uploading $FILE..\n"
		JSON=`curl --progress-bar https://api.tinypng.com/shrink --user api:$APIKEY --data-binary @"$FILE"`
		URL=`echo $JSON | grep -oP 'url\":\"\K.+(?=")'`
		RATIO=`echo $JSON | grep -oP 'ratio\":\K.+(?=,)'`

		# Download replacement if URL is given
		if [ -n "$URL" ] ; then 
			printf "URL: $URL\n"
			printf "Downloading replacement $FILE..\n"
			curl --progress-bar $URL > "$FILE" 
			printf "${FILE} is $RATIO%% smaller than the original\n"

			printf "$FILE\n" >> "$LOGFILE"
		fi

		printf "\n"
 	fi
done

unset -v APIKEY
unset -v LOGFILE
unset -v JSON
unset -v URL
unset -v RATIO