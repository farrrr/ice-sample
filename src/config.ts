// src/config.ts

export default {
  // 預設配置
  default: {
    api: {
      baseURL: 'https://api.test/v1',
    },
    logLevel: 'info',
  },
  local: {
    api: {
      baseURL: '/api',
    },
    logLevel: 'debug',
  },
  production: {
    api: {
      baseURL: 'https://api.test/v1',
    },
    logLevel: 'error',
  },
};
