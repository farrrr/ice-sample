import React, { useState } from 'react';
import { ConfigProvider } from '@alifd/next';
import { IntlProvider, addLocaleData } from 'react-intl';
import { UseRequestProvider } from 'ahooks';

// 引入 react-intl 語言包
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

// 引入 ice 組件之語言包
import enUS from '@alifd/next/lib/locale/en-us';
import zhTW from '@alifd/next/lib/locale/zh-tw';
import zhCN from '@alifd/next/lib/locale/zh-cn';

// 引入 locale 語言包
import localeEnUS from '@/locales/en-US';
import localeZhTW from '@/locales/zh-TW';
import localeZhCN from '@/locales/zh-CN';
import { getDevice } from '@/utils/rwd';

// 設定 react-intl 語言包
addLocaleData([...en, ...zh]);

interface Props {
  locale: string;
  children: React.ReactElement | React.ReactNode;
}

const appLocales = {
  'zh-TW': {
    intl: 'zh',
    next: zhTW,
    messages: localeZhTW,
  },
  'zh-CN': {
    intl: 'zh',
    next: zhCN,
    messages: localeZhCN,
  },
  'en-US': {
    intl: 'en',
    next: enUS,
    messages: localeEnUS,
  },
};

(() => {
  const throttle = (type: string, name: string, obj: Window = window) => {
    let running = false;

    const func = () => {
      if (running) return;

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

function AppConfigProvider(props: Props) {
  const { locale, children } = props;
  const [device, setDevice] = useState(getDevice(NaN));

  const userLocale = appLocales[locale] ? appLocales[locale] : appLocales['zh-TW'];

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e?.target as Window)?.innerWidth || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    <IntlProvider locale={userLocale.intl} messages={userLocale.messages} key={locale}>
      <ConfigProvider locale={userLocale.next} device={device}>
        <UseRequestProvider
          value={{
            loadingDelay: 300,
          }}
        >
          {React.Children.only(children)}
        </UseRequestProvider>
      </ConfigProvider>
    </IntlProvider>
  );
}

export default AppConfigProvider;
