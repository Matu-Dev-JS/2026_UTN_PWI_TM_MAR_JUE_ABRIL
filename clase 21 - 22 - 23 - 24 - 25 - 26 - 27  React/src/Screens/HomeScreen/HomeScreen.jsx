import Header from "../../Components/Header/Header"

function HomeScreen (){

    const products = [
        {id: 1, price: 200, title: "tv samsung"},
        {id: 2, price: 250, title: "tv noblex"}
    ]
    return (
        <div>
            <Header/>
            <h1>Productos</h1>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <span>Precio: ${product.price}</span>
                            <a href={`/products/${product.id}`}>Ver detalle</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeScreen