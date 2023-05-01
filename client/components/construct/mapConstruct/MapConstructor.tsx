import {GeometryCoordinates} from "../../../interfaces/GeometryCoordinates";
import {useEffect, useState} from "react";
import styles from './MapConstructor.module.scss';
import MinusIcon from "../../icons/minus/MinusIcon";
import PlusIcon from "../../icons/plus/PlusIcon";
import {API_KEY, generateId, MINSK_COORDINATES} from "../../../app/CONSTS";
import useNotification from "../../../hooks/useNotification";
import {Map, Placemark, YMaps, ZoomControl} from "@pbe/react-yandex-maps";
import useInput from "../../../hooks/useInput";
import {YMapsApi} from "@pbe/react-yandex-maps/typings/util/typing";

interface MapConstructorProps{
    addresses:Array<GeometryCoordinates>,
    saveAddresses:(changed:Array<GeometryCoordinates>)=>void
}
const getCoordsObj = ():GeometryCoordinates=>{
    return {id:generateId(),address:'',description:'',longitude:MINSK_COORDINATES.longitude,latitude:MINSK_COORDINATES.latitude}
}

const MapConstructor = ({addresses,saveAddresses}:MapConstructorProps) => {
    const [ymaps,setYmaps] = useState<YMapsApi>()


    const description = useInput('',(value:string)=>setCoords({...coords,description:value}))

    const {contextHolder,openNotificationWithIcon} = useNotification()

    const [changedAddresses,setChangedAddresses] = useState(addresses)

    const [coords,setCoords] = useState<GeometryCoordinates>(getCoordsObj())


    const handleRemoveAddress = (address:GeometryCoordinates)=>{
        setChangedAddresses(changedAddresses.filter(x=>x.id!=address.id))
    }
    const handleAddAddress = ()=>{
        if(!coords.address && coords.longitude && coords.latitude)
        {
            openNotificationWithIcon('error','Ошибка','Проверьте корректность адреса')
            return
        }
        setChangedAddresses([...changedAddresses,coords])
        setCoords(getCoordsObj())
        description.setValue('')
    }


    const handleDraggedEnd = (e:any)=> {
        const coord = e.get('target').geometry.getCoordinates()
        const lat = coord[0]
        const long = coord[1]
        ymaps?.geocode(coord)
            .then(res=>{
                // @ts-ignore
                const data = res.geoObjects.get(0).properties.getAll().text
                setCoords({...coords,longitude:long,latitude:lat,address:data})
            })
            .catch(console.log)
    }

    const handleSaveAddresses = ()=>{
        saveAddresses(changedAddresses)
    }

    useEffect(()=>{
        handleSaveAddresses()
    },[changedAddresses])

    return (
        <>
            {contextHolder}
            <div className={styles.mapBlock} onBlur={handleSaveAddresses}>
                <div className={styles.map}>
                    <YMaps
                        query={{ apikey: API_KEY }}
                    >
                        <Map
                            onLoad={ymaps => setYmaps(ymaps)}
                          state={{ center: [coords.latitude,coords.longitude], zoom: 10 }}
                            className={styles.yandexMap}
                          height={'100%'}
                          width={'100%'}
                            modules={["geolocation", "geocode","multiRouter.MultiRoute"]}>
                            <Placemark
                                modules={[
                                    "geoObject.addon.balloon",
                                    "geoObject.addon.hint"
                                ]}
                                geometry={[coords.latitude,coords.longitude]}
                                properties={{
                                    iconContent:'',
                                }}
                                options={{
                                    draggable:true,
                                    iconColor:'red',
                                    iconImageSize:[50,100],
                                }}
                                onDragEnd={handleDraggedEnd}
                            />
                            {
                                changedAddresses.map((address,index)=>
                                    <>
                                        <Placemark
                                            key={address.id}
                                            modules={[
                                                "geoObject.addon.balloon",
                                                "geoObject.addon.hint"
                                            ]}
                                            geometry={[address.latitude,address.longitude]}
                                            properties={{
                                                iconContent:index+1,
                                                hintContent:address.description,
                                                balloonContentHeader:`<div>${address.description}</div>`,
                                                balloonContent:`<div><div>${address.address}</div><button style="background-color: transparent; border: 0;cursor: pointer" onclick="document.getElementById(${address.id}).click()">Удалить</button></div>`
                                            }}
                                        />
                                        <span id={`${address.id}`} onClick={()=>handleRemoveAddress(address)} style={{display:'none'}}></span>
                                    </>
                                )
                            }
                            <ZoomControl/>
                        </Map>
                    </YMaps>

                </div>
                <div className={styles.inputs}>
                    <div>
                        Описание: <input type="text" value={description.value} onChange={description.onChange}/>
                        <div>address:<input type="text" disabled value={coords.address}/></div>
                    </div>
                    <div>
                        lat:<input type="text" disabled value={coords?.latitude}/>
                    </div>
                    <div>
                        long:<input type="text" disabled value={coords?.longitude}/>
                    </div>
                    <div>
                        <PlusIcon onClick={handleAddAddress}/>
                    </div>
                </div>
                <div className={styles.addresses}>
                    <header>Записанные адреса</header>
                    {
                        changedAddresses.map(address=>
                            <div key={address.id} className={styles.address}>
                                <div className={styles.info}>
                                    <div>{address.description}</div>
                                    <div>{address.address}</div>
                                    <div>lat: {address.latitude}</div>
                                    <div>long: {address.longitude}</div>
                                </div>
                                <div><MinusIcon onClick={()=>handleRemoveAddress(address)}/></div>
                            </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default MapConstructor;