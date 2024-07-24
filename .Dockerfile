FROM node:21

WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4550

CMD ["npm", "run", "start"]