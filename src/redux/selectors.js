export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsAuth = state => state.auth.isAuth

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectisDrawerOpen = state => state.drawer.isOpen;

export const selectDrawerVariant = state => state.drawer.variant;

export const selectIdToEdit = state => state.drawer.idToEdit;








