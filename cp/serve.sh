if [ ! -d "./node_modules" ]; then
  npm install
  sed -i 'bak' 's/git commit/git pair-commit/g' ./node_modules/gulp-git/lib/commit.js
fi

if [ ! -d "bower_componenets" ]; then
  bower install
fi

if [ ! -d "build" ]; then
  gulp build
fi

while true
do
  gulp serve
done
