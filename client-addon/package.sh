#!/bin/bash
DISTDIR="dist"
ZIPFILENAME="${PWD##*/}.xpi"
SRCDIR="src"
mkdir -p $DISTDIR
rm "$DISTDIR/$ZIPFILENAME" &>/dev/null
cd $SRCDIR
zip -r "../$DISTDIR/$ZIPFILENAME" *
cd ..
exit
