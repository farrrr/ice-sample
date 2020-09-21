import AppConfigProvider from '@/components/AppConfigProvider';
import { getLocale } from '@/utils/locale';
import { Message } from '@alifd/next';
import { config, createApp, IAppConfig } from 'ice';
import React, { ReactNode } from 'react';
import { UserStatus } from '@/models/user';

const locale = getLocale();

const appConfig: IAppConfig = {
  app: {
    // 可選，根節點 id，預設為 imc-container
    rootId: 'ice-container',
    // 可選，是否解析路由組件的查詢參數
    parseSearchParams: true,
    // 可選，自定義添加 Provider
    addProvider: ({ children }: { children: ReactNode }) => (
      <AppConfigProvider locale={locale}>{children}</AppConfigProvider>
    ),
    getInitialData: async () => {
      const authSession = sessionStorage.getItem('authUser');

      if (authSession === null) {
        return {
          auth: {
            guest: true,
          },
        };
      }

      const authUser = JSON.parse(authSession);

      return {
        initialStates: {
          user: authUser,
        },
        auth: {
          ...authUser.roles,
          guest: authUser.status !== UserStatus.Active,
        },
      };
    },
  },
  router: {
    type: 'browser',
    basename: '/',
    fallback: <div>loading...</div>,
  },
  request: {
    // 可選，全局設定 request 是否返回 response 對象，預設為 false
    withFullResponse: true,
    baseURL: config.api.baseURL,
    interceptors: {
      request: {
        onConfig: (requestConfig) => {
          // TODO: 發送請求前：可以對 RequestConfig 做一些統一處理 (Authentication Bearer)
          return requestConfig;
        },
        onError: (error) => {
          // TODO: 發送失敗可以做一些後續動作
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (response) => {
          // TODO: 可以在此做一些 toast notification 或是格式化 response
          return response;
        },
        onError: (error) => {
          // 統一在此攔截發送 Toast 錯誤通知
          Message.error(error.response?.data?.message || '發生錯誤');

          return Promise.reject(error);
        },
      },
    },
  },
  auth: {
    // 可選的，設定無權限時的展示組件，預設為 null
    NoAuthFallback: <div>沒有權限...</div>,
  },
  logger: {
    level: config.logLevel,
  },
};

createApp(appConfig);
