import moment from "moment";

export const moveScreen = (screen) => {
  return window.location.href = screen;
};

export const noop = () => { };

export const formatDate = (date) => {
  return moment(date).utcOffset("+07:00").format("MMM YYYY");
};

export const formatRupiah = (number = 0, prefix = 'Rp') => {
  return prefix + ' ' + number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}