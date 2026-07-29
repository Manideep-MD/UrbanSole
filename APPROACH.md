# Approach

## Stack

- **React Native 0.86 (bare CLI), TypeScript, functional components + hooks only.**
- **Redux Toolkit + redux-persist + AsyncStorage** for local state/persistence — no backend, as specified in the brief.
- **React Navigation** (native-stack + bottom-tabs) for the auth → admin/shopper flow.
- Plain `View`/`Text`/`TouchableOpacity`/`Modal`/`FlatList` + `StyleSheet` for UI — no third-party component kit.
- **react-native-image-picker** for picking a photo from the device gallery, plus a plain URL field as an alternative way to set a shoe's image.
- **@d11/react-native-fast-image** for image rendering (chosen over the original `react-native-fast-image`, which doesn't support React Native's New Architecture — this project has `newArchEnabled=true`).
- **react-native-vector-icons** (Ionicons/MaterialIcons) for icons.
- **lottie-react-native** for the order-success checkmark animation.

## App flow

Sign Up captures name/email/password plus an **Admin**/**Shopper** role, and immediately logs you in; Sign In checks credentials against the accounts created so far. `MainStack` picks which navigator to render based on whether there's a logged-in user and what their role is — an auth stack (Sign In/Sign Up) when signed out, or the Admin stack / Shopper tabs when signed in. Accounts, the current session, and every other slice of state are stored locally via redux-persist/AsyncStorage — there's no backend, so this is app-local auth, not a real identity system (passwords are stored as plain text). A "Logout" button in the header signs out and drops you back to Sign In. Both roles read and write the same persisted Redux store, so a shoe added as Admin is immediately visible to any Shopper. Cart items and orders are scoped by `userId`, so switching between accounts on the same device never leaks one shopper's cart or order history into another's.

- **Admin**: catalog grid with a FAB to add a shoe, tap any shoe to edit it. Brand, cost, and available sizes are required (marked with a red asterisk); a photo (gallery pick or pasted URL) is optional. Cost is a plain whole number — the input strips anything that isn't a digit, no decimal handling.
- **Shopper**: `Home` tab shows the catalog grid; tapping a shoe opens its **Details** screen (image, price, size and quantity selection, Add to Cart). `Cart` tab lists items with a quantity stepper and Remove, shows the running total, and **Place Order**. Placing an order clears the cart and shows a success screen (Lottie tick animation + "Continue Shopping" back to Home). `Orders` tab shows every past order for the signed-in account via a reusable `OrderCard` component (date, items, total). The Cart tab and the Details screen's cart icon both show a live item-count badge.

## Theming

Colors live in a single `COLORS` object in `utils/Constants.ts`, but the rest of the app never imports that object directly — a `ThemeContext`/`ThemeProvider` (wrapping the app in `App.tsx`) supplies it via context, and every screen/component reads colors through a `useThemeColors()` hook. This keeps color usage centralized behind one hook, similar to how the reference project (Accurub) structures its theming.

## Safe area handling

`App.tsx` wraps the navigation tree in a single `SafeAreaView` (from `react-native-safe-area-context`) so screens don't each manage their own safe-area logic. It only consumes the `left`/`right`/`bottom` edges — React Navigation's native-stack headers and the bottom tab bar already account for the top inset internally, so having the root view also consume `top` would double that space. The handful of screens that render their own header instead of a native one (Sign In, Sign Up, Shop, Order Success) apply a local `SafeAreaView` with `edges={['top']}` (and `bottom` where there's no tab bar) so they still clear the status bar correctly.

## Data model

- User: `{ id, name, email, password, role }` — `role` is `admin` or `shopper`.
- Shoe: `{ id, brand, sizes[], cost, imageUri? }` — `cost` is a whole number, no decimals.
- Cart item: `{ id, userId, shoeId, size, quantity }` — one line per user+shoe+size combination.
- Order: `{ id, userId, date, items[], total }` — created when the shopper places an order; the cart is cleared and no payment step is shown, per the brief.


## Currency & pricing

Prices are shown in ₹ (rupees) throughout the catalog, details, cart, and orders screens, via a single `CURRENCY_SYMBOL` constant. Costs are whole numbers end to end — entered as whole numbers on the Admin form and displayed without decimal places anywhere in the app.
