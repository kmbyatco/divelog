# Divelog

* Node shell

      docker run -it -v $PWD:/home/node/app -p 80:3000 node /bin/bash
      docker run -it -v $PWD:/home/node/app node /bin/bash

* Create node dev environment

      docker-compose build