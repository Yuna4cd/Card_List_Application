# Frontend

React frontend for the Card List Application. It fetches products from the backend API, renders them as Material UI cards, and lets users delete cards from the current backend session.

## Files

```txt
frontend/
+-- src/
|   +-- api/
|   |   +-- products.js
|   +-- components/
|   |   +-- ProductCard.jsx
|   |   +-- ProductList.jsx
|   +-- App.jsx
|   +-- main.jsx
+-- package.json
```

## Install

```bash
npm install
```

## Run

Start the frontend dev server:

```bash
npm run dev
```

The app expects the backend API at:

```txt
http://localhost:5000/api
```

To use a different API base URL, set `VITE_API_BASE_URL` before starting Vite.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```
