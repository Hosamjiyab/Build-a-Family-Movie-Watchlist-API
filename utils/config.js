export const getPort = () => process.env.PORT || 3000;
export const getSecret = () =>
  process.env.JWT_SECRET || "family-watchlist-dev-secret";