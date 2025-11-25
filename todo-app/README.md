# To-Do Application

This is a simple to-do application that allows users to create, read, update, and delete to-do items. The application is built using TypeScript and Express for the server-side, and vanilla JavaScript for the client-side.

## Project Structure

```
todo-app
├── src
│   ├── server.ts                # Entry point of the application
│   ├── controllers
│   │   └── todoController.ts    # Logic for managing to-do items
│   ├── routes
│   │   └── todoRoutes.ts        # Defines routes for the application
│   ├── models
│   │   └── todo.ts              # Structure of a to-do item
│   └── client
│       ├── index.html           # Main HTML file for the client-side
│       ├── styles.css           # Styles for the client-side application
│       └── app.ts               # Main TypeScript file for client-side logic
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- You can add a new to-do item by entering a title and clicking the "Add" button.
- To mark a to-do item as completed, click on the checkbox next to the item.
- You can update or delete a to-do item using the respective buttons next to each item.

## Technologies Used

- TypeScript
- Express
- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License.