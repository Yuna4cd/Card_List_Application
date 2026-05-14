# Backend

Express API for the Card List Application. It serves product data from an in-memory array and supports deleting products during the current server session.

## Files

```txt
backend/
+-- data/
|   +-- products.js
+-- server.js
+-- package.json
+-- README.md
```

- `server.js`: Express app, middleware, API routes, and server startup.
- `data/products.js`: Product seed data used by the API.
- `package.json`: Backend dependencies and npm scripts.

## Prerequisites

- Node.js
- npm

## Install

```bash
npm install
```

## Run

Start the server:

```bash
npm start
```

Start with automatic restarts during development:

```bash
npm run dev
```

The API runs at:

```txt
http://localhost:5000
```

## API Routes

### Get Products

```http
GET /api/products
```

Returns all products.

Example response:

```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Comfortable wireless headphones with clear sound.",
    "price": 79.99,
    "image": "https://picsum.photos/seed/headphones/400/300"
  }
]
```

### Delete Product

```http
DELETE /api/products/:id
```

Deletes a product by numeric `id`.

Successful response:

```json
{
  "message": "Product deleted successfully",
  "products": []
}
```

Not found response:

```json
{
  "message": "Product not found"
}
```

## Data Behavior

The product list is stored in memory. Deleting a product changes the current server state only. Restarting the backend reloads the original products from `data/products.js`.
