#!usr/bin/bash

echo "Begin to execute docker launch script"

sudo docker stop $(sudo docker ps -aq)

sleep 1

sudo docker build -t node-web-app .

sleep 1

sudo docker run --net=host -t -d node-web-app

echo "End to execute  docker launch script"