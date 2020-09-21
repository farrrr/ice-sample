import { request } from 'ice';

export default {
  // 用戶認證
  async auth(name: string, password: string): Promise<any> {
    return request({
      method: 'post',
      url: '/auth/user',
      data: {
        name,
        password,
      },
    });
  },
};
