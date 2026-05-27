# KoinX Tax Loss Harvesting Dashboard

A responsive and functional Tax Loss Harvesting Dashboard built using React, TypeScript, Vite, and Tailwind CSS as part of the KoinX Frontend Assignment.

The application helps users analyze their crypto portfolio, track capital gains/losses, and identify potential tax-loss harvesting opportunities.

---

# 🚀 Live Demo

🔗 Live Application:  
https://tax-loss-harvesting-starter.vercel.app/

---

# 📌 Features

- 📊 Crypto Portfolio Dashboard
- 💰 Capital Gains & Loss Tracking
- 📉 Tax Loss Harvesting Suggestions
- ⚡ Responsive UI Design
- 🔄 Mock API Integration
- ♻️ Reusable React Components
- 🎨 Clean and Modern Interface
- 📱 Mobile Responsive Layout

---

# 🛠️ Tech Stack

## Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS

## Additional Libraries
- Axios
- React Hooks

---

# 📂 Folder Structure

```txt
tax-loss-harvesting-starter/
│
├── node_modules/
│
├── src/
│   │
│   ├── api/
│   │   └── mockApi.ts
│   │
│   ├── components/
│   │   ├── CapitalGainsCard.tsx
│   │   ├── HoldingsTable.tsx
│   │   └── SavingsBanner.tsx
│   │
│   ├── utils/
│   │   ├── format.ts
│   │   └── harvesting.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
│
├── public/
│   └── screenshots/
│       ├── dashboard.png
│       ├── holdings.png
│       └── savings-banner.png
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Yashodha-S452003/tax-loss-harvesting-starter.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd tax-loss-harvesting-starter
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

The application will start at:

```bash
http://localhost:5173
```

---

# 📊 Application Functionality

## ✅ Holdings Table

Displays:
- Asset Name
- Quantity
- Buy Price
- Current Price
- Gain/Loss Percentage
- Current Portfolio Value

---

## ✅ Capital Gains Summary

Shows:
- Total Investment
- Current Portfolio Value
- Net Profit/Loss
- Unrealized Gains/Losses

---

## ✅ Tax Loss Harvesting

The application identifies assets currently in loss and suggests possible tax-loss harvesting opportunities.

Example Logic:

```ts
if (currentValue < investedValue) {
   harvestable = true;
}
`

# 📡 API Integration

Mock API data is used to simulate:
- Crypto holdings
- Market prices
- Portfolio performance

---


# 🧠 Assumptions

- Mock portfolio data is used instead of live APIs.
- Tax harvesting suggestions are based on unrealized losses only.
- Authentication and backend services were outside assignment scope.
- Prices are static/mock values for demonstration purposes.

---

# 🚀 Deployment

The application is deployed using Vercel.

Live URL:  
https://tax-loss-harvesting-starter.vercel.app/

---

# 🤖 AI Assistance

AI tools such as Cursor AI and Trae AI were used for:
- UI generation
- Code suggestions
- Debugging assistance
- Development acceleration

All business logic and implementation were manually reviewed and customized.

---

# 👨‍💻 Author

Yashodha S

---

# 📄 License

This project is developed for educational and assignment purposes only.
