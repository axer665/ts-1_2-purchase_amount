FROM node:20

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
#COPY . .

RUN npm install npm@latest -g
RUN npm install

USER node

COPY --chown=node:node . .

CMD [ "npm", "start" ]