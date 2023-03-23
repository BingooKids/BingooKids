import Logo from '@/logo.svg';
import { ENV_CONFIG } from '../../../env-config';
import styles from './index.module.less';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ContactButton } from '../ContactButton';

export function Features(props: {
    title: string;
    image: string;
    description: string;
}) {
    const span = {};
    return (
        <div className={styles['features']} id={'features'}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" style={{ margin: '0 0 60px 0' }} />
            <ContactButton text="Get this app"></ContactButton>
        </div>
    );
}
