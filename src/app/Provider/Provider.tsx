import { createContext, useContext, useState } from "react";
import { Producto } from "@/app/Modelos/Producto";

const CarritoContext = createContext<any>(null);

export function CarritoProvider({ children }: { children: React.ReactNode }) {
    const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);
    const [totalPagar, setTotalPagar] = useState(0);

    function agregarCarrito(producto: Producto) {
        setProductoCarrito([...productoCarrito, producto]);
    }

    return (
        <CarritoContext.Provider value={{ productoCarrito, totalPagar, setTotalPagar, agregarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useContextCarrito() {
    return useContext(CarritoContext);
}
