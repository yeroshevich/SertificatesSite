import {notification} from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function useNotification(){
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType,title:string,body:string,duration=2) => {
        api[type]({
            message: title,
            description:body,
            duration
        });
    };
    return {contextHolder,openNotificationWithIcon}
}