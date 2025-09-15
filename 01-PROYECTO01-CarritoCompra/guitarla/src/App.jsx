import Header from "./components/header";
import Guitar from "./components/Guitar";
import { database } from "./database";
import { useState } from "react";


function App() {

    const [data, setData] = useState(database)
    const [cart, setCart] = useState([])


    function addToCart(item) {

        const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

        if (itemExists >= 0) {
            const updateCart = [...cart];
            updateCart[itemExists].quantity += 1;
            setCart(updateCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    function removeFromCart(id){
        setCart(prevcart => prevcart.filter(guitar => guitar.id !== id));
    }

    function increaseQuantity(id){
        const itemExists = cart.findIndex((guitar) => guitar.id === id);

        if (itemExists >= 0) {
            const updateCart = [...cart];
            updateCart[itemExists].quantity += 1;
            setCart(updateCart);
        }
    }

    function decreaseQuantity(id){
        const itemExists = cart.findIndex((guitar) => guitar.id === id);

        if (itemExists >= 0) {
            const updateCart = [...cart];
            updateCart[itemExists].quantity -= 1;

            if (updateCart[itemExists].quantity === 0) {
                updateCart.splice(itemExists, 1);
            }

            setCart(updateCart);
        }
    }

    return (
        <>
        <Header 
        cart ={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        />
        

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar)=>(
                    <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    setCart={setCart}
                    addToCart={addToCart}
                    />
                )
                )}
                
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>

        </>
    )
}

export default App
