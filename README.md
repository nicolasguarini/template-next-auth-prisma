# Template with Next.js, Typescript, Prisma, Auth.js, and Tailwind CSS 

## Install Dependencies
```bash
npm install
```

## Generate Auth secret
Auth.js libraries require you to set an AUTH_SECRET environment variable. This is used to encrypt cookies and tokens. It should be a random string of at least 32 characters. On UNIX based systems you can use this command:
```bash
npx auth secret
```
You have to set the `AUTH_SECRET` environment variable in your .env file.

## Setup Providers
By default, there is only the GitHub provider. You can add more providers by following the instructions in the [Auth.js docs](https://authjs.dev/getting-started/authentication/oauth).

As for GitHub, you need to create an OAuth Application by going to Settings > Developer Settings > OAuth Apps > New.
Then save the client ID and secret in the .env file like this:
```bash
AUTH_GITHUB_ID=xxxxxxxxxxxxxxxxxxxx
AUTH_GITHUB_SECRET=xxxxxxxxxxxxxxxxxxx
```

## Setup Database
You can use any database you want. By default, this template uses MongoDB. You can easily create a MongoDB instance on [Mongo Atlas](https://www.mongodb.com/atlas/database).
Once you have created a database, you need to save the connection string in the .env file like this:
```bash
DATABASE_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/databasename?retryWrites=true&w=majority
```

## Setup Prisma Adapter
The schema for MongoDB is already implemented in the `prisma/schema.prisma` file, with all the collections needed to manage users/authentication. You can then add the collections you want, referring to the [Prisma documentation](https://www.prisma.io/docs/orm/prisma-schema).

If you are using a different database than MongoDB, you have to change the `prisma/schema.prisma` file to match your database and schema. You can find the schema for your database in the [Auth.js doc](https://authjs.dev/getting-started/adapters/prisma).

Then you have to run this command to create the client:

```bash
npx prisma generate
```

If you are using a relational database, you have to run this command to create the tables:

```bash
npx prisma migrate dev
```
or
```bash
npx prisma db push
```
## Run the app
Your .env file will have to look like this:
```bash
DATABASE_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/databasename?retryWrites=true&w=majority
AUTH_SECRET=xxxxxxxxxxxxxxxxxxx
AUTH_GITHUB_ID=xxxxxxxxxxxxxxxxxxxx
AUTH_GITHUB_SECRET=xxxxxxxxxxxxxxxxxxx
```
Then you can run the app with:
```bash
npm run dev
```
## Credits
Made by [Nicolas Guarini](https://github.com/nicolasguarini).