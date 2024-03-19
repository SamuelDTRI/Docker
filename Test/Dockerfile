# Usa una imagen base de Node.js (elige la versión que necesites)
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /Escritorio/Docker/Test

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu aplicación al contenedor
COPY . .

# Expone el puerto en el que se ejecutará tu aplicación (ajústalo según tus necesidades)
EXPOSE 3000

# Comando para ejecutar tu aplicación (reemplaza "index.js" con el nombre de tu archivo principal)
CMD ["node", "index.js"]
