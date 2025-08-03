# Happy Birthday Judy

A special birthday celebration website created for Judy, featuring interactive games, birthday countdowns, and more.

## Features

- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- ⚡ Vite for fast development
- 🧪 Vitest for testing
- 📱 Responsive design
- 🎯 Interactive components for testing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing

### Run Tests

```bash
npm test
```

### Run Tests with UI

```bash
npm run test:ui
```

## Deployment

### Deploying to GitHub

1. Create a new repository on GitHub
2. Initialize Git in your local project (if not already done)
   ```bash
   git init
   ```
3. Add all files to Git
   ```bash
   git add .
   ```
4. Commit the files
   ```bash
   git commit -m "Initial commit"
   ```
5. Add your GitHub repository as a remote
   ```bash
   git remote add origin https://github.com/yourusername/happy-birthday-judy.git
   ```
6. Push to GitHub
   ```bash
   git push -u origin main
   ```

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/) if you don't have one
2. Click "New site from Git"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the "happy-birthday-judy" repository
6. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Wait for the build to complete
9. Your site will be available at a Netlify subdomain (e.g., https://happy-birthday-judy.netlify.app)
10. You can set up a custom domain in the Netlify settings if desired
```

## What's Tested

### React Functionality
- ✅ Component rendering
- ✅ State management with useState
- ✅ Event handling
- ✅ Conditional rendering
- ✅ List management (add/remove items)
- ✅ Component interactions

### Tailwind CSS
- ✅ Utility classes
- ✅ Responsive design
- ✅ Color system
- ✅ Spacing and layout
- ✅ Hover effects and transitions
- ✅ Flexbox and Grid

### Visual Tests
The application includes several visual elements to test Tailwind CSS:

1. **Color Test**: Red, green, and blue indicators
2. **Layout Test**: Responsive grid layout
3. **Interactive Elements**: Buttons with hover effects
4. **Typography**: Different text sizes and weights
5. **Spacing**: Proper margins and padding
6. **Shadows**: Card shadows and depth

## Project Structure

```
├── src/
│   ├── components/
│   │   └── TestComponent.jsx
│   ├── test/
│   │   ├── setup.js
│   │   ├── App.test.jsx
│   │   └── TestComponent.test.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI

## Dependencies

### Production
- React 18
- React DOM

### Development
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
- Vitest
- React Testing Library
- Jest DOM

## Browser Support

This project works in all modern browsers that support ES6 modules and CSS Grid.