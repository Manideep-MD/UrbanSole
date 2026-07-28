# Approach

## Stack

- **React Native 0.86 (bare CLI), TypeScript, functional components + hooks only.**
- **Redux Toolkit + redux-persist + AsyncStorage** for local state/persistence — no backend, as specified in the brief.
- **React Navigation** (native-stack + bottom-tabs) for the role-select → admin/shopper flow.
- Plain `View`/`Text`/`TouchableOpacity`/`Modal`/`FlatList` + `StyleSheet` for UI — no third-party component kit.
- **react-native-image-picker** for picking a photo from the device gallery, plus a plain URL field as an alternative way to set a shoe's image.
- **@d11/react-native-fast-image** for image rendering (chosen over the original `react-native-fast-image`, which doesn't support React Native's New Architecture — this project has `newArchEnabled=true`).
- **react-native-vector-icons** (Ionicons/MaterialIcons) for icons.
- **lottie-react-native** for the order-success checkmark animation.

## App flow

There's no login. The first screen (`RoleSelect`) lets you choose **Admin** or **Shopper**; a "Switch Role" button in the header returns to that screen at any time. Both roles read and write the same persisted Redux store, so a shoe added as Admin is immediately visible to the Shopper.

- **Admin**: catalog grid with a FAB to add a shoe, tap any shoe to edit it. Brand, cost, and available sizes are required; a photo (gallery pick or pasted URL) is optional.
- **Shopper**: `Home` tab shows the catalog grid; tapping a shoe opens its **Details** screen (image, price, size and quantity selection, Add to Cart). `Cart` tab lists items with a quantity stepper and Remove, shows the running total, and **Place Order**. Placing an order clears the cart and shows a success screen (Lottie tick animation + "Continue Shopping" back to Home). `Orders` tab shows every past order in a table (date, items, total). The Cart tab and the Details screen's cart icon both show a live item-count badge.

## Data model

- Shoe: `{ id, brand, sizes[], cost, imageUri? }`.
- Cart item: `{ id, shoeId, size, quantity }` — one line per shoe+size combination.
- Order: `{ id, date, items[], total }` — created when the shopper places an order; the cart is cleared and no payment step is shown, per the brief.


## Currency & pricing

Prices are shown in ₹ (rupees) throughout the catalog, details, cart, and orders screens, via a single `CURRENCY_SYMBOL` constant.
