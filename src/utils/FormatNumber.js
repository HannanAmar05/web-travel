export const Formating = (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID")
  return formatNumbering.format(number);
};


export default Formating