AUTHOR=tumble
FILE=_scores/t.md
awk -v author="$AUTHOR" '/^---/ && !found {print; print "mod: " author; found=1; next} 1' $FILE > temp && mv temp $FILE
