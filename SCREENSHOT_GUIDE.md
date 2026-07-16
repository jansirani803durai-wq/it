# Day 72 — Question-wise Screenshot Steps

## Setup
1. Open the project in VS Code.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and add a valid Gemini key.
4. Run `npm run dev`.
5. Open the localhost URL in Chrome.

## Q1 — Project Initialization
Show the VS Code Explorer with `package.json`, `vite.config.js`, `src`, and the terminal command:
`npm create vite@latest itcompany-website -- --template react`

## Q2 — Initial Cleanup
Open `src/App.jsx` and show `export default function App()`.

## Q3 — Core Sections
Show these IDs in `App.jsx`: `hero`, `services`, `about`, `faq`, `contact`. Take a browser Hero screenshot.

## Q4 — Static Content
Open `src/data/siteData.js` and show `services`, `initialFaqs`, and `stats`.

## Q5 — Reusable Components
Show the `src/components` folder containing Navbar, Footer, ServiceCard, FAQItem and Chatbot.

## Q6 — Navigation and Layout
Take a desktop navbar screenshot. Click Services and capture the Services section.

## Q7 — Chatbot State
Show `const [isChatbotOpen, setIsChatbotOpen] = useState(false);` in `App.jsx`.

## Q8 — Chatbot Component
Open `Chatbot.jsx` and show the component declaration. Take a browser screenshot with the chatbot open.

## Q9 — Message History
Show `const [messages, setMessages] = useState(...)` in `Chatbot.jsx`.

## Q10 — Input and Send
Type `What web development services do you provide?` in the chatbot without sending. Capture the input and Send button. Show the `send()` function in code.

## Q11 — Chatbot API Call
Open `geminiService.js`. Show `askGemini`, `generateText`, and the `fetch()` request. Also show `sendPromptToGemini` in `App.jsx`.

## Q12 — Displaying Messages
Send `How can cloud services help a small company?` Capture the user bubble, typing dots and AI response.

## Q13 — FAQ Data State
Show `const [faqContent, setFaqContent] = useState([]);`.

## Q14 — Gemini FAQ Call
Show `generateFaqWithGemini()` and its JSON-array prompt in `geminiService.js`.

## Q15 — Loading State
Show `isFaqLoading` in code. In Chrome DevTools select Slow 3G, refresh, and capture `Gemini is generating FAQ content...`.

## Q16 — Dynamic Rendering
Show the conditional `isFaqLoading ? ... : faqContent.map(...)`. Capture loaded FAQ accordions.

## Q17 — Responsive Design
Chrome DevTools screenshots at 1440px, 768px and 330px. Capture Hero and Services and verify no horizontal scroll.

## Q18 — Smooth Scrolling
Click Contact from the navbar and capture the Contact section. Show `scrollIntoView({ behavior: 'smooth' })` in `Navbar.jsx`.

## Q19 — Final Testing
Capture: chatbot conversation, FAQ output, contact success message, mobile view, and browser Console with no errors.

## Q20 — Code Organization
Show the full Explorer structure:
`src/components`, `src/data`, `src/services`, `App.jsx`, `index.css`, `main.jsx`.
