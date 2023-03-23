import { ENV_CONFIG } from '../../../env-config';
import styles from './index.module.less';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Col, Row } from 'antd';
import { ContactButton } from '../ContactButton';

export function Hero() {
    return (
        <div id={'hero'} className={styles['hero']}>
            {/* <div className={styles['bg']}></div> */}
            <div className={styles['content']}>
                <div>
                    <img src="logo-white.png" style={{ height: 100 }} />
                    <p>{ENV_CONFIG.SLOGAN}</p>
                    <ContactButton />
                </div>
            </div>
            {/* <div className={styles['animation']}>
                <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_96bovdur.json"
                    style={{ height: '500px', width: '400px' }}
                ></Player>
            </div> */}
        </div>
    );
}
