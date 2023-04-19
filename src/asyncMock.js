const products = [
{
    id: '1',
    name:'Remera estampada',
    price: 5000,
    category: 'Remeras',
    img:'https://th.bing.com/th/id/OIP.MBHLYsBr7A86UzO6mtdmgwHaJ5?pid=ImgDet&rs=1',
    stock: 25,
    description:'descricion de la remera'

},
{id: '2', name:'Buzo', price: 6000, category: 'Buzos', img:'https://th.bing.com/th/id/OIP.0Zv2UnbnQiaTTo_ck7CbxgHaHa?pid=ImgDet&rs=1', stock: 5, description:'descricion del Buzo'},
{id: '3', name:'Campera', price: 8000, category: 'Camperas', img:'https://th.bing.com/th/id/OIP.bjNkDBkSj4yyDQRvKuhpfQAAAA?pid=ImgDet&rs=1', stock: 2, description:'descricion de la campera'},
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(cat => cat.category === categoryId))
        }, 500)
    })
}


