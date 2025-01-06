import moment from "moment";

export const moveScreen = (screen) => {
  return window.location.href = screen;
};

export const noop = () => { };

export const formatDate = (date, format = 'MMM YYYY') => {
  return moment(date).utcOffset("+07:00").format(format);
};

export const formatRupiah = (number = 0, prefix = 'Rp') => {
  const numericValue = parseFloat(number) || 0;
  const formattedValue = numericValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${prefix}${formattedValue}`;
};