import { useTitle } from 'ahooks';
import { ENV_CONFIG } from '../../env-config';
import { Comments } from '../components/Comments';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { NavBar } from '../components/Navbar';
import styles from './index.module.less';
export function HomePage() {
    useTitle(`${ENV_CONFIG.APP_NAME} | ${ENV_CONFIG.SLOGAN}`);
    return (
        <div className={styles['home']}>
            <NavBar />
            <Hero />
            <Features
                title="Jungle Sounds"
                image="jungle-sound.jpg"
                description="Meet 48 species of jungle animals, listen to their calls and understand their characteristics. Get your own Jungle Explorer badge by completing the jungle game challenge. Let's start your jungle journey together!"
            ></Features>
            <Features
                title="Jungle ABC"
                image="jungle-abc.png"
                description="A simple and cute alphabet learning app, it contains pure American and British pronunciations. Tap on the blocks to read the letters aloud, and then click to play animal words. It's as simple as that, very suitable for your child."
            ></Features>
            <Comments />
            <Footer></Footer>
        </div>
    );
}
