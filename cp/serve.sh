if[ ! -d "node_modules" ]
  npm install
fi

if[ ! -d "bower_componenets" ]
  bower install
fi

if[ ! -d "build" ]
  gulp build
fi

while true
do
  gulp serve
done
