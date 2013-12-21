# docker-node-build
#
# VERSION               0.3

FROM danscan/node

ADD app/ /app/app
ADD node_modules/ /app/node_modules
ADD built-assets/ /app/built-assets
ADD app.js /app/app.js
WORKDIR /app

ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

CMD node app.js