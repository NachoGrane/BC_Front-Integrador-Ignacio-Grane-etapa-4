const formatPrice = (price) => {
  return price.toLocaleString("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export default formatPrice;
