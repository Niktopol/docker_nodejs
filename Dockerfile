FROM node:slim

COPY server.js /server/
COPY index.html /server/
WORKDIR /server/
RUN npm init -y && npm install
EXPOSE 3000
ENTRYPOINT [ "node", "./server.js" ]