# Auto Node
## Version 1.1

A bash script that creates the directory structure, and copies the required files for node, bower, and gulp for serving and building js node projects.
It also includes a script to create the pairs file for Epicodus students.

### How to use

#MY CONDITIONS FOR USING THIS PROGRAM
##Fork it to your own repository
Change your name and initials in paircreator.sh and autonode.sh - the default is my name
Run the script by typing
    ./autonode.sh - to create a new project including
* node
* bower
* gulp
* jquery
* scss
* bootstrap
* index.html, scss/styles.css, js/browser-interface.js, js/project_name.js

### Features

* Checks for existing .pairs file to prevent accidental overwriting
    * offers to write a pairs file if you haven't got one.
* Git Status in the server window
* Gulp Git Commit
* NON Crashing, auto refreshing, Gulp Serve
* Automatically installes npm and bower packages.
* Automatically opens atom for you to start writing your files while it does the above install.
* Opens the server at the end of the install so you can see your work.
* When pulling a project made with autonode from github just run ./serve.sh to node install, bower install, gulp build and gulp serve.
* ./serve.sh doesn't node or bower if the folders already exist

#### Easy-Commit

Just open message.txt, edit the message (the files entire contents are the commit message) and save to commit your work!

### By Nicholas Jensen-Hay

Pull requests accepted from:
* Joe Karasek - Fixed gulp serve crash

### License

Copyright (c) 2016 Nicholas Jensen-Hay

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
