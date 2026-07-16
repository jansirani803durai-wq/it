# Nexora IT Company Website — Day 72

Responsive React + Vite + Tailwind CSS website with a Gemini chatbot and dynamically generated FAQ content.

## Run

```bash
npm install
cp .env.example .env
npm run dev
```

In `.env`:

```env
VITE_GEMINI_API_KEY=YOUR_NEW_GEMINI_API_KEY
```

## Build

```bash
npm run build
npm run preview
```

## Requirement Mapping

1. Vite setup: `package.json`, `vite.config.js`
2. Clean component: `src/App.jsx`
3. Hero, Services, About, FAQ, Contact: `App.jsx`
4. Static arrays: `src/data/siteData.js`
5. Reusable components: `src/components`
6. Tailwind responsive navbar: `Navbar.jsx`
7. `isChatbotOpen`: `App.jsx`
8. Chatbot component: `Chatbot.jsx`
9. Message history: `Chatbot.jsx`
10. Input and Send: `Chatbot.jsx`
11. Gemini chatbot API: `geminiService.js`
12. Message rendering: `Chatbot.jsx`
13. `faqContent`: `App.jsx`
14. `generateFaqWithGemini`: `geminiService.js`
15. `isFaqLoading`: `App.jsx`
16. Conditional loading + `map()`: `App.jsx`
17. Responsive classes: all components
18. Smooth scrolling: `Navbar.jsx`, `index.css`
19. Test guide: `SCREENSHOT_GUIDE.md`
20. Organized folders: components, data, services

## Security

`VITE_` variables are visible in the browser bundle. This is acceptable for a local learning demo, but a public production site should call Gemini through a backend and keep the key on the server.
