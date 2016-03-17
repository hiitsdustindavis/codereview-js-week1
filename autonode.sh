#!/bin/bash


# read input of project name from user
# make project folder
# make js, spec and css folders in project folder
# copy in jquery, mocha, chair, and spec files in
# intialize git in the folder
# ask to run pairs command to set authors
# create initial commit with blank files
./paircreator.sh
clear
echo What is the project called?
read project

if [ ! -d "$project" ]; then # if the directory does not exist
  mkdir ../"$project"
  mkdir ../"$project"/js ../"$project"/scss
  cp -r cp/js/. ../"$project"/js/
  touch ../"$project"/js/"$project".js
  cp -r cp/scss/. ../"$project"/scss/
  cp -r cp/. ../"$project"/
  echo "Directory created and files added"
else
  echo "Directory already exists"
fi


# make sure that works then

GIT_ADD="."
INITIAL_COMMIT_MESSAGE="Initial Commit"

cd ../"$project"

echo "Enter pairs intials"
read pairinitial


echo "Opening directory in atom"
atom .

npm install
bower install

sed -i 'bak' 's/git commit/git pair-commit/g' ./node_modules/gulp-git/lib/commit.js

if [ -d ".git" ]; then
  echo "Git already init"
else
  git init
  if (( $? )); then
    echo "Unable to git init"
  fi
  git pair njh "$pairinitial"
  if (( $? )); then
    echo "Unable to set authors"
  fi
  git add "$GIT_ADD"
  if (( $? )); then
    echo "Unable to git add"
  fi
  git commit -m "$INITIAL_COMMIT_MESSAGE"
  if (( $? )); then
    echo "Unable to git commit"
  fi
  echo "The directory was initialized"
fi

gulp build
gulp serve
