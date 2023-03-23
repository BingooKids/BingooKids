import { Button, Popover, Image } from 'antd';
import { ButtonType } from 'antd/lib/button';
import qrcode from './qrcode.jpg';
export function ContactButton(props: { type?: ButtonType; text?: string }) {
    return (
        <Button
            type={props.type || 'primary'}
            size="large"
            onClick={() =>
                window.open(
                    'https://apps.apple.com/us/developer/zhiming-huang/id850391620'
                )
            }
        >
            {props.text || 'View all apps'}
        </Button>
    );
}
