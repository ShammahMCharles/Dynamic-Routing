# Dynamic Routing App

This project demonstrates a simple React app that combines dynamic routing with a basic client-side authentication flow.

## What I implemented

- Dynamic routes in React Router to generate pages from data.
- A main index page that links to multiple dynamic detail pages.
- Route parameters such as slugs or IDs used to fetch and display the correct content for a specific page.
- A basic authentication system built with React Context.
- A protected route that redirects users who are not authenticated.
- Conditional UI rendering based on the user’s login state.

## Project flow

1. The app loads a list of items on the main page.
2. Each item links to a dynamic route like a slug or ID-based URL.
3. The page reads the route parameter and uses it to find the matching data.
4. The authentication context tracks whether a user is logged in or out.
5. Protected pages are only accessible to authenticated users.
6. The UI updates based on auth status, such as showing login or logout actions.

## Tech used

- React
- TypeScript
- Vite
- React Router
- Context API

## Run locally

```bash
npm install
npm run dev
```

This app is meant to be a clean example of how to structure route-driven pages and simple auth in a React application.
