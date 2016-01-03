#!/bin/bash

TEMPLATE=/srv/ghost/content-template
DIR=/srv/ghost/content

echo "Checking for existing content in $DIR..."
if [ ! "$(ls -A $DIR)" ]; then
  echo "No content, copying from $TEMPLATE to $DIR"
  cp -Rvf $TEMPLATE/* $DIR/
else
  echo "Content already exists"
fi

cd /srv/ghost
npm start --production
