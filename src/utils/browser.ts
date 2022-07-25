/**
 * @description Get default language of browser
 * @return string
 */
export const getBrowserLang = () => {
  const browserLang = navigator.language ? navigator.language : navigator.browserLanguage;

  switch (browserLang.toLowerCase()) {
    case 'zh-cn':
    case 'cn':
    case 'zh':
      return 'zh';
    case 'en':
      return 'en';
    default:
      return 'en';
  }
};
