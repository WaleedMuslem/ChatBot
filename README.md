### GPT-3.5-Turbo Website
This is a simple website that showcases the capabilities of the GPT-3.5-Turbo model API. The website is built with a backend using Express.js and a frontend using React.

## Getting Started
To get started with this project, you will need to have access to the GPT-3.5-Turbo model API. You can sign up for access on the OpenAI website. Once you have access, you will need to create a .env file in the root directory of the project and add your API key:


API_KEY=your_api_key_here


Next, you will need to install the dependencies for both the backend and frontend:

bash
Copy code
cd backend
npm install

cd ../frontend
npm install
Once the dependencies are installed, you can start the development server:

bash
Copy code
cd backend
npm run dev

cd ../frontend
npm start
This will start the backend server on http://localhost:5000 and the frontend server on http://localhost:3000. You should be able to access the website by visiting http://localhost:3000 in your web browser.

How It Works
The website allows users to input a prompt and generate text using the GPT-3.5-Turbo model API. When the user submits a prompt, the frontend sends a request to the backend, which then makes a request to the API using the provided prompt. The API generates text based on the prompt and returns it to the backend, which then sends the text back to the frontend to display to the user.

Contributing
If you would like to contribute to this project, please create a pull request with your changes. Before submitting your pull request, please make sure that your code follows the existing style and conventions of the project.
