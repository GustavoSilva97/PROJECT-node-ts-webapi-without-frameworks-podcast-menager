# 🎙️ Podcast Menager

A Netflix-style app built to centralize video podcast episodes, organized by categories like health, fitness, mindset, politics, science, and more.

## 📌 Description

**Podcast Menager** is a RESTful API that returns a list of podcast episodes organized by category. The goal is to make it easier to browse and organize video podcast content from different shows, with filters by name and category.

---

## 🚀 Features

* ✅ **List episodes by category**
* ✅ **Filter episodes by podcast name**

---

## 📂 Response Format

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "category": ["health", "fitness", "bodybuilding"]
  },
  {
    "podcastName": "flow",
    "episode": "GUSTAVO GAIOFATO - Flow #463",
    "videoId": "FEuAZWDrAKs",
    "cover": "https://i.ytimg.com/vi/FEuAZWDrAKs/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=FEuAZWDrAKs",
    "category": ["politics", "history"]
  }
]
```

---

## 🛠️ Tech Stack

This project uses a lightweight and efficient toolset for building a Node.js API with TypeScript:

| Tool                                                          | Description                                                           |
| ------------------------------------------------------------- | --------------------------------------------------------------------- |
| [**Node.js**](https://nodejs.org/)                            | JavaScript runtime for building server-side applications              |
| [**TypeScript**](https://www.typescriptlang.org/)             | Superset of JavaScript adding static typing                           |
| [**HTTP (Node.js module)**](https://nodejs.org/api/http.html) | Built-in module for creating HTTP servers                             |
| [**tsx**](https://github.com/esbuild-kit/tsx)                 | Fast TypeScript runtime for development and watch mode                |
| [**tsup**](https://tsup.egoist.dev/)                          | Zero-config bundler for TypeScript projects                           |
| [**@types/node**](https://www.npmjs.com/package/@types/node)  | Type definitions for Node.js, enabling IntelliSense and type checking |

---

## 🧠 Project Structure

* `app.ts`: Main application file that handles HTTP routing
* `server.ts`: Starts the HTTP server and sets the listening port
* `services/list-episodes-service`: Contains the logic to list all episodes
* `services/filter-episodes-service`: Contains the logic to filter episodes
* `controllers/podcasts-controller.ts`: Contains to controll the requests and responses between server and frontend
* `models`: Contains Interface Podcast Model and Data Transfer Object (dto)
* `routes/routes.ts`: Enum with the defined API routes
* `utils/http-methods.ts`: Enum with allowed HTTP methods, Content Types and Status Codes

---

## 📬 API Endpoints

| Method | Route                | Description                      |
| ------ | -------------------- | -------------------------------- |
| GET    | `/api/list`          | Lists all episodes               |
| GET    | `/api/episode?p=xyz` | Filters episodes by podcast name |

---

## ▶️ Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/podcast-menager.git
cd podcast-menager

# Install dependencies (if any)
npm install

# Create a .env file and set your desired port
echo "PORT=3636" > .env

# Start the server
npm run start:dev
```

Visit: [http://localhost:3636/api/list](http://localhost:3636/api/list)

---

## 📌 Future Plans

* 🔄 Add database support
* 🎯 Create unit tests
* 🎨 Build a frontend UI to consume the API
* 📱 Integrate with external video players (e.g. YouTube API)

---

## 👨‍💻 Author

Developed by **Gustavo Henrique**
Contact: \[[gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)]

---
