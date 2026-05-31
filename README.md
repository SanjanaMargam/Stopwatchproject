# ⏱️ React Stopwatch

A simple and interactive Stopwatch application built using React. This project demonstrates the use of React Hooks such as `useState`, `useEffect`, and `useRef` to manage time, handle intervals, and control component behavior efficiently.

## Features

- Start the stopwatch
- Stop/Pause the stopwatch
- Reset the stopwatch
- Display elapsed time in Hours : Minutes : Seconds : Milliseconds format
- Responsive and user-friendly interface
- Efficient interval management using React Hooks

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## React Concepts Used

### useState
Used to store and update the elapsed time displayed on the screen.

### useRef
Used to store the interval ID without causing unnecessary re-renders.

### useEffect
Used for cleanup operations to prevent memory leaks when the component unmounts.

## Project Structure

```text
src/
│
├── components/
│   └── Stopwatch.jsx
│
├── App.jsx
├── index.js
└── App.css
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to Project Directory

```bash
cd stopwatch-project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

If you are using Create React App:

```bash
npm start
```

### 5. Open in Browser

Visit:

```text
http://localhost:5173
```

(Vite Default Port)

or

```text
http://localhost:3000
```

(Create React App Default Port)

## How to Use

1. Click **Start** to begin timing.
2. Click **Stop** to pause the stopwatch.
3. Click **Reset** to clear the elapsed time and restart from zero.
4. Observe the timer updating in real time.

## Learning Outcomes

Through this project, I learned:

- React Functional Components
- React Hooks (`useState`, `useEffect`, `useRef`)
- State Management
- Event Handling
- Timer Management using `setInterval()`
- Cleanup Functions in React
- Component Re-rendering Behavior

## Future Enhancements

- Lap Timer Feature
- Dark Mode Support
- Save Recorded Times
- Keyboard Shortcuts
- Sound Notifications

## Author

Sanjana Patel
