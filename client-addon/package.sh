#!/bin/bash
DISTDIR="dist"
ZIPFILENAME="${PWD##*/}.xpi"
SRCDIR="src"
mkdir -p $DISTDIR
rm "$DISTDIR/$ZIPFILENAME" &>/dev/null
zip -r "$DISTDIR/$ZIPFILENAME" $SRCDIR/*
exit
