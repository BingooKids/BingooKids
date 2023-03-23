import { Anchor, Col, Row } from 'antd';
import styles from './index.module.less';
import Logo from '@/logo.svg';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import { Link } from 'react-router-dom';

export function NavBar() {
    const items: AnchorLinkItemProps[] = [
        {
            key: 'home',
            href: '#hero',
            title: 'About',
        },
        {
            key: 'features',
            href: '#features',
            title: 'Apps',
        },
        {
            key: 'panda-poem',
            href: '#panda-poem',
            title: '熊猫诗词',
        },
    ];
    return (
        <Row
            className={styles['navbar']}
            align="middle"
            justify={'space-between'}
            gutter={12}
        >
            <Col>
                <Link to="/">
                    <Logo />
                </Link>
            </Col>
            <Col>
                <Anchor
                    className={styles['menus']}
                    direction={'horizontal'}
                    affix={false}
                    items={items}
                ></Anchor>
            </Col>
        </Row>
    );
}
