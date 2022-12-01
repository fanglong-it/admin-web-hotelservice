export const formatPrice = (price, countryCode, currency) => {
  return price.toLocaleString(countryCode, {
    style: "currency",
    currency: currency,
  });
};
