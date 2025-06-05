# Caffiend ☕

A sleek and intuitive coffee consumption tracking application that helps you monitor your caffeine intake, track costs, and understand your coffee drinking habits.

![Caffiend Banner](public/coffee-mug.svg)

## Live Demo 🚀

Check out the live version of Caffiend at: [https://sw-caffiend.netlify.app/](https://sw-caffiend.netlify.app/)

## Features ✨

- **Coffee Tracking**: Log your coffee consumption with detailed information
- **Real-time Caffeine Monitoring**: Track your current caffeine levels based on half-life calculations
- **Cost Analysis**: Keep track of your coffee expenses
- **Comprehensive Statistics**: View your coffee consumption patterns and trends
- **User Authentication**: Secure user accounts with Firebase authentication
- **Responsive Design**: Beautiful and functional on all devices

## Technologies Used 🛠️

- **Frontend**: React.js with Vite
- **UI Styling**: Custom CSS with Fanta CSS framework
- **Backend & Auth**: Firebase (Authentication & Firestore)
- **State Management**: React Context API
- **Hosting**: Netlify

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sam-Waithaka/caffiend.git
cd caffiend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_APIKEY=your_api_key
VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGINGSENDSERID=your_sender_id
VITE_FIREBASE_APPID=your_app_id
```

4. Start the development server
```bash
npm run dev
```

## Available Scripts 📜

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Project Structure 📁

```
caffiend/
├── src/
│   ├── components/        # React components
│   ├── context/          # Context providers
│   ├── utils/            # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── firebase.js         # Firebase configuration
```

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sam-Waithaka/caffiend/issues).

## Author ✍️

**Sam Waithaka**
- Portfolio: [Developer Sam](https://developersam-portfolio.netlify.app/)
- GitHub: [@Sam-Waithaka](https://github.com/Sam-Waithaka)

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
