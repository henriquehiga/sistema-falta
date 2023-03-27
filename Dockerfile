FROM node:16
WORKDIR /app/api/sistema-falta/
COPY package*.json ./
RUN npm i --force
COPY . .
CMD ["npm", "start"]
EXPOSE 5050