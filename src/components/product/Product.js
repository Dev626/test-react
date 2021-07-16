import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
    const [product, setProduct] = useState(null)
    let { id } = useParams();

    async function getProduct() {
        const productsResult = await fetch("https://fakestoreapi.com/products/" + id)
        const data = await productsResult.json();
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {
                product ? (
                    <div className="row m-3">
                        <div className="col-6">
                            <img src={product.image} className="card-img-top" alt="product" />
                        </div>
                        <div className="col-6">
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <span className="d-flex my-4">{product.category}</span>
                            <Link to={"/product/" + product.id} className="btn btn-sm btn-danger right" >Add</Link>
                        </div>
                    </div>
                ) : <p>cargando...</p>
            }
        </>

    );
}

export default Product;
