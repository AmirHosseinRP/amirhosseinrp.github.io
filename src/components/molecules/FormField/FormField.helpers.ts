export const removeLeftZeros = (value: string) => {
  return value.toString().replace(/^0+/, "");
};

export const removeNonNumericCharacters = (value: string) => {
  return value.replace(/[^0-9]+/g, "");
};

export const formatCellphoneNumber = (value: string) => {
  return value
    .replace(/[^0-9]+/g, "")
    .split("")
    .reduce((acc, cur, currentIndex) => {
      acc += (currentIndex === 4 || currentIndex === 7 ? " " : "") + cur;
      return acc;
    }, "");
};
