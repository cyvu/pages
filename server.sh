#!/bin/bash
config=$1
command=$2
cases="build serve env-dev env-prod"

if [ -z $command ]; then
  arguments=$config
else
  arguments=$command
fi

case $arguments in
  build|Build)
    cd config && npm run build
  ;;

  serve|Serve)
    cd config && npm run serve
  ;;

  env-dev)
    cd config && npm run set-dev
  ;;

  env-prod)
    cd config && npm run set-prod
  ;;

  *)
    echo Unknown command.
    echo Enter one of the following commands as an argument:
    echo $cases

    #if [ "$arg2" = 'start' ] || [ "$arg2" = "Start" ]; then
    #  echo Server starting...
    #else
    #  exit 1
    #fi
  ;;
esac