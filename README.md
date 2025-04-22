# Personal LLM

A web application built using **FastAPI** and **React** to generate personalized text responses based on the user's input style. This application leverages the **Gemini AI model** to generate outputs that match the tone and style of the user's previous messages.

## Features

- **Real-time text generation**: Generate text in the style of the user’s input message.
- **Interactive frontend**: Built with React, providing live updates as users interact with the interface.
- **Backend integration**: FastAPI backend with easy-to-use endpoints for generating responses based on user input.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: FastAPI, Python
- **AI Model**: Gemini AI (via API)
- **State Management**: React useState hook
- **Deployment**: Docker (optional for containerization)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/personal-llm.git
```
### 2. Install backend dependencies

Navigate to the backend directory and install the required Python dependencies:
```bash
cd backend
pip install -r requirements.txt
```
Make sure to add your Gemini API Key to the .env file.
### 3. Run the backend

You can start the backend server with:
```bash
uvicorn main:app --reload
```
By default, the backend will run on http://localhost:8000.
### 4. Install frontend dependencies

Navigate to the personal-llm directory and install the required Node.js dependencies:
```bash
cd personal-llm
npm install
```
### 5. Run the frontend

Start the frontend development server with:
```bash
npm run dev
```
The frontend will be accessible at http://localhost:5173.
## How It Works

    User Input: The user provides a sample message style and a prompt for the text generation.

    Backend: The backend takes the user input and sends it to the Gemini AI model through the API to generate a response.

    Frontend Display: The generated text is displayed in real-time on the frontend, styled in the same tone as the input message.

## Example

    Style: "Hey, this is just a quick test message."

    Prompt: "Please generate a formal response."

The app will generate a response based on the informal style provided, transforming it into something more formal.
## Future Improvements

    Add user authentication to save preferences or generate history.

    Improve error handling and response formatting.

    Integrate more models for different text generation styles.
