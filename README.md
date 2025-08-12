## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Running the Application

After setting up the environment file:

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd paint
   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🌐 Live Demo

Check out the live application at: [https://paint-dem.netlify.app/](https://paint-dem.netlify.app/)

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production (without source maps)
- `npm test` - Launches the test runner in interactive watch mode
- `npm eject` - **Note: This is a one-way operation. Don't eject unless you know what you're doing!**

## 🏗️ Tech Stack

### Core Framework

- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **React Icons** - Popular icon library

## 📁 Project Structure

```
paint/
├── public/
│   ├── favicon.ico             # Favicon for the app
│   ├── images/                 # Static images
│   ├── icons/                  # Static icons
│   ├── index.html              # Main HTML file
│   └── ...                     # Other public assets
├── src/
│   ├── index.css               # Global styles
│   ├── App.js                  # Root component
│   ├── components/             # Reusable UI components
│   │   ├── Header/             # Header component
│   │   ├── PromotionalBanner/  # Promotional banner component
│   │   └── ...                 # Other components
│   └── ...                     # Other source files
├── .gitignore                  # Git ignore file
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project overview
```

### Styling

- Use Tailwind CSS utility classes
- Create custom components for repeated patterns
- Follow mobile-first responsive design
