# React Router Blog

A small blog app built with React, Vite, and React Router. It supports browsing posts, searching existing posts, creating a new post, viewing a post detail page, and deleting a post.

## Features

- Home page with a searchable list of posts
- Post detail page with delete action
- New post form with automatic date/time stamping
- About and 404 pages
- Tailwind-based styling with a glassmorphism look

## Tech Stack

- React 19
- React Router DOM
- Vite
- date-fns
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Routes

- `/` - Home feed
- `/about` - About page
- `/new-post` - Create a post
- `/post/:id` - View and delete a post
