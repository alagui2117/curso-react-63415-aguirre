import {getDatabase, onValue, push, ref, set} from "firebase/database";
import configFirebase from "./firebase.jsx";

export const getOrder = async () =>{

    const database = getDatabase(configFirebase)
    const collectionRef = ref(database, "products")
    return new Promise((resolve, reject) => {
        onValue(collectionRef, (snapshot) => {
            const productsData = snapshot.val();
            if (productsData){
                resolve(Object.values(productsData))
            }else
                reject("No se encontraron productos")
        })
    })
}


export const saveOrder = (order) => {
    const database = getDatabase(configFirebase)
    const collectionRef = ref(database, "orders")
    return new Promise((resolve, reject) => {
        try {
            const newOrder =  push(collectionRef)
            set(newOrder, order)
            resolve("Orden guardada con exito")
        }catch (err){
            reject(err)
        }
    })
};

export const getProductsByCategory = (categoryId) => {

    const database = getDatabase(configFirebase)
    const collectionRef = ref(database, "products")
    return new Promise((resolve, reject) => {
        onValue(collectionRef, (snapshot) => {
            const productsData = snapshot.val();
            if (productsData){
                const productsArray = Object.values(productsData)
                resolve(productsArray.filter((prod) => prod.category === categoryId));
            }else
                reject("No se encontraron productos")
        })
    })
};
