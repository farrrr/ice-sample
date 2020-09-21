import { Checkbox, Form, Input, Loading } from '@alifd/next';
import React, { useState } from 'react';

import { logger, store, useAuth, Redirect } from 'ice';
import styles from './index.module.scss';

const { Item } = Form;

export interface IDataSource {
  name: string;
  password: string;
  autoLogin: boolean;
}

const DEFAULT_DATA: IDataSource = {
  name: '',
  password: '',
  autoLogin: true,
};

interface LoginProps {
  dataSource?: IDataSource;
}

const LoginBlock: React.FunctionComponent<LoginProps> = (props = { dataSource: DEFAULT_DATA }): JSX.Element => {
  const { dataSource = DEFAULT_DATA } = props;
  const [formData, setFormData] = useState(dataSource);
  const [, userDispatchers] = store.useModel('user');
  const [userAuth, setAuth] = useAuth();
  const {
    authenticate: { isLoading },
  } = store.useModelEffectsState('user');

  const formChange = (values: IDataSource) => {
    setFormData(values);
  };

  const handleSubmit = async (values: IDataSource, errors: []) => {
    if (errors) {
      logger.error('errors', errors);

      return;
    }

    const res = await userDispatchers.authenticate(values);

    if (res?.guest === false) {
      setAuth(res);
    }
  };

  if (userAuth.guest === false) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.LoginBlock}>
      <div className={styles.innerBlock}>
        <a href="#">
          <img
            className={styles.logo}
            src="https://img.alicdn.com/tfs/TB1KtN6mKH2gK0jSZJnXXaT1FXa-1014-200.png"
            alt="logo"
          />
        </a>
        <div className={styles.desc}>
          <span className={styles.active}>管理者登入</span>
        </div>
        <Loading tip="驗證中..." visible={isLoading}>
          <Form value={formData} onChange={formChange} size="large">
            <Item required requiredMessage="必填">
              <Input name="name" maxLength={20} placeholder="帳號" />
            </Item>
            <Item required requiredMessage="必填" style={{ marginBottom: 0 }}>
              <Input.Password name="password" htmlType="password" placeholder="密碼" />
            </Item>
            <div className={styles.infoLine}>
              <Item style={{ marginBottom: 0 }}>
                <Checkbox name="autoLogin" className={styles.infoLeft}>
                  自動登入
                </Checkbox>
              </Item>
            </div>

            <Item style={{ marginBottom: 10 }}>
              <Form.Submit
                type="primary"
                onClick={handleSubmit}
                className={styles.submitBtn}
                validate
                disabled={isLoading}
              >
                登入
              </Form.Submit>
            </Item>
          </Form>
        </Loading>
      </div>
    </div>
  );
};

export default LoginBlock;
