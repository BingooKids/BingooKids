import Logo from '@/logo.svg';
import { Button, Divider, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

export function Footer() {
    const span = {};
    return (
        <div className={styles['footer']}>
            <Space direction="horizontal" align="center">
                <img src="bingoo-grey.png" />
                <Typography.Text type="secondary">
                    <small>&copy;2021-2023 BingooKids</small>
                </Typography.Text>
            </Space>
            <Space direction="horizontal" align="center">
                <Link to="/privacy">
                    <Button type="link">Privacy</Button>
                </Link>
                <Divider />
                <Link to="/user-agreement">
                    <Button type="link">Terms of use</Button>
                </Link>
            </Space>
        </div>
    );
}
