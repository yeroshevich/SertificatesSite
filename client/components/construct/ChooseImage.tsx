import {useEffect, useRef, useState} from "react";
import {Button, Card, List, Modal} from 'antd'
import {SearchOutlined} from "@ant-design/icons";
import ImageResponse from "../../interfaces/ImageResponse";
import styles from '../../styles/ChooseImage.module.scss'
import {serverRequest} from "../../app/http/serverRequest";

export interface ChooseImageProps{
    onChoose:(url:string)=>void
}

const ChooseImage = ({onChoose}:ChooseImageProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images,setImages] = useState<Array<ImageResponse>>([])
    const [selectedFile, setSelectedFile] = useState<Blob>();



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCardClick = (e:React.MouseEvent<HTMLDivElement>,image:ImageResponse)=>{
        onChoose(image.url)
        handleCancel()
    }

    const fetchImages = async()=>{
        const res:Array<ImageResponse> = (await serverRequest.get('/images')).data
        setImages([...res.map(x=>x)])
    }
    const handleSubmit = async(event:React.FormEvent) => {
        event.preventDefault()
        const formData = new FormData();
       if(!selectedFile)return
        formData.append("file", selectedFile);

        try {
            const response = await serverRequest.post('/images', formData,{headers:{'Content-type':'multipart/form-data'}})
            await fetchImages()
        } catch(error) {
            console.log(error)
        }
    }
    const handleFileSelect = (files:FileList | null) => {
        if(!files)return
        setSelectedFile(files[0])

    }

    useEffect(()=>{
       fetchImages()
    },[])
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
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <form onSubmit={handleSubmit}>
                        <input type="file" onChange={(e)=>handleFileSelect(e.target.files)}/>
                        <input type="submit" value={'Загрузить'}/>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default ChooseImage;