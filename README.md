# WhereToGo - Random Adventure Guide

🚀 **Discover random places nearby with challenges!**

A React Native mobile app that suggests random places based on your location, complete with navigation routes and fun challenges.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev) (bootstrapped with `@react-native-community/cli`)
- **Maps**: [react-native-maps](https://github.com/react-native-maps/react-native-maps) + Google Maps API
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Geolocation**: [@react-native-community/geolocation](https://github.com/michalchudziak/react-native-geolocation)
- **Styling**: Material Design 3

---

## 🚀 Getting Started

### Prerequisites

1. Follow React Native's [Environment Setup Guide](https://reactnative.dev/docs/environment-setup)
2. Get a [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

### Installation

```bash
# Clone the repo
git clone https://github.com/IlliaPauliushchyk/WhereToGo.git
cd WhereToGo

# Install dependencies
npm install
# or
yarn install
```

### Running the App

1. **Start Metro Bundler**

   ```bash
   npm start
   # or
   yarn start
   ```

2. **Run on Android/iOS**

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios
   ```

3. **Environment Variables**  
   Create `.env` file:
   ```
   GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

---

## ✨ Key Features

✅ **Random place generator** (cafes, parks, museums, etc.)  
✅ **Built-in navigation** with Google Maps  
✅ **Fun challenges** at each location  
✅ **Dark/Light mode** support

<!-- ✅ **Partner integrations** for tickets/bookings -->

---

## 🔧 Troubleshooting

- **Android build errors**: Run `./gradlew clean` in `android` folder
- **Maps not loading**: Verify API key in `AndroidManifest.xml` and `AppDelegate.m`
- **Location issues**: Check device permissions

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ using React Native
