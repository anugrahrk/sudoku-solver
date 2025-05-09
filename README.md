# Sudoku Solver

![Sudoku Solver Demo](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2loa2doNHdwc211a2IwMmV0OHdoMWE4OGZpN3dhdW1mNDk1ZmhvNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EMvGcVPZJgcWAunImY/giphy.gif)

A web-based Sudoku Solver built with Python.

## Features
- Interactive 9x9 grid for puzzle input
- Instant solving with a backtracking algorithm
- Input validation and solvability checks

## Tech Stack
- **Backend**: Flask (Python)
- **Frontend**: JavaScript, HTML, CSS
- **Algorithm**: Backtracking

## Installation

### Prerequisites
- Python 3.x
- Git

### Steps
1. Clone the repo:
   ```bash
   git clone https://github.com/anugrahrk/sudoku-solver.git
   cd sudoku-solver
2. Set up a virtual environment:
   ```bash
    python -m venv venv
    source venv/bin/activate
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
4. Run the app:
   ```bash
    python app.py
5. Open http://localhost:5000 in your browser.

##Usage
- Enter numbers into the grid.
- Click "Solve" to get the solution.
