# Obrio Questionnaire

Welcome to the Obrio Questionnaire application, built with Next.js. This application provides a dynamic questionnaire experience tailored to user responses.

## Getting Started

These instructions will guide you on setting up and running the application in both development and production environments.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/xvivs/obrio-questionnaire.git
   cd obrio-questionnaire
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Development Environment

To run the application in development mode:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Production Environment

To build and run the application in production:

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start the production server:**

   ```bash
   npm start
   ```

3. Open your browser and navigate to to `http://localhost:3000` (or server's address shown is in your terminal, if 3000 is currently busy).

### Folder Structure

- **`src/`**: Contains the source code for the application.
- **`public/`**: Static files served by the app.
- **`src/app`**: Contains the Next.js pages.
- **`src/components/`**: Reusable React components.
- **`src/lib/`**: Utility functions, hooks, types, interfaces, questionnaire config data.