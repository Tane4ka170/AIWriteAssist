# AI Writing Assistant

## Description

This project is a web application for improving texts using AI. It includes a client and server part, supports user authentication, and provides text analysis, grammar checking, and spell checking features.

## Project Structure

### Client (React + Vite)

- **Framework**: React 19 + Vite
- **Authentication**: Privy (email, wallet, Google, GitHub)
- **UI**: Tailwind CSS
- **Routing**: React Router
- **Main Components**:

  - `<span>Home</span>` – Home page
  - `<span>About</span>` – About us
  - `<span>Editor</span>` – Text editor
  - `<span>NavBar</span>` – Navigation bar
  - `<span>LoginPage</span>` – Login page

  ### Server (Node.js + Express)

* **Framework**: Express
* **External Libraries**:

  - `<span>cors</span>` – Enables CORS requests
  - `<span>dotenv</span>` – Loads environment variables
  - `<span>axios</span>` – For HTTP requests
  - `<span>openai</span>` – Integration with OpenAI API

* **Main API Routes**:

  - `<span>/api/analyze</span>` – Text analysis
  - `<span>/api/grammarcheck</span>` – Grammar checking
  - `<span>/api/spellcheck</span>` – Spell checking

  ## Installation and Running

### 1. Start Client

```
cd client
npm install
npm run dev
```

### 2. Start Server

```
cd server
npm install
npm start
```

## Dependencies

### Client:

- `<span>react</span>`, `<span>react-dom</span>`, `<span>react-router-dom</span>`
- `<span>@privy-io/react-auth</span>`
- `<span>tailwindcss</span>`
- `<span>@vitejs/plugin-react</span>`

### Server:

- `<span>express</span>`
- `<span>cors</span>`
- `<span>dotenv</span>`
- `<span>axios</span>`
- `<span>openai</span>`

## Additional Features

- Embedded wallets for users without their own wallets
- Light theme with a custom accent color
- Login via email, wallet, Google, GitHub

## Contact

If you have any questions or suggestions, feel free to contact the developer
