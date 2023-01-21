const getRandomFloat = (min, max, decimals = 2) => {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    typeof decimals !== "number"
  ) {
    throw new Error("Arguments must be numbers");
  }

  if (min > max) {
    throw new Error("Min must be lower than max");
  }

  if (decimals < 0) {
    throw new Error("Decimals must be positive");
  }

  const number = Math.random() * (max - min) + min;

  return parseFloat(number.toFixed(decimals));
};

module.exports = {
  getRandomFloat,
};
