import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { appContext } from "../context/Context"

function ListProduct() {
    const $context = useContext(appContext)
    const [products, setProducts] = useState([])

    async function getProducts() {
        const productsResult = await fetch("https://fakestoreapi.com/products");
        const data = await productsResult.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts()
    }, [])

    function activateLasers(product) {
        $context.addProduct(product);
        console.log("context", $context.listShopProduct);
    }

    return (
        <div className="row m-3">
            {
                products.map((product, idx) => {
                    return (
                        <div className="col-xs-1 col-lg-2 col-md-3 col-sm-4 col-xs-12" key={product.id}>
                            <div className="card">
                                <Link to={"/product/" + product.id}>
                                    <img src={product.image} className="card-img-top" alt="product" />
                                </Link>
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i>{product.price}</i>
                                        <button className="btn btn-sm btn-danger right" onClick={() => activateLasers(product)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ListProduct;
