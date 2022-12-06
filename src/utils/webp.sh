#!/bin/bash

#convert all png files in client/images/ to webp, then delete the png source.
#requires cwebp encoder: https://developers.google.com/speed/webp/docs/cwebp
for file in client/images/*.png ; do cwebp -q 70 -short "$file" -o "${file%.png}.webp"; rm -f "$file"; done