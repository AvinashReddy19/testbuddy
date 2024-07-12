## Technology Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Code Editor**: Integrated code editor (CodeMirror Editor)

## Installation and Setup

To run this project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AvinashReddy19/testbuddy.git
    cd testbuddy
    ```

2. **Install dependencies**:
    ```bash
    cd backend
    npm install
    ```
    ```bash
    cd frontend
    npm install
    ```

3. **Set up environment variables**: Create a `.env` file in the root directory and add the necessary environment variables.
   **Backend**
    ```bash
    mongo_url = ""
    JWT_SECRET = ""
    ```

    **Frontend**
   ```bash
   VITE_API_BASE_URL=
   ```
5. **Run the development server**:
    ```bash
    cd backend
    npm run dev
    ```
    ```bash
    cd frontend
    npm run dev
    ```
## Project Structure

```
.
├── backend                 # Backend-related files and folders
│   ├── models              # Mongoose schemas and models
│   ├── routes              # Express routes
│   ├── controllers         # Route controllers
│   ├── utils               # Utility functions
│   └── index.js              # Main application file
├── frontend                # Frontend-related files and folders
│   ├── src
│   │   ├── components      # React components
│   │   ├── pages           # React pages
│   │   ├── services        # Services for API calls
│   │   ├── utils           # Utility functions
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
├── .env                    # Example environment variables file
└── README.md               # This file
```

## Contributing

We welcome contributions from the community! If you have ideas or suggestions, please open an issue or submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to reach out to us at [avinash.challa2003@gmail.com].
