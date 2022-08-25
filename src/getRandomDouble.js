const getRandomDouble = (min, max, decimals) => {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    typeof decimals !== "number"
  ) {
    throw new Error("Arguments must be numbers");
  }

  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
};

module.exports = {
  getRandomDouble,
};
