import { get, isEmpty, isInteger, isUndefined, merge } from 'lodash';
import { getLocaleByCurrency } from './locale';

export const formatMoney = (
  value,
  currency = '',
  currencyDisplay,
  maxDecimal = 2,
  position
) => {
  const num = Number(value);
  // console.log(value);
  const language = localStorage.getItem('locale');
  const isCurrencyIdr = currency === 'IDR';
  const isCurrencyNotDefined = currency === '' || isUndefined(currency);
  const isLanguageId = language === 'id';

  let newCurrencyDisplay = currencyDisplay;
  let newMaxDecimal = maxDecimal;
  if (isCurrencyNotDefined) newCurrencyDisplay = 'none';
  if (isLanguageId && isCurrencyIdr && newCurrencyDisplay !== 'none')
    newCurrencyDisplay = 'narrowSymbol';

  if (isInteger(num)) newMaxDecimal = 0;

  const locales = isLanguageId ? 'id-ID' : 'en-US';
  const locale = getLocaleByCurrency(currency);
  const currencySymbol = get(locale, 'currencySymbol');
  const currencyCode = get(locale, 'currencyCode');

  let options = !isEmpty(locale) && {
    currency: currencyCode,
    maximumFractionDigits: newMaxDecimal,
    style: isCurrencyNotDefined ? 'decimal' : 'currency',
  };
  if (newCurrencyDisplay !== 'none')
    options = merge(options, { currencyDisplay: newCurrencyDisplay });

  if (newMaxDecimal)
    options = merge(options, { maximumFractionDigits: maxDecimal });

  const formatter = new Intl.NumberFormat(locales, options);
  const money = formatter.format(num);
  let newMoney = '';
  if (position === 'left') {
    const m = `${newCurrencyDisplay === 'narrowSymbol' ? currencySymbol : currencyCode} ${`${money}`.replace(
      /[^\d.,]/g,
      ''
    )}`;
    newMoney =
      newCurrencyDisplay === 'none'
        ? `${money}`
            .replace(new RegExp(`${currencyCode}|${currencySymbol}`, 'g'), '')
            .trim()
        : m.trim();
  }

  if (position === 'right') {
    const m = `${`${money}`.replace(/[^\d.,]/g, '')} ${
      newCurrencyDisplay === 'narrowSymbol' ? currencySymbol : currencyCode
    }`;
    newMoney =
      newCurrencyDisplay === 'none'
        ? `${money}`
            .replace(new RegExp(`${currencyCode}|${currencySymbol}`, 'g'), '')
            .trim()
        : m.trim();
  } else {
    newMoney =
      newCurrencyDisplay === 'none'
        ? `${money}`
            .replace(new RegExp(`${currencyCode}|${currencySymbol}`, 'g'), '')
            .trim()
        : `${money}`.trim();
  }
  return newMoney;
};
