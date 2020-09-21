import userService from '@/services/user';

export enum UserStatus {
  Blocked = 0, // 被禁用
  Inactive = 1, // 未啟用
  Active = 2, // 啟用
}

interface IState {
  id?: number | null;
  status?: UserStatus;
  name?: string;
  mail?: string;
  avatar?: string;
  roles?: { [propName: string]: boolean };
}

const DEFAULT_STATE: IState = {
  id: null,
  status: UserStatus.Inactive,
  name: 'guest',
  mail: 'blah@xxxx.com',
  avatar: '/images/default_avatar.png',
  roles: {},
};

export default {
  state: {
    ...DEFAULT_STATE,
  },

  effects: (dispatch) => ({
    /**
     * 登入驗證
     *
     * @param {{ nickname: string; password: string }} { nickname, password }
     */
    async authenticate({ name, password }: { name: string; password: string }) {
      const response = await userService.auth(name, password);
      const userData = response.data.data;

      sessionStorage.setItem('authUser', JSON.stringify(userData));
      dispatch.user.update(userData);

      // FIXME: use event way.
      return {
        ...userData.roles,
        guest: userData.status !== UserStatus.Active,
      };
    },

    /**
     * 登出
     */
    logout() {
      sessionStorage.removeItem('authUser');
      dispatch.user.update(DEFAULT_STATE);
    },
  }),

  reducers: {
    update: (state: IState, payload: IState): IState => {
      return { ...state, ...payload };
    },
  },
};
