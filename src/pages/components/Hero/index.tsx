import { ENV_CONFIG } from '../../../env-config';
import styles from './index.module.less';
import { ContactButton } from '../ContactButton';

export function Hero() {
    return (
        <div id={'hero'} className={styles['hero']}>
            <img className={styles['bg']} src="bg.png" />
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
