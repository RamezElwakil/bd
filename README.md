# React + Tailwind CSS Project

This project demonstrates a working setup of React with Tailwind CSS, including comprehensive tests to ensure everything is functioning correctly.

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