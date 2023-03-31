import { useTitle } from 'ahooks';
import { ENV_CONFIG } from '../../env-config';
import { Comments } from '../components/Comments';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { NavBar } from '../components/Navbar';
import styles from './index.module.less';
export function PandaPoemPage() {
    useTitle(`${ENV_CONFIG.APP_NAME} | ${ENV_CONFIG.SLOGAN}`);
    return (
        <div className={styles['home']}>
            <NavBar />
            <Comments />
            <Footer></Footer>
        </div>
    );
}
