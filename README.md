# Divelog

* Node shell

      docker run -it -v $PWD:/home/node/app -p 80:3000 node /bin/bash
      docker run -it -v $PWD:/home/node/app node /bin/bash

* Create node dev environment

      docker-compose build

* Deploy to github pages

      docker-compose up
      docker exec -it divelog_web_1 yarn deploy