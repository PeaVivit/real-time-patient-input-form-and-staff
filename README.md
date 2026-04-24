# 🏥 Real-Time Patient Input & Staff Dashboard

A real-time web application that allows patients to fill in a form while staff can monitor the input live as it happens.

This project demonstrates real-time communication using WebSocket and modern frontend architecture with Next.js.

---

## 🚀 Live Demo

* 🌐 Frontend (Patient & Staff UI): https://real-time-patient-input-form-and-st.vercel.app/ *Deploy on Vercel*
* 🔌 WebSocket Server: https://real-time-patient-input-form-and-staff-production.up.railway.app

---

## ✨ Features

* 🧾 Patient Form with validation (React Hook Form)
* ⚡ Real-time data streaming via WebSocket (Socket.io)
* 👨‍⚕️ Staff Dashboard with live updates
* 🔄 Typing & Submitted status indicator
* ⏱️ Debounced input (reduce unnecessary network calls)
* 🎨 Clean UI with Tailwind CSS
* ✨ Micro-interactions & animations

---

## 🧠 Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* React Hook Form

### Backend

* Node.js
* Socket.io (WebSocket)

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## 🏗️ Architecture

```
Patient (Client)
   ↓ (emit: typing / submit)
WebSocket Server (Node.js)
   ↓ (broadcast)
Staff Dashboard (Client)
```

---

## 📁 Project Structure

```
/app
  page.jsx            → Patient Form
  /staff/page.jsx     → Staff Dashboard

/components
  PatientForm.jsx
  InputField.jsx
  /ui
    Card.jsx
    StatusBadge.jsx
    AnimatedField.jsx

/lib
  socket.js           → Socket client config

/hooks
  useDebounce.js

/server.js            → WebSocket server
```

---

## ⚙️ Setup & Run Locally

### 1. Install dependencies

```
npm install
```

### 2. Run WebSocket server

```
node server.js
```

### 3. Run frontend

```
npm run dev
```

---

## 🌐 Access

* Patient Form: http://localhost:3000
* Staff Dashboard: http://localhost:3000/staff

---

## 🔌 Environment Setup

Update WebSocket URL in:

```
/lib/socket.js
```

```js
const URL =
  process.env.NODE_ENV === "production"
    ? "https://real-time-patient-input-form-and-staff-production.up.railway.app"
    : "http://localhost:4000";
```

---

## 💡 Key Design Decisions

### 1. WebSocket over REST

WebSocket was chosen to enable real-time communication instead of polling, reducing latency and unnecessary network requests.

### 2. Debouncing Input

Implemented debouncing to optimize performance and avoid excessive event emission during typing.

### 3. Component-Based Architecture

UI components are modular and reusable, making the system scalable and maintainable.

### 4. Separation of Concerns

Frontend and backend are deployed separately for better scalability and flexibility.

---

## 🔥 Challenges & Solutions

| Challenge                      | Solution                                      |
| ------------------------------ | --------------------------------------------- |
| Real-time updates              | Used Socket.io for event-based communication  |
| Too many requests while typing | Implemented debounce                          |
| Deployment with WebSocket      | Split frontend (Vercel) and backend (Railway) |
| 502 errors on deploy           | Fixed port binding & added HTTP response      |

---

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* 🗄️ Database integration (store patient data)
* 👥 Multi-user session handling
* 📊 Activity logs & timestamps
* 📱 Mobile responsiveness improvement

---

## 🧑‍💻 Author

Developed by **Vivit Leelahalamlert**

---

## 📌 Summary

This project showcases:

* Real-time system design
* Frontend + Backend integration
* Production deployment architecture
* UX-focused UI implementation

It reflects practical skills required for real-world applications, especially in systems requiring live data synchronization.
