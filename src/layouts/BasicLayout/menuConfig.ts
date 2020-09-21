const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '數據頁麵',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: '分析頁麵',
        path: '/dashboard/analysis',
      },
      {
        name: '監控頁麵',
        path: '/dashboard/monitor',
      },
      {
        name: '工作臺',
        path: '/dashboard/workplace',
      },
    ],
  },
  {
    name: '錶單頁麵',
    path: '/',
    icon: 'copy',
    children: [
      {
        name: '單列錶單',
        path: '/form/basic',
      },
      {
        name: '兩列錶單',
        path: '/form/two',
      },
      {
        name: '三列錶單',
        path: '/form/three',
      },
      {
        name: '四列錶單',
        path: '/form/four',
      },
      {
        name: '分步錶單',
        path: '/form/step',
      },
      {
        name: '分類錶單',
        path: '/form/classified',
      },
      {
        name: '分組錶單',
        path: '/form/group',
      },
      {
        name: '流程錶單',
        path: '/form/flow',
      },
      {
        name: '分級錶單',
        path: '/form/hierarchical',
      },
    ],
  },
  {
    name: '列錶頁麵',
    path: '/',
    icon: 'chart-bar',
    children: [
      {
        name: '基礎列錶',
        path: '/list/basic',
      },
      {
        name: '卡片列錶',
        path: '/list/card',
      },
      {
        name: '錶格列錶',
        path: '/',
        children: [
          {
            name: '基礎過濾',
            path: '/list/table/filter',
          },
          {
            name: '單列過濾',
            path: '/list/table/singlecol',
          },
          {
            name: '多列過濾',
            path: '/list/table/mutilcol',
          },
          {
            name: '帶操作列',
            path: '/list/table/action',
          },
          {
            name: '可展開錶',
            path: '/list/table/expand',
          },
          {
            name: '單層樹錶',
            path: '/list/table/singletree',
          },
          {
            name: '彈窗錶格',
            path: '/list/table/dialog',
          },
          {
            name: '合並單元格',
            path: '/list/table/mergecell',
          },
        ],
      },
    ],
  },
  {
    name: '詳情頁麵',
    path: '/',
    icon: 'calendar',
    children: [
      {
        name: '基礎詳情',
        path: '/detail/basic',
      },
      {
        name: '高級詳情',
        path: '/detail/advanced',
      },
    ],
  },
  {
    name: '結果&缺省',
    path: '/',
    icon: 'warning',
    children: [
      {
        name: '成功頁麵',
        path: '/feedback/success',
      },
      {
        name: '失敗頁麵',
        path: '/feedback/fail',
      },
      {
        name: '403',
        path: '/feedback/403',
      },
      {
        name: '404',
        path: '/feedback/404',
      },
      {
        name: '500',
        path: '/feedback/500',
      },
    ],
  },
  {
    name: '設定頁麵',
    path: '/',
    icon: 'set',
    children: [
      {
        name: '係統設定',
        path: '/settings',
      },
      {
        name: '個人設定',
        path: '/person',
      },
    ],
  },
  {
    name: '登入&註冊',
    path: '/',
    icon: 'account',
    children: [
      {
        name: '登入',
        path: '/auth/login',
      },
      {
        name: '註冊',
        path: '/auth/register',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
