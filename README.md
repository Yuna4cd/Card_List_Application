# Card List Application

A simple full-stack product card application. The backend exposes product data through an Express API, and the frontend is a Vite React app intended to display products as cards and allow users to delete them.

## Project Structure

```txt
Card_List_Application/
+-- backend/
|   +-- data/
|   |   +-- products.js
|   +-- server.js
|   +-- package.json
|   +-- README.md
|
+-- frontend/
|   +-- src/
|   |   +-- api/
|   |   |   +-- products.js
|   |   +-- components/
|   |   |   +-- ProductCard.jsx
|   |   |   +-- ProductList.jsx
|   |   +-- App.jsx
|   |   +-- main.jsx
|   +-- package.json
|
+-- README.md
```

## Tech Stack

- Backend: Node.js, Express, CORS
- Frontend: React, Vite
- Frontend UI/API dependencies: Material UI, Emotion, MUI Icons, Axios

## Prerequisites

- Node.js
- npm

## Install Dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Run The Application

Start the backend API:

```bash
cd backend
npm run dev
```

The backend runs at:

```txt
http://localhost:5000
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Vite will print the frontend URL, usually:

```txt
http://localhost:5173
```

## Backend API

### Get Products

```http
GET /api/products
```

Returns the current list of products.

### Delete Product

```http
DELETE /api/products/:id
```

Deletes a product by numeric `id` and returns the updated product list. If the product does not exist, the API returns `404`.

## Available Scripts

Backend scripts:

```bash
npm start
npm run dev
```

Frontend scripts:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

- Product data is stored in memory from `backend/data/products.js`.
- Deleted products are reset when the backend server restarts.
- The frontend consumes the backend routes through `frontend/src/api/products.js`.
