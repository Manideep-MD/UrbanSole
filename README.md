# UrbanSole — Shoe Cart

A React Native (bare CLI, TypeScript) shoe cart app. Admins can add/edit a shoe catalog; shoppers can browse shoes, view details, manage a cart, and place orders. Everything is stored locally on-device (no backend/API) via Redux Toolkit + redux-persist + AsyncStorage.

See also: [APPROACH.md](APPROACH.md) for design decisions, and [IMPROVEMENTS.md](IMPROVEMENTS.md) for what's next.

## Prerequisites

Follow the React Native [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide first (Xcode + CocoaPods for iOS, Android Studio + SDK for Android). This project uses React Native 0.86.

## Install

```sh
npm install
```

### iOS

```sh
bundle install            # first time only, installs CocoaPods itself
bundle exec pod install   # links native modules (image picker, fast-image, lottie, vector icons, etc.)
npm run ios
```

### Android

```sh
npm run android
```

## Run Metro (if not started automatically)

```sh
npm start
```

## Project structure

```
src/
  screens/               Each screen has its own folder: Screen.tsx + style.ts
    RoleSelect/          Admin vs Shopper landing screen
    AdminShoeList/       Catalog grid + FAB to add a shoe
    AdminShoeForm/       Add/edit form (brand, cost, sizes, photo via gallery or URL)
    Shop/                Home tab — browse the catalog (grid)
    ShoeDetails/         Product details: size + quantity, Add to Cart
    Cart/                Review items (quantity stepper, remove), Place Order
    OrderSuccess/        Lottie tick animation + Continue Shopping
    Orders/              Table of past orders
  components/            Shared pieces: ShoeCard, SizeSelector, QuantityStepper,
                         FastImageView, CustomFlatList
  navigation/
    MainStack/           Root stack: RoleSelect -> Admin screens / Details / OrderSuccess / Tabs
    BottomTabNavigation/ Bottom tabs for the shopper (Home, Cart, Orders) + helper.tsx for tab icons
  redux/
    reducers/            ShoesReducers, CartReducers, OrdersReducers
    store/                store.ts (redux-persist + AsyncStorage wiring)
  constants/             Per-screen static text + screen route names (screenNames.ts)
  utils/
    Constants.ts         Colors, size range, currency symbol
    NavigationUtils.ts   navigate/goBack/etc. without needing the navigation prop
  assets/lottie/         Order-success checkmark animation (JSON)
```

Imports use aliases (`@screens/...`, `@components/...`, `@redux/...`, `@navigation/...`, `@utils/...`, `@constants/...`) configured via `babel-plugin-module-resolver` (see `babel.config.js`) and mirrored in `tsconfig.json`.

## How the app is organized

There's no login. On launch you choose **Admin** or **Shopper** on the first screen; a "Switch Role" button in the header lets you go back and pick the other one at any time. Both roles read/write the same persisted Redux store, so a shoe added as Admin shows up immediately for the Shopper.

- **Admin**: catalog grid with a FAB to add a shoe, tap any shoe to edit it. Brand, cost, and available sizes are required; a photo (gallery pick or pasted image URL) is optional. A "Delete Shoe" button on the edit screen removes it (with a confirmation prompt) and clears it out of any cart it's currently in.
- **Shopper**:
  - `Home` tab — browse the catalog grid, tap a shoe to open its details.
  - **Details** screen — pick a size and quantity (persisted from the cart if you've already added that shoe), Add to Cart returns you to Home. A cart badge on this screen's bag icon shows the current cart count.
  - `Cart` tab — increase/decrease quantity or remove each line, see the total, **Place Order** clears the cart and shows an animated success screen with a "Continue Shopping" button back to Home. The tab bar shows a live cart-count badge.
  - `Orders` tab — table of every past order (date, items, total).

Prices are shown in ₹ throughout the app.
