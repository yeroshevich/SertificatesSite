import {GeometryCoordinates} from "../interfaces/GeometryCoordinates";

export const API_KEY =  "05359330-8c8e-4c60-a4bc-2761c519718a"
export const MINSK_COORDINATES:GeometryCoordinates = {latitude:53.9,longitude: 27.5667,description:'Минск'}

export const BUYPAGE_PATH = '/BuyingSertificates'
export const BACKFORM_PATH = '/CheckForm'
export const URIDICALPAGE_PATH = '/Uridicals'
export const PHISICALPAGE_PATH = '/Phisicals'

export const generateId = ()=>{
    return new Date().getTime()
}