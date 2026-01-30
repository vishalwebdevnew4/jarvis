# Jarvis Mobile

This repo contains a minimal Expo-based mobile app scaffold for Android and iOS.

## Getting started

```bash
npm install
npm run start
```

## Run on devices

```bash
npm run android
npm run ios
```

## Shipping to Google Play and the App Store

1. Update the bundle/package identifiers in `app.json` (`ios.bundleIdentifier` and `android.package`).
2. Add real app icons and splash assets in `assets/`.
3. Configure EAS Build:

```bash
npm install -g eas-cli
eas build:configure
eas build --platform android
eas build --platform ios
```

4. Submit builds:

```bash
eas submit --platform android
eas submit --platform ios
```

For more details see the Expo docs: https://docs.expo.dev/
