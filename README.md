# Feedback App – Backend

This is the **Node.js + Express.js backend** for the Feedback Collection Application. It handles feedback submissions, stores them in a MongoDB Atlas cluster, and exposes RESTful APIs to be consumed by the Angular frontend.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv
- body-parser

---

## Folder Structure

backend/
├── controllers/
│ └── feedbackController.js # Logic for fetching and submitting feedback
├── models/
│ └── Feedback.js # Mongoose schema definition
├── routes/
│ └── feedbackRoutes.js # Routes for feedback API
├── .env.example # Sample environment file
├── server.js # Entry point for backend server
├── package.json # Project metadata and scripts
└── README.md


---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saivivek1102/feedback-app-backend.git
cd feedback-app/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root of the `backend` folder using the following format:

```env
PORT=5000
MONGO_URI=your-mongodb-uri-here
```

>  **Note:** Do **not** commit your `.env` file to version control. A `.env.example` file has been provided to indicate the required keys. The actual value for `MONGO_URI` (MongoDB Atlas URI) will be shared with the reviewer **via email**.

### 4. Start the Server

```bash
npm start
```

By default, the backend server will be accessible at:  
🔗 `http://localhost:5000`

---

## API Endpoints

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| GET    | /api/feedback   | Fetch all feedback entries   |
| POST   | /api/feedback   | Submit new feedback response |
| GET    | /api/feedback/:id| Fetch a single feedback entry by ID|
| PUT    | /api/feedback/:id| Update feedback entry by ID |
| DELETE | /api/feedback/:id| Delete feedback entry by ID |


## Example API Requests and Responses

### POST `/api/feedback`

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "rating": 4,
  "comments": "Great experience with the app!"
}
```

**Response:**
```json
{
  "_id": "6639f94cc83bdb001eacb1a1",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "rating": 4,
  "comments": "Great experience with the app!",
  "createdAt": "2024-05-20T12:34:56.789Z",
  "__v": 0
}
```

---

### GET `/api/feedback`

**Response:**
```json
[
  {
    "_id": "6639f94cc83bdb001eacb1a1",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "rating": 4,
    "comments": "Great experience with the app!",
    "createdAt": "2024-05-20T12:34:56.789Z",
    "__v": 0
  }
]
```

---

### GET `/api/feedback/:id`

**Response:**
```json
{
  "_id": "6639f94cc83bdb001eacb1a1",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "rating": 4,
  "comments": "Great experience with the app!",
  "createdAt": "2024-05-20T12:34:56.789Z",
  "__v": 0
}
```

---

### PUT `/api/feedback/:id`

**Request Body:**
```json
{
  "name": "Jane D.",
  "rating": 5
}
```

**Response:**
```json
{
  "_id": "6639f94cc83bdb001eacb1a1",
  "name": "Jane D.",
  "email": "jane@example.com",
  "rating": 5,
  "comments": "Great experience with the app!",
  "createdAt": "2024-05-20T12:34:56.789Z",
  "__v": 0
}
```

---

### DELETE `/api/feedback/:id`

**Response:**
```json
{ "message": "Feedback deleted successfully." }
```

---

## Testing the API

You can use Postman or CURL to test endpoints.

Example:

```bash
curl -X POST http://localhost:5000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","rating":5,"comments":"Great app!"}'
```

---

---

## MongoDB Atlas

- This project connects to a cloud-hosted **MongoDB Atlas** database.
- The connection string (`MONGO_URI`) is managed securely via the `.env` file.
- The actual credentials (including a preconfigured test database URI) will be **shared privately via email**.

```bash
PORT=5000
MONGO_URI=mongodb+srv://feedback_reviewer:yourPassword@yourCluster.mongodb.net/feedbackDB?retryWrites=true&w=majority
```

- Please create this `.env` file inside the `backend/` folder before running the server.

- Atlas provides scalability and high availability, ideal for cloud-deployed apps.

---


## Deployment Ready

- Supports deployment on platforms like Render, Railway, or DigitalOcean.
- Configuration managed with environment variables (`dotenv`).

---


