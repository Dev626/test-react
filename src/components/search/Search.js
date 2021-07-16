import { useState, useContext } from "react"
import { appContext } from "../context/Context"

function Search() {
    const $context = useContext(appContext)
    return (
        <div>
            <div className="clearfix w-100"></div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-3 bi bi-aspect-ratio" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                            <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                        </svg>
                        <span>Products</span>
                    </div>
                    <form className="d-flex ml-5">
                        <div className="dropdown">
                            <button className="btn btn-outline-danger dropdown-toggle d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-danger">{$context.listShopProduct.length}</span>
                                </div>
                                <span className="d-flex mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="dropdown-menu dropstart font-xd" aria-labelledby="dropdownMenuButton1">
                                <li className="p-3">Shop Cart List</li>
                                {
                                    $context.listShopProduct.map(product => (
                                        <li className="p-3" key={product.id}>
                                            <span>{product.title}</span>
                                            <span>{product.price}</span>
                                        </li>
                                    ))
                                }
                                <li className="p-3">Foot Total</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Search;
