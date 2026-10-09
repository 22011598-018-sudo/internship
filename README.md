# Internship - Login Screen

Single-screen React app (Vite) with a polished login page.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173

Demo login: `intern@example.com` / `Intern@123`

## Folder structure

```
internship/
├── public/                 # Static files (favicon)
├── src/
│   ├── assets/             # Images, fonts
│   ├── components/         # Reusable UI pieces (one folder each: JSX + CSS + index.js)
│   │   ├── Alert/
│   │   ├── Button/
│   │   ├── Checkbox/
│   │   ├── HeroPanel/
│   │   ├── InputField/
│   │   ├── LoginForm/
│   │   ├── Logo/
│   │   ├── SocialButton/
│   │   └── icons/
│   ├── constants/          # App-wide constants and messages
│   ├── hooks/              # Custom hooks (useLoginForm)
│   ├── layouts/            # Page layouts (AuthLayout)
│   ├── pages/              # Screens (LoginPage)
│   ├── services/           # API calls (authService - mocked)
│   ├── styles/             # Design tokens + global CSS
│   ├── utils/              # Helpers (validators)
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
└── vite.config.js          # "@" alias points to /src
```

## Connecting a real backend

Edit `src/services/authService.js` and replace the mock with a `fetch` call to `VITE_API_URL`.
