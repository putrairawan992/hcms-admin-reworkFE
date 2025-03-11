export const localeConfigList = [
  {
    currencyCode: 'EUR',
    currencySymbol: '€',
    locale: 'es',
  },
  {
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    locale: 'en-AU',
  },
  {
    currencyCode: 'CAD',
    currencySymbol: 'C$',
    locale: 'en-CA',
  },
  {
    currencyCode: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
  },
  {
    currencyCode: 'JPY',
    currencySymbol: '¥',
    locale: 'ja',
  },
  {
    currencyCode: 'GBP',
    currencySymbol: '£',
    locale: 'en-UK',
  },
  {
    currencyCode: 'SEK',
    currencySymbol: 'kr',
    locale: 'sv',
  },
  {
    currencyCode: 'HKD',
    currencySymbol: '$',
    locale: 'en-HK',
  },
  {
    currencyCode: 'SGD',
    currencySymbol: 'S$',
    locale: 'en-SG',
  },
  {
    currencyCode: 'SAR',
    currencySymbol: '﷼',
    locale: 'ar',
  },
  {
    currencyCode: 'AED',
    currencySymbol: 'د.إ',
    locale: 'ar',
  },
  {
    currencyCode: 'IDR',
    currencySymbol: 'Rp',
    locale: 'id-ID',
  },
  {
    currencyCode: 'NZD',
    currencySymbol: 'NZ$',
    locale: 'en-NZ',
  },
  {
    currencyCode: 'CNY',
    currencySymbol: '¥',
    locale: 'zh',
  },
  {
    currencyCode: 'NOK',
    currencySymbol: 'kr',
    locale: 'sv-SE',
  },
  {
    currencyCode: 'CHF',
    currencySymbol: 'CHF',
    locale: 'de-CH',
  },
  {
    currencyCode: 'KRW',
    currencySymbol: '₩',
    locale: 'ko-KR',
  },
  {
    currencyCode: 'VND',
    currencySymbol: '₫',
    locale: 'vi-VN',
  },
  {
    currencyCode: 'MYR',
    currencySymbol: 'RM',
    locale: 'en-MY',
  },
  {
    currencyCode: 'THB',
    currencySymbol: '฿',
    locale: 'th',
  },
];

export const getLocaleByCurrency = (currency) =>
  localeConfigList.find((l) => l.currencyCode === currency);
