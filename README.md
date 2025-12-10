# TaskTrack API

A simple and clean task management REST API built with **Node.js**, **Express**, **Prisma ORM** and **SQLite**.

##  Technologies
- Node.js  
- Express  
- Prisma ORM  
- SQLite  
- JWT (Authentication)

---

##  How to run the project

### 1. Install dependencies
```bash
npm install
```

### 2. Create a `.env` file with:
```env
JWT_SECRET=your_secret_here
```

### 3. Run Prisma migrations
```bash
npx prisma migrate dev --name init
```

### 4. Start the server
```bash
npm run dev
```

The server will run at:  
```
http://localhost:3000
```

---

##  Endpoints Summary

###  Auth
| Method | Route          | Description            |
|--------|----------------|------------------------|
| POST   | /auth/register | Create a new user      |
| POST   | /auth/login    | Login and get a token  |

### Tasks
| Method | Route                 | Description              |
|--------|------------------------|--------------------------|
| GET    | /tasks                 | List all user tasks      |
| POST   | /tasks                 | Create a new task        |
| PATCH  | /tasks/:id/toggle      | Toggle task “done” state |
| DELETE | /tasks/:id             | Delete a task            |

---

##  Project Structure
```
src/
 ┣ controllers/
 ┣ middlewares/
 ┣ prisma/
 ┣ routes/
 ┗ server.js
```

---

## License
MIT License.
