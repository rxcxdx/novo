#!/bin/bash

REMOTE_REPO="git@github.com:rxcxdx/novo.git"

git init -b master
git remote add origin $REMOTE_REPO

git add .
git commit -m "improve"
git push -f origin master