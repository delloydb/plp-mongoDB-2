# plp-mongoDB-2
# Express.js Product API

## 📦 Setup
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
3.Create a .env file based on .env.example
4.Start the server:
API Endpoints
Method	Endpoint	Description
GET	/api/products	List all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

All endpoints require a header: x-api-key: your_api_key

🔍 Advanced Features
Filter by category: /api/products?category=Electronics

Pagination: /api/products?page=2

More features coming soon (search, stats)

curl -H "x-api-key: your_api_key" http://localhost:3000/api/products
### 🚀 Final Steps (GitHub Submission)

```bash
git add .
git commit -m "Week 2 Express.js REST API complete"
git push
