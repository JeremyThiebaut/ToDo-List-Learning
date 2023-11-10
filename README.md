# Todo App

## Description

Ceci est une application Todo construite avec :

- Vite.JS
- React.JS
- Node.JS
- Express.JS
- TypeScript
- MySQL
- Docker

Elle vous permet de lister vos tâches très simplement.

## Installation sans Docker

Pour installer et exécuter cette application, suivez les étapes suivantes :

1. **Clonez le dépôt :**

```bash
git clone https://github.com/JeremyThiebaut/ToDo-List.git
```

2. **Installez les dépendances du front-end :**

```bash
cd ./front-end
npm install
```

3. **Lancez l'application front-end :**

```bash
npm run dev
```

4. **Installez les dépendances du back-end :**

```bash
cd ../back-end
npm install
```

5. **Lancez l'application back-end :**

```bash
npm run dev
```

6. Variable d'environnement :

Créez une copie du fichier `./back-end/.env.example` et renommez-le en `.env.`
Éditez-le pour qu'il corresponde à votre base de données (MySQL).

7. Modèle de données :

Copiez le modèle de données qui se trouve dans le fichier :

```bash
cd ./back-end/init.sql
```

et collez-le dans votre MySQL.

exemple:

```bash
mysql -u "user" -p
Enter password: "your password"

!!! Past code here !!!
```

## Installation avec Docker

1. **Clonez le dépôt :**

```bash
git clone https://github.com/JeremyThiebaut/ToDo-List.git
```

2. **Variables d'environnement :**

- Créez une copie du fichier `./back-end/.env.example` et renommez-le en `.env.`
- Faites de même avec le fichier Docker `./.env.example` et renommez-le en `.env`.

3. **Lancez l'application :**

Depuis la racine de votre projet :

```bash
docker compose up -d --build
```

## Fin

L'application devrait maintenant être accessible à l'adresse `http://localhost:5173`.
