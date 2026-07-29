# What I'd add with more time

- **Real authentication** — Sign up/Sign in exist, but accounts and passwords live in local Redux/AsyncStorage state (plain text, no hashing, no server). Firebase Authentication (or any real backend auth) would replace this with something actually secure.

- **Backend integration** — a real API layer backed by MongoDB, with seeded dummy product data, replacing the local Redux/AsyncStorage catalog.

- **Better UI/UX** — more polished, eye-catching designs for the Home screen, product card, product details, cart, and the login/sign-up screens.

- **Payment integration** — a real checkout/payment flow instead of Place Order directly creating the order.

- **Form validation feedback** — required fields are now marked with a red asterisk and Save stays disabled until they're filled in, but there's still no inline error message (e.g. "cost must be greater than 0") explaining why the button is disabled.

- **Loading states** — a proper loading indicator while redux-persist rehydrates on cold start, instead of rendering nothing.

- **Wishlist** — the heart and bell icons on the Home header are currently visual only; wiring them up would need a wishlist slice and a notifications feed.

- **Search/filter/sort** on the catalog screens once the list of shoes grows.

- **Product variants** — multiple images per shoe and colour options, matching the size/quantity pattern already in place.

- **Theme switching** — `ThemeContext` currently always supplies the same fixed palette from `Constants.ts`; since colors already flow through context everywhere, adding a light/dark toggle would just mean swapping the value the provider supplies.
