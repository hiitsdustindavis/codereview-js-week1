# Auto Node

A bash script that creates the directory structure, and copies the required files for node, bower, and gulp for serving and building js node projects.
It also includes a script to create the pairs file for Epicodus students.

### How to use

Clone the repository to a folder.
Change your name and initials in paircreator.sh and autonode.sh - the default is my name
Run the script by typing
    ./autonode.sh - to create a new project including
      * node
      * bower
      * gulp
      * jquery
      * scss
      * bootstrap
      * index.html, scss/styles.css, js/blank-interface.js

### Features

Automatically installes npm and bower packages.
Automatically opens atom for you to start writing your files while it does the above install.
Opens the server at the end of the install so you can see your work.
Checks for existing .pairs file to prevent accidental overwriting.
