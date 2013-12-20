# docker-node-build
#
# VERSION               0.3

FROM danscan/node

RUN apt-get install -y ruby1.9 rubygems
RUN gem install foreman

EXPOSE 3000
ADD . /app
ADD build /app/app
WORKDIR /app
RUN node app.js