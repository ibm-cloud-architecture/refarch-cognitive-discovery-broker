FROM node:alpine
MAINTAINER https://github.com/jbcodeforce/ - IBM
RUN mkdir -p /wds-broker
COPY . /wds-broker

WORKDIR /wds-broker
RUN cd /wds-broker
EXPOSE 6010
CMD node server/server
