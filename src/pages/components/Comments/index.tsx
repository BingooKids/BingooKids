import Logo from '@/logo.svg';
import { ENV_CONFIG } from '../../../env-config';
import styles from './index.module.less';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Card, Image, Col, Row, Typography, Avatar, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';

import avatar1 from './a1.png';
import avatar2 from './a2.png';
import avatar3 from './a3.png';

export function Comments() {
    return (
        <div className={styles['comments']} id={'panda-poem'}>
            <img src="panda-poem.png" className={styles['logo']} />
            <h1>
                熊猫诗词 <Tag>即将上线</Tag>
            </h1>
            <p>
                熊猫诗词是一款寓教于乐的手机app，它可以帮助幼儿认识和欣赏中国诗词，让孩子们在国风背景、AI朗诵和互动游戏中感受诗词的魅力，培养文化素养和审美能力。
            </p>
            <img src={'panda-poem-pic.png'} className={styles['screen']} />

            <Row gutter={[24, 24]} style={{ width: '100%', maxWidth: 800 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Card hoverable style={{ width: '100%' }}>
                        <Typography.Paragraph>
                            采用了中国传统文化的元素，如山水画、古琴、红楼等，为孩子们营造了一个优美的学习环境。
                        </Typography.Paragraph>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Card hoverable style={{ width: '100%' }}>
                        <Typography.Paragraph>
                            利用了人工智能技术，为每首诗词提供了标准的读音和情感的表达，让孩子们能够感受到诗词的韵律和意境。
                        </Typography.Paragraph>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Card hoverable style={{ width: '100%' }}>
                        <Typography.Paragraph>
                            设置多种有趣的互动游戏，让孩子们在玩中学习，提高了学习的兴趣和效果（即将上线）。
                        </Typography.Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
