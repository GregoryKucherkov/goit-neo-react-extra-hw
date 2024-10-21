export const selectUser = (state) => state.auth.user;

export const selectLogedIn = (state) => state.auth.isLoggedIn;

export const selectRefreshing = (state) => state.auth.isRefreshing;
