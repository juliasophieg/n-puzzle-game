# N-puzzle Game

This is a classic 15-puzzle where the objective is to arrange all the bricks in numerical order, leaving the empty slot in the bottom right corner. You can adjust the number of rows and columns by modifying the code in the App.jsx file, located at the top of the App function:
```bash
const [rows, setRows] = useState(2); //Change number of rows here
const [columns, setColumns] = useState(2); // Change number of columns here
```



## Prerequisites
Ensure you have Node.js and npm installed on your machine.


## Installation

Clone this repository:
```bash
git clone https://github.com/juliasophieg/n-puzzle-game.git
```

Change your current directory to the project directory:
```bash
cd n-puzzle-game
```

Install the necessary dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```
The project should now be running locally. Open your web browser and navigate to http://localhost:5173 to view the application.

## Build
To create an optimized production build of the application, run:
```bash
npm run build
```
