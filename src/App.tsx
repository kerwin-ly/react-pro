import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
// import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import AuthRouter from '@/routers/utils/authRouter';
import Router from '@/routers';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import { getBrowserLang } from './utils/browser';

const App = (props: any) => {
  const [i18nLocale, setI18nLocale] = useState(zhCN);

  const setLanguage = () => {
    if (props.language && props.language == 'zh') return setI18nLocale(zhCN);
    if (props.language && props.language == 'en') return setI18nLocale(enUS);
    if (getBrowserLang() == 'zh') return setI18nLocale(zhCN);
    if (getBrowserLang() == 'en') return setI18nLocale(enUS);
  };

  useEffect(() => {
    setLanguage();
  }, [props.language]);

  return (
    <HashRouter>
      <ConfigProvider locale={i18nLocale} componentSize={props.assemblySize}>
        {/* <AuthRouter> */}
        <Router />
        {/* </AuthRouter> */}
      </ConfigProvider>
    </HashRouter>
  );
};
export default App;
