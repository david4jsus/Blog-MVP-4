# Blog MVP 4

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The title is not great, but it's accurate, as this is the fourth prototype for a type of blog I want to make. This prototype is, however, functional (the first of the four to finally be functional, that is).

## So this is a type of blog?

I dabble into music production, as well as writing about video games. I wanted to start writing a blog where I can not only share my thoughts about games I enjoy, but also share compositions inspired by these games. That's when I decided to make a blog that could show articles, information about the games related to the articles, and show a music player with all the music I compose that is inspired by the games I write about.

## Features
- Fast, single-page-application experience (provided by Next.js).
- Content loaded from WordPress, which is used in this project as a headless CMS using its REST API.
- Articles that show the article content, information about the related game, and a comment section for each article.
- "Game pages" that show information about a particular game, as well as a list of all articles written about that game.
- A music player that loads tracks from SoundCloud and includes a custom library with a custom queue.
  - Track looping functionality.
  - Shuffle queue functionality.
  - Functionality to expand the player to show the library or hide the player and reduce it to a single icon, to take less space on the screen.
- [Incremental Site Regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) to automatically load new content from WordPress.

## Is this project complete?

Well, this is just a prototype (although a working one). You can check the deployed version of this project with the link below. This readme file will be updated when I get around to implementing the final version of this idea (this is just a hobby, and I'm not terribly great at time management... so just give me some time to produce the actual, final product).

### Deployment

This project is deployed with Vercel [here](https://blog-mvp-4.vercel.app/). Just remember that all data in this site is sample data, **not actual blog content!**

## Next.js Readme Documentation

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
