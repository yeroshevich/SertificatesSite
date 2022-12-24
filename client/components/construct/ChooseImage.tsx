import axios from "axios";
import {ReactNode, useState} from "react";
import {Button, Card, List, Modal} from 'antd'
import {SearchOutlined} from "@ant-design/icons";
import ImageResponse from "../../interfaces/ImageResponse";
import styles from '../../styles/ChooseImage.module.scss'

export interface ChooseImageProps{
    onChoose?:(url:string)=>void
}

const ChooseImage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images,setImages] = useState<Array<ImageResponse>>([])
    const [selectedImage,setSelectedImage] = useState<ImageResponse>({title:'',url:''})

    const showModal = () => {
        setIsModalOpen(true);
        fetchImages()
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCardClick = (e:React.MouseEvent<HTMLDivElement>,image:ImageResponse)=>{
        //e.target.style.backgroundColor='blue'
       // setSelectedImage(image)
    }

    const fetchImages = ()=>{
        //axios.get('')
        setImages([
            {title:'Первая',url:'./card 1.png'},
            {title:'Вторая',url:'./Rectangle 7.png'},
            {title:'Третья',url:'./security 1.png'},
            {title:'четвертая',url:'logo-black 1.png'}
        ])
    }

    return (
        <>
            <Button type="primary" icon={<SearchOutlined />} onClick={showModal}>
                Выбрать изображение
            </Button>
            <Modal
                title="Выберите изображение"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={'auto'}
                footer={null}
            >
                <List
                    pagination={{pageSize:6}}
                    grid={{
                        gutter: 2,
                        xs: 1,
                        sm: 1,
                        md: 1,
                        lg: 2,
                        xl: 2,
                        xxl: 3,
                    }}
                    dataSource={images}
                    renderItem={(item,index) => (
                        <List.Item
                            onClick={(e)=>handleCardClick(e,item)}>
                            <Card
                                key={index}
                                title={item.title}
                                className={styles.card}
                            >
                                <img src={item.url} alt={item.title} className={styles.image}/>
                            </Card>
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    );
};

export default ChooseImage;