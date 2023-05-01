import {YMaps, Map, ZoomControl, Placemark,GeoObject} from "@pbe/react-yandex-maps";
import {API_KEY, MINSK_COORDINATES} from "../../../app/CONSTS";
import {GeometryCoordinates} from "../../../interfaces/GeometryCoordinates";
import {YMapsApi} from "@pbe/react-yandex-maps/typings/util/typing";
import {useEffect, useRef, useState} from "react";
import styles from './Map.module.scss'
import ymaps, {modules} from "yandex-maps";

export interface BuyingMapProps{
    addresses:GeometryCoordinates[]
}


const BuyingMap = ({addresses}:BuyingMapProps) => {

    const [ymaps,setYmaps] = useState<YMapsApi>()

    const [defaultMarks,setDefaultMarks] = useState<Array<ymaps.Placemark>>()

    const map = useRef()

    const reloadRoutes = ()=>{
        // @ts-ignore
        if(map.current.geoObjects.getLength() != addresses.length)
        {
            // @ts-ignore
            const lastIndex = map.current.geoObjects.getLength()-1
            //@ts-ignore
            map.current.geoObjects.splice(lastIndex,1)
        }
    }
    const buildRoute = (coords:GeometryCoordinates)=>{
        if(ymaps)
        {
            const multi = new ymaps.multiRouter.MultiRoute({
                    referencePoints:['Минск',coords.latitude+','+coords.longitude],
                    params:{
                        routingMode:'pedestrian'
                    }
                },
                {
                    boundsAutoApply:true
                }
            )
            reloadRoutes()
            // @ts-ignore
            map.current.geoObjects.add(multi)

        }
    }


    return (
        <div>
            <header className={styles.header}>
                ГДЕ МОЖНО ПРИОБРЕСТИ ПОДАРОЧНЫЙ СЕРТИФИКАТ
            </header>
            <div  className={styles.map}>
                <button
                    onClick={reloadRoutes}
                    className={styles.closeRouting}>
                    Отменить маршрут
                </button>

                <YMaps
                    query={{ apikey: API_KEY }}
                    >
                    <Map
                        instanceRef={map}
                        onLoad={(maps)=>setYmaps(maps)}
                        state={{ center: [MINSK_COORDINATES.latitude,MINSK_COORDINATES.longitude], zoom: 10 }}
                        className={styles.yandexMap}
                        width={'50%'}
                        height={'50px'}
                        modules={["geolocation", "geocode","multiRouter.MultiRoute"]}
                    >
                        {
                            addresses.map((address,index)=>

                                   <div key={index}>
                                       <Placemark
                                           key={index}
                                           modules={[
                                               "geoObject.addon.balloon",
                                               "geoObject.addon.hint"
                                           ]}
                                           geometry={[address.latitude,address.longitude]}
                                           properties={{
                                               iconContent:index+1,
                                               hintContent:address.description,
                                               balloonContentHeader:`<div>${address.description}</div>`,
                                               balloonContent:`<div><div>${address.address}</div><button style="background-color: transparent; border: 0;cursor: pointer" onclick="document.getElementById(${address.latitude}).click()">Проложить маршрут</button></div>`
                                           }}
                                       />
                                       <span id={`${address.latitude}`} onClick={()=>buildRoute(address)} style={{display:'none'}}></span>
                                   </div>
                            )
                        }
                        <ZoomControl/>
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};

export default BuyingMap;