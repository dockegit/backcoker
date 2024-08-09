# Usa una imagen base de Node.js
FROM node:20.12.2

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre tu aplicación
EXPOSE 5000

# Define el comando por defecto para correr tu aplicación
CMD ["npm", "start"]
