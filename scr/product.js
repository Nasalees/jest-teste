module.exports = {
  calcTaxs(baseTax, complementTax) {
    if (complementTax < baseTax) {
      return baseTax;
    }
    return baseTax + complementTax;
  },
};
