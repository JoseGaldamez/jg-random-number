const getRandomInt = (min, max) => {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("getRandomInt expects two numbers as arguments");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  getRandomInt,
};
