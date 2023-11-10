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

## Installation sans Docker:

Pour installer et exécuter cette application, suivez les étapes suivantes :

1. Clonez le dépôt :

```bash
git clone https://github.com/JeremyThiebaut/ToDo-List.git
```

2. Installez les dépendances du front-end :

```bash
cd ./front-end
npm install
```

3. Lancez l'application front-end:

```bash
npm run dev
```

4. Installez les dépendances du back-end :

```bash
cd ../back-end
npm install
```

5. Lancez l'application back-end:

```bash
npm run dev
```

6. Variable d'environement :

Créer une copie du fichier `./back-end/.env.exemple` et renomez le en `.env`.
Editez le pour qu'il correspondent a votre bdd (mysql).

7. Modele :

Copiez le modele de données qui se trouve dans le fichier :

```bash
cd ./back-end/init.sql
```

et collez le dans votre mysql.

exemple:

```bash
mysql -u "user" -p
Enter password: "your password"

!!! Past code here !!!
```

## Installer avec Docker

1. Clonez le dépôt :

```bash
git clone https://github.com/JeremyThiebaut/ToDo-List.git
```

2. Variable d'environement :

- Créer une copie du fichier `./back-end/.env.exemple` et renomez le en `.env`.
- Faite de meme avec docker `./.env.exemple` et renomez le en `.env`.

3. Lancer l'application

Depuis la racine de votre projet

```bash
docker compose up -d --build
```

## Fin

L'application devrait maintenant être accessible à l'adresse `http://localhost:5173`.
