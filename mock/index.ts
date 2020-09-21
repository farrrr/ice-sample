module.exports = {
  'GET /api/user': {
    status: 'SUCCESS',
    data: {
      user: {
        name: 'Jack Ma',
        id: 10001,
      },
    },
  },
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      profile: {
        id: 10001,
        name: 'Jack Ma',
        edu: 'Hangzhou Normal University',
        address: 'Hangzhou',
      },
    },
  },
  'POST /api/auth/user': (req, res) => {
    const { name, password } = req.body;

    if (name === 'admin' && password === 'admin') {
      res.status(200).send({
        data: {
          id: 1001,
          status: 2,
          name: 'admin',
          mail: 'admin@xxxx.com',
          avatar: '/images/default_avatar.png',
          roles: {
            admin: true,
            user: true,
          },
        },
      });
    } else if (name === 'user' && password === 'user') {
      res.status(200).send({
        data: {
          id: 1002,
          status: 2,
          name: 'user',
          mail: 'user@xxxx.com',
          avatar: '/images/default_avatar.png',
          roles: {
            admin: true,
            user: false,
          },
        },
      });
    } else {
      res.status(401).send({
        error: 401,
        message: '帳號密碼錯誤',
      });
    }
  },
};
