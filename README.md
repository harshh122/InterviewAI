# 🎤 InterviewAI

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blueviolet)
![OpenAI](https://img.shields.io/badge/AI-Powered-success)
![Google OAuth](https://img.shields.io/badge/Auth-Google%20OAuth-orange)
![JWT](https://img.shields.io/badge/Auth-JWT-yellow)
![Tailwind CSS](https://img.shields.io/badge/Styled%20With-TailwindCSS-38B2AC)
![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit-purple)
![MongoDB Atlas](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-blue)

---

## 🔗 Live Demo

🚀 **[View InterviewAI on Render](https://interviewai-0sxf.onrender.com)**

---

## 🧾 Overview

**InterviewAI** is an AI-powered mock interview platform that helps candidates prepare for technical and professional interviews through realistic interview simulations. Users can upload resumes, select job roles and experience levels, answer AI-generated questions, and receive detailed performance reports with scores and feedback.

The platform leverages modern AI models to generate dynamic interview questions and provide personalized evaluation, helping users improve their interview skills and confidence.

---

## 🧑‍💻 Tech Stack

### 🖥️ Frontend

* React.js
* Tailwind CSS
* Redux Toolkit
* Axios
* React Router DOM
* React Icons
* Motion

### 🛠️ Backend

* Node.js
* Express.js
* MongoDB Atlas + Mongoose
* JWT Authentication
* Google OAuth
* OpenAI API
* Razorpay Integration
* Cookie Parser
* Cors

---

## ✨ Features

* 🔐 Secure authentication using Google OAuth & JWT
* 📄 Resume upload and parsing
* 🎯 Role and experience-based interview generation
* 🤖 AI-generated interview questions
* 🎙️ Voice and text interview support
* 📊 Detailed AI evaluation and scoring
* 📈 Interview performance reports
* 🗂️ Complete interview history tracking
* 💳 Premium subscription support via Razorpay
* ☁️ Cloud-hosted MongoDB database
* 📱 Responsive design for desktop and mobile

---

## 📁 Project Structure

```text
InterviewAI/
├── backend/
│   ├── config/
│   │   └── connectDb.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   └── isAuth.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── interview.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   │
│   └── server.js
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🖼️ Screenshots

### 🏠 Landing Page

*Add your screenshot here*

### 🎯 Interview Setup

*Add your screenshot here*

### 🎙️ AI Interview Session

*Add your screenshot here*

### 📊 Performance Report

*Add your screenshot here*

### 📜 Interview History

*Add your screenshot here*

---

## 🚀 Future Enhancements

* 🎥 Video interview support
* 🗣️ Real-time speech analysis
* 📄 Advanced resume insights
* 📚 Company-specific interview preparation
* 🧠 Personalized learning recommendations
* 🌍 Multi-language interview support
* 📊 Analytics dashboard for progress tracking
* 🏆 Interview readiness score

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/harshh122/InterviewAI.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

OPENAI_API_KEY=your_openai_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### ⭐ If you found this project helpful, don't forget to star the repository!
