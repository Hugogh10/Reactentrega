import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail  from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [ items, setItems ] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setItems(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
},[itemId])
return (
    <div className="ItemDetailContainer">
        {loading ? <p>Cargando información del producto...</p> : <ItemDetail {...items} />}
    </div>
)

}


export default ItemDetailContainer
