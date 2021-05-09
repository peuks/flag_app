/**
 * Transform the number to a string then replace some stuff
 * @param {*} x
 * @returns int with space
 */
export const numberFormat = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default numberFormat;
