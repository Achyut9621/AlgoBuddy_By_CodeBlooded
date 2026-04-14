# AlgoBuddy_By_CodeBlooded

AlgoBuddy is a DSA learning platform with topic notes, an online compiler, and an AI chatbot.

## Stack

- Frontend: React + Tailwind CSS
- Backend: Flask
- Chatbot API: Gemini
- Compiler API: Judge0 via RapidAPI

## Local Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
copy .env.example .env
python app.py

```

Add your keys to backend/.env:

```env
GEMINI_API_KEY=your_gemini_api_key_here
JUDGE0_API_KEY=your_judge0_api_key_here
```

The backend runs at http://localhost:5000

### Frontend

```bash
cd frontend
npm install
copy .env.example .env
npm start
```

Frontend default:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

The frontend runs at http://localhost:3000

## Working Features
-Static DSA notes and topic pages
-Chatbot page calling POST /chat
-Compiler page calling POST /compile

## Project Structure

```text
AlgoBuddy/
|-- backend/
|-- frontend/
`-- README.md
```

