# Jarvis Mobile

A React Native / Expo voice assistant mobile app with web support.

## Overview

Jarvis is a privacy-first voice assistant designed for earphones. The app features:
- Voice activation with push-to-talk and wake word support
- Multiple assistant modes (Meeting, Shopping, Navigation, Focus)
- Privacy-focused design with explicit permission consent
- Onboarding flow for first-time users

## Tech Stack

- **Framework**: React Native with Expo SDK 51
- **Web Support**: react-native-web
- **Navigation**: React Navigation (native-stack, bottom-tabs)
- **Audio**: expo-av for audio handling
- **Bundler**: Metro bundler

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── JarvisCoreButton/
│   ├── ModeCard/
│   ├── PanicButton/
│   ├── StateBanner/
│   └── Waveform/
├── context/        # React Context providers
│   ├── AppStateContext.js
│   ├── JarvisContext.js
│   └── PermissionContext.js
├── navigation/     # Navigation configuration
│   ├── MainTabNavigator.js
│   ├── ModeModalNavigator.js
│   ├── OnboardingNavigator.js
│   ├── RootNavigator.js
│   └── SettingsNavigator.js
├── screens/        # Screen components
│   ├── Activity/
│   ├── Home/
│   ├── Modes/
│   ├── Onboarding/
│   ├── Settings/
│   ├── Splash/
│   └── Voice/
├── services/       # Service utilities
│   ├── audioService.js
│   └── permissionService.js
├── state/          # State management
│   └── jarvisStateMachine.js
└── theme/          # Theme configuration
    └── colors.js
```

## Running the App

### Development (Web)
```bash
npm run web
```
The app runs on port 5000 for web development.

### Other Platforms
```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm start        # Expo dev server
```

## Deployment

The app is configured for static deployment using:
```bash
npx expo export --platform web
```
Output directory: `dist/`

## Color Theme

The app uses a dark glassmorphism theme with cyan accent colors:
- Background: `#0F172A`
- Accent: `#06B6D4`
- Text Primary: `#F1F5F9`
- Text Secondary: `#94A3B8`
