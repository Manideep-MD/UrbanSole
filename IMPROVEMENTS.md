# What I'd add with more time

- **Sign up / sign in** — Firebase Authentication for real user accounts, instead of the role-select stand-in.

- **Backend integration** — a real API layer backed by MongoDB, with seeded dummy product data, replacing the local Redux/AsyncStorage catalog.

- **Better UI/UX** — more polished, eye-catching designs for the Home screen, product card, product details, cart, and the login/sign-up screens.

- **Payment integration** — a real checkout/payment flow instead of Place Order directly creating the order.

- **Form validation feedback** — the admin form currently just disables Save until brand/cost/sizes are valid; inline error messages (e.g. "cost must be greater than 0") would be clearer than a silently-disabled button.

- **Order detail view** — the orders table currently inlines all items into one cell as a comma-separated summary; an expandable row (or a tap-through detail screen) would read better for multi-item orders.

- **Loading states** — a proper loading indicator while redux-persist rehydrates on cold start, instead of rendering nothing.

- **Wishlist** — the heart and bell icons on the Home header are currently visual only; wiring them up would need a wishlist slice and a notifications feed.

- **Search/filter/sort** on the catalog screens once the list of shoes grows.

- **Product variants** — multiple images per shoe and colour options, matching the size/quantity pattern already in place.
