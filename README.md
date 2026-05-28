# 🥗 NutriAI - Full Stack AI Nutrition Tracking Application

A modern, production-ready AI-powered nutrition tracking web application with premium UI/UX similar to MyFitnessPal, HealthifyMe, and Cronometer.

## ✨ Features

### Core Functionality
- 📸 **Food Image Recognition** - Upload images and detect foods using Google Gemini Vision API
- 🤖 **AI-Powered Analysis** - Automatic nutritional data detection and portion estimation
- 📊 **Dashboard Analytics** - Real-time nutrition tracking with beautiful charts
- ⚖️ **Fitness Calculations** - BMI, BMR, TDEE calculations with personalized targets
- 💾 **Meal History** - Complete meal tracking by date and time
- 🎯 **Goal Tracking** - Weight, macro, and calorie goal management
- 🤍 **AI Coach** - Nutrition chatbot with streaming responses
- 📈 **Advanced Analytics** - Weekly/monthly insights and trends

### Premium Features
- 🔥 Streak System
- 🏆 Achievement Badges
- 📋 PDF Nutrition Export
- 📱 Meal Reminders
- 🎯 AI-Generated Meal Plans
- 📷 Barcode Scanner
- 🗣️ Voice Meal Logging
- 🍎 Apple Health Integration

## 🏗️ Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
**Backend:** Next.js API Routes, PostgreSQL, Prisma, Redis
**AI:** Google Gemini Vision API, USDA FoodData Central API
**Deployment:** Vercel, Railway, Neon PostgreSQL

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- Redis
- API Keys: Google Gemini, Cloudinary, Clerk

### Installation

```bash
git clone https://github.com/Abhinav632773/nutrition_app.git
cd nutrition_app
npm install
cp .env.example .env.local
npx prisma migrate dev
npm run dev
```

Visit `http://localhost:3000`
