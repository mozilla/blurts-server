#!/bin/bash
DISTDIR="$(pwd)/dist"
ZIPFILENAME="${PWD##*/}.xpi"
SRCDIR="$(pwd)/src"
cd $SRCDIR
rm $DISTDIR/$ZIPFILENAME
zip -r $DISTDIR/$ZIPFILENAME *
cd ..
exit
