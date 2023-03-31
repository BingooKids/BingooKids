import { Collapse } from 'antd';
import styles from './index.module.less';
const { Panel } = Collapse;

export function PandaPoemHelpPage() {
    return (
        <div className={styles['home']}>
            <header>
                <img src="panda-poem.png" className={styles['logo']} />
                <h2>熊猫诗词</h2>
            </header>

            <Collapse defaultActiveKey={['1']}>
                <Panel header="我的朗读语音安全吗？" key="1">
                    <p>
                        您的隐私对我们非常重要。我们的应用程序不会上传或分享您的录音文件，它们只会保存在您的设备上，我们不会保留任何副本。
                    </p>
                </Panel>
                <Panel header="应用删除后我的录音还会保存吗？" key="2">
                    <p>
                        温馨提示，如果您卸载了我们的应用程序，您的录音文件也会被一起删除，无法恢复。请在卸载前确认是否要删除数据，以免造成不必要的损失。谢谢您的理解和配合！
                    </p>
                </Panel>
                <Panel header="为什么要购买会员？" key="3">
                    <p>
                        购买会员，您不仅可以享受更多的功能，还可以支持我们的团队，让我们能够持续地改进和更新我们的应用程序。您的支持是我们前进的动力！😊
                    </p>
                </Panel>
            </Collapse>
        </div>
    );
}
