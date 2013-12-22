# node-app-base

Serves as a skeleton for node-backended websites and web applications. Flight is currently installed as the framework for the index page and tests, but this would be very easy to swap out.

Assets are served out of `app/public` in development. In production, they are expected to be in `built-assets`.

## Supported tech

* express
* flight
* requirejs
* handlebars
* less
* docker

## Grunt commands

* *build*: compiles all the things in to build-assets.
* *test*: runs the karma tests through once
* *test-watch*: runs the karma tests whenever files change
* *build*: compiles all the things in to build-assets.
* *package*: runs tests, builds the working tree, extracts the important bits and compresses it in to a tarball with git information as the filename. The latest tarball is symlinked as `releases/latest.tar`.

## Docker integration

Running `docker build .` in the working tree will create a container from the `latest.tar` release. The app runs on port 4000 internally, so to launch, run `docker run -p 4000 IMAGE_ID`, then `docker ps` to find the externally mapped port.
