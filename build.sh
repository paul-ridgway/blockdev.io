#!/bin/bash
cd $( dirname "${BASH_SOURCE[0]}" )

# Ensure clean before starting
rm -Rf source/ghost/*
mkdir -p source/ghost
cd source/ghost

echo "Downloading Ghost"
FILE=$(curl -fs 'https://ghost.org/download/' | grep -oe '\"/zip/ghost-.*.zip\"' | sed -e 's/^"//'  -e 's/"$//')
URL=https://ghost.org$FILE
echo "Using URL: $URL"
curl -L $URL -o ghost.zip
unzip ghost.zip
rm ghost.zip

cd ../..
docker build --force-rm=true -t ghost-blog .

echo "Cleaning up"
rm -Rf source/ghost/*
