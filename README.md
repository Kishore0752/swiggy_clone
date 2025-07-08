# Swiggy - Food Delivery Platform

A modern, responsive food delivery application built with React, featuring real-time ordering, location-based services, and seamless user experience.

## Features

- **Restaurant Discovery**: Browse restaurants by category, cuisine, and location
- **Smart Search**: Advanced filtering and sorting options
- **Real-time Cart**: Add items, manage quantities, and checkout seamlessly
- **User Authentication**: Secure login/signup with profile management
- **Favorites System**: Save and manage favorite restaurants
- **Location Services**: GPS-based delivery address detection
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Enhanced UX with Framer Motion
- **Settings & Help**: Comprehensive user support and customization

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS, Headless UI
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd swiggy-food-delivery
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation and search
│   ├── Home.js         # Restaurant listings
│   ├── RestaurantDetail.js # Menu and ordering
│   ├── Cart.js         # Shopping cart
│   ├── Auth.js         # Authentication
│   ├── Settings.js     # User settings
│   ├── Contact.js      # Contact form
│   └── Help.js         # Help and support
├── context/            # React Context
│   └── AppContext.js   # Global state management
├── services/           # Data and utilities
│   └── dataService.js  # Mock data and helpers
└── index.css           # Global styles
```

## Features in Detail

### Restaurant Discovery
- Browse restaurants by categories (Pizza, Burgers, Biryani, etc.)
- Filter by rating, delivery time, and price range
- Sort by popularity, rating, delivery time, or price
- Search functionality with real-time results

### Ordering System
- Add items to cart with quantity management
- Real-time price calculation
- Multiple payment options
- Order tracking and history

### User Experience
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions
- Intuitive navigation and user interface
- Accessibility features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
