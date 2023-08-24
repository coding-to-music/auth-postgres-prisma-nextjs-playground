# auth-postgres-prisma-nextjs-playground

# 🚀 Simple Next.js 13 App Router starter kit that uses NextAuth.js for auth, Prisma as the ORM, and Vercel Postgres as a database. 🚀

https://github.com/coding-to-music/auth-postgres-prisma-nextjs-playground

https://auth-postgres-prisma-nextjs-playground.vercel.app

From / By https://vercel.com/templates/next.js/prisma-postgres-auth-starter

https://github.com/vercel/nextjs-postgres-auth-starter

https://nextjs-postgres-auth.vercel.app/

<!-- <div style="text-align:center;">
  <img src="/images/chakra.jpg" alt="Image" />
  <p><em>Chakra Component Library with Next.js</em></p>
</div> -->

## Node Environment:

```java
nvm use 18
```

## Environment variables:

see `.env-example`

Paste the `.env` values into `VercelDashboard-->Settings-->EnvironmentValues`

```java
# Used by Prisma:
#   url = env("POSTGRES_PRISMA_URL") // uses connection pooling
#   directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
#   shadowDatabaseUrl = env("POSTGRES_URL_NON_POOLING") // used for migrations

# Create a Postgres database on Vercel: https://vercel.com/postgres
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=

# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
NEXTAUTH_SECRET=
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/auth-postgres-prisma-nextjs-playground.git
git push -u origin main
```

<p align="center">
  <a href="https://nextjs-postgres-auth.vercel.app/">
    <img src="/public/logo.png" height="96">
    <h3 align="center">Next.js Prisma PostgreSQL Auth Starter</h3>
  </a>
</p>

<p align="center">
This is a <a href="https://nextjs.org/">Next.js</a> starter kit that uses <a href="https://next-auth.js.org/">Next-Auth</a> for simple email + password login<br/>
<a href="https://www.prisma.io/">Prisma</a> as the ORM, and a <a href="https://vercel.com/postgres">Vercel Postgres</a> database to persist the data.</p>

<br/>

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app nextjs-typescript-starter --example "https://github.com/vercel/nextjs-postgres-auth-starter"
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## This project was created via

https://nextjs.org/docs/pages/api-reference/create-next-app

```java
npx create-next-app auth-postgres-prisma-nextjs-playground --use-yarn -e https://github.com/coding-to-music/auth-postgres-prisma-nextjs
```

## Upgrade npm Packages

```
ncu
```

```java
Using yarn

[====================] 19/19 100%

 @types/node         ^18.11.9  →   ^20.5.4
 @types/react        ^18.0.25  →  ^18.2.21
 autoprefixer         ^10.4.4  →  ^10.4.15
 bcrypt                ^5.1.0  →    ^5.1.1
 eslint                8.11.0  →    8.47.0
 eslint-config-next   ^13.0.5  →  ^13.4.19
 next                 ^13.4.2  →  ^13.4.19
 next-auth            ^4.22.1  →   ^4.23.1
 postcss              ^8.4.12  →   ^8.4.28
 tailwindcss          ^3.0.23  →    ^3.3.3
 typescript            ^4.6.2  →    ^5.1.6

Run ncu -u to upgrade package.json
```
