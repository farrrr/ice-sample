import React from 'react';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Item } = Menu;
const { Popup } = Overlay;

interface LogoutFunc {
  (): void;
}

export interface Props {
  name: string;
  avatar: string;
  mail: string;
  logout: LogoutFunc;
}

const UserProfile = ({ name, avatar, mail }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar src={avatar} alt="用戶頭像" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props: Props) => {
  const { name, avatar, logout } = props;

  const menuHandler = (key: string) => {
    switch (key) {
      case 'logout':
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <Avatar size="small" src={avatar} alt="用戶頭像" />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...props} />
        <Menu className={styles.menu} onItemClick={menuHandler}>
          <Item key="personalConfig">
            <Icon size="small" type="account" />
            個人設定
          </Item>
          <Item key="systemConfig">
            <Icon size="small" type="set" />
            系统设置
          </Item>
          <Item key="logout">
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

HeaderAvatar.defaultProps = {
  name: 'MyName',
  mail: 'name@gmail.com',
  avatar: 'https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png',
};

export default HeaderAvatar;
