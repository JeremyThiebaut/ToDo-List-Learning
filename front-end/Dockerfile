# Utilisez l'image de base Node.js version 20 avec Alpine Linux
FROM node:20-alpine

# Créez un répertoire pour votre application
RUN mkdir -p /usr/src/app

# Définissez le répertoire de travail pour votre application
WORKDIR /usr/src/app

# Copiez les fichiers de votre application dans le conteneur
COPY .dockerignore ./usr/src/app

# Copiez les fichiers de votre application dans le conteneur
COPY . /usr/src/app

# Copiez le package.json et le package-lock.json de votre application dans le conteneur
COPY package*.json ./usr/src/app

# Installez les dépendances de votre application
RUN npm install

# Exposez le port sur lequel votre application s'exécute
EXPOSE 5173

# Démarrez votre application en mode développement
CMD [ "npm", "run", "dev"]