# auth-postgres-prisma-nextjs

# 🚀 Simple Next.js 13 App Router starter kit that uses NextAuth.js for auth, Prisma as the ORM, and Vercel Postgres as a database. 🚀

https://github.com/coding-to-music/auth-postgres-prisma-nextjs

https://auth-postgres-prisma-nextjs.vercel.app

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
git remote add origin git@github.com:coding-to-music/auth-postgres-prisma-nextjs.git
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

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=Next.js%20Prisma%20PostgreSQL%20Auth%20Starter&demo-description=Simple%20Next.js%2013%20starter%20kit%20that%20uses%20Next-Auth%20for%20auth%20and%20Prisma%20PostgreSQL%20as%20a%20database.&demo-url=https%3A%2F%2Fnextjs-postgres-auth.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F7rsVQ1ZBSiWe9JGO6FUeZZ%2F210cba91036ca912b2770e0bd5d6cc5d%2Fthumbnail.png&project-name=Next.js%%20Prisma%20PostgreSQL%20Auth%20Starter&repository-name=nextjs-postgres-auth-starter&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-postgres-auth-starter&from=templates&skippable-integrations=1&env=NEXTAUTH_SECRET&envDescription=Generate%20a%20random%20secret%3A&envLink=https://generate-secret.vercel.app/&stores=%5B%7B"type"%3A"postgres"%7D%5D)

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
