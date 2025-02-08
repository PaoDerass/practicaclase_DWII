'use client'
import React, { useEffect } from 'react'
import { useContextCarrito } from '@/app/Provider/Provider'

export default function CarritoPage() {
    const { productoCarrito, totalPagar, setTotalPagar } = useContextCarrito();

    useEffect(() => {
        let total = productoCarrito.reduce((acc, item) => {
            let isv = item.precioProducto * (item.isvProducto / 100);
            return acc + (item.precioProducto + isv);
        }, 0);
        setTotalPagar(total);
    }, [productoCarrito]);

    function pagar() {
        alert(`El total a pagar es: L. ${totalPagar.toFixed(2)}`);
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Carrito de Compras</h2>
            <div className="row">
                {productoCarrito.map((item) => (
                    <div className="col-md-4 mb-3" key={item.IdProducto}>
                        <div className="card">
                            <img src={item.imagenProducto} className="card-img-top" alt={item.nombreProducto} style={{ height: '150px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombreProducto}</h5>
                                <p><strong>Precio:</strong> L. {item.precioProducto.toFixed(2)}</p>
                                <p><strong>ISV ({item.isvProducto}%):</strong> L. {(item.precioProducto * (item.isvProducto / 100)).toFixed(2)}</p>
                                <p><strong>Subtotal:</strong> L. {(item.precioProducto + (item.precioProducto * (item.isvProducto / 100))).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="alert alert-info text-center mt-3">
                <h4>Total a Pagar: L. {totalPagar.toFixed(2)}</h4>
            </div>

            <div className="text-center mt-3">
                <button className="btn btn-warning btn-lg" onClick={pagar}>Pagar</button>
            </div>
        </div>
    )
}
