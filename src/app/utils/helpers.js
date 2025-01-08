import moment from 'moment';

export const moveScreen = (screen) => {
  return (window.location.href = screen);
};

export const noop = () => { };

export const formatDate = (date, format = 'MMM YYYY') => {
  return moment(date).utcOffset('+07:00').format(format);
};

export const formatRupiah = (number = 0, prefix = 'Rp') => {
  const numericValue = parseFloat(number) || 0;
  const formattedValue = numericValue
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${prefix}${formattedValue}`;
};

export const mapPlatformAccess = (responseData) => {
  if (!responseData) return [];

  return Object.keys(responseData)
    .filter(
      key => !['id', 'username', 'email', 'divisi', 'jabatan', 'password'].includes(key)
    )
    .map(key => {
      const section = responseData[key];

      if (!section || typeof section !== 'object') {
        return null;
      }

      // Cek apakah semua nilai di dalam section adalah boolean
      const isDirectCheckbox = Object.values(section).every(value => typeof value === 'boolean');

      if (isDirectCheckbox) {
        return {
          label: key.charAt(0).toUpperCase() + key.slice(1),
          slug: key,
          checkbox: Object.keys(section).map(subKey => ({
            label: subKey.charAt(0).toUpperCase() + subKey.slice(1),
            value: section[subKey],
          })),
        };
      }

      // Jika ada nested object, buat children
      const children = Object.keys(section).map(subKey => {
        const subValue = section[subKey];

        if (!subValue || typeof subValue !== 'object') {
          return null;
        }

        return {
          label: subKey.charAt(0).toUpperCase() + subKey.slice(1),
          slug: subKey,
          checkbox: Object.keys(subValue).map(childKey => ({
            label: childKey.charAt(0).toUpperCase() + childKey.slice(1),
            value: subValue[childKey],
          })),
        };
      }).filter(item => item !== null);

      return {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        slug: key,
        children,
      };
    }).filter(item => item !== null);
};