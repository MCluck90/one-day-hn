# One Day Hacker News (1DHN)

A [Hacker News](https://news.ycombinator.com) client written in one day.

## Usage

### Prerequisites

- [Node.js](https://nodejs.org)
- [`http-server`](https://www.npmjs.com/package/http-server) or your favorite way of running a simple static server
  locally

### Build and Run

```sh
npm install # install dependencies
npm run build # build the app
npx http-server out # run it
```

## Why?

I had a free Sunday and thought it would be a fun exercise. I've used [esbuild](https://esbuild.github.io/) and
[vanilla-extract](https://vanilla-extract.style/) in tiny experiments but not in a full application.

## Design Goals

- Everything from scratch\*
- Stand-alone static site
- Uses mock data but trivial to connect to a real data source
- The general structure matches a real app

\* Pick my tools and tie them together myself. No boilerplates or `create-x-app` type commands.

## Non-Goals

- Be visually appealing
