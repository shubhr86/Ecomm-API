
```markdown
# E-commerce Inventory Management API

A simple RESTful API built with Node.js and MongoDB (using MongoDB Atlas) to manage product inventory for an e-commerce platform. This API allows an admin to create, view, delete, and update product quantities in the database.

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB (using MongoDB Atlas)**

## Features

- Add a product to the inventory.
- List all products in the inventory.
- Delete a specific product by ID.
- Update the quantity of a product by ID (increment or decrement).

## Prerequisites

- **Node.js** (v14+)
- **MongoDB Atlas** account (or a local MongoDB server)
- **Postman** or **cURL** for API testing

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ecommerce-inventory-api.git
   cd ecommerce-inventory-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the project root with the following variables:
   ```plaintext
   MONGODB_URI=<Your MongoDB Atlas connection string>
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3000`.

## API Documentation

### 1. Add a Product
- **Endpoint**: `/products/create`
- **Method**: `POST`
- **Body**: `JSON`
   ```json
   {
     "name": "Product Name",
     "quantity": 10
   }
   ```
- **Response**: Returns the created product.

### 2. List Products
- **Endpoint**: `/products`
- **Method**: `GET`
- **Response**: Returns an array of all products.

### 3. Delete a Product
- **Endpoint**: `/products/:id`
- **Method**: `DELETE`
- **Params**: `id` (product ID)
- **Response**: Returns a message indicating success or failure.

### 4. Update Product Quantity
- **Endpoint**: `/products/:id/update_quantity/?number=10`
- **Method**: `POST`
- **Params**: `id` (product ID)
- **Query**: `number` (integer, positive to increase, negative to decrease)
- **Response**: Returns the updated product data.

## Folder Structure

```
ecommerce-inventory-api/
├── controllers/       # Request handlers for each route
│   └── productController.js
├── models/            # Database schemas/models
│   └── product.js
├── routes/            # Route definitions
│   └── productRoutes.js
├── config
│   └── db.js          # Db configuration
├── .env               # Environment variables
├── app.js             # Main application file
├── README.md          # Project documentation
└── package.json       # Node dependencies and scripts
```

## Running Tests

To test the API endpoints, you can use **Postman** or **cURL**. Below is an example request for each route.

### Example cURL Requests

1. **Add Product**
   ```bash
   curl -X POST http://localhost:3000/products/create -H "Content-Type: application/json" -d '{"name":"Example Product", "quantity":10}'
   ```

2. **List Products**
   ```bash
   curl http://localhost:3000/products
   ```

3. **Delete Product**
   ```bash
   curl -X DELETE http://localhost:3000/products/<product_id>
   ```

4. **Update Quantity**
   ```bash
   curl -X POST "http://localhost:3000/products/<product_id>/update_quantity/?number=5"
   ```

## License

This project is open-source and available under the MIT License.
```
