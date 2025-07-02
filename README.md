# Advanced Counter App

This React + TypeScript application implements an advanced counter with multiple state management and side effect features. It was developed as part of a lab focused on mastering `useState` and `useEffect` hooks in React.

## Features

### Core Functionality
- Displays the current count (initialized at 0)
- Increment and decrement buttons to update the count
- Custom step input to control increment/decrement values

### Advanced Features
- **History Tracking**: Tracks and displays all previous count values
- **Auto-Save**: Saves the current count to localStorage on change using a debounced `useEffect`
- **Keyboard Shortcuts**: 
  - Press "ArrowUp" to increment
  - Press "ArrowDown" to decrement
- **Reset Mechanism**: Resets count to 0 and clears the history log

## Technical Highlights
- Built with React and TypeScript using Vite
- State managed via `useState` for count, step, and history
- Side effects handled using `useEffect` with proper dependency arrays and cleanup functions
- Event listeners and timers include cleanup to prevent memory leaks or errors

## How to Run

1. Clone the repository or download the source code
2. Run the following commands in your terminal:

```bash
npm install
npm run dev
Open your browser to the provided localhost URL (e.g., http://localhost:5173)

File Structure
less
Copy
Edit
src/
├── AdvancedCounter.tsx  // Main counter component
├── App.tsx              // Entry point that renders the counter
├── main.tsx             // Vite main file
