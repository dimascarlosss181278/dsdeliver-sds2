import axios from "axios";

//const API_URL = 'http://exp://192.168.0.139:8080'
const API_URL = 'https://ws-sds2-dsdeliver.herokuapp.com'

export function fetchOrders() {
    return axios(`${API_URL}/orders`) 
} 

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}