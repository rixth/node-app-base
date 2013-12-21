# docker-node-build
#
# VERSION               0.3

FROM danscan/node

ADD releases/latest.tar /app.tar

RUN mkdir app && cd app && \
  tar -xvf /app.tar && \
  rm /app.tar

WORKDIR /app
ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

CMD node app.js