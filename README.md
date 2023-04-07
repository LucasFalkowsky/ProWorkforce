This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, initialize the Database with Prisma:

```bash
npx prisma generate
```

Make shure docker is installed:

```bash
docker -v
```

Make shure docker is running:

```bash
docker run hello-world
```

Initialise the Project:

```bash
docker compose up
```

Migrate the schema to the Database:

```bash
npx prisma migrate dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Application.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Open [http://localhost:6006](http://localhost:6006) with your browser to see the projects Storybook.

To gain access to a visualisation of the database run:

```bash
npx prisma studio
```

Open [http://localhost:5555](http://localhost:5555) with your browser to see the database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
