import Header from "./components/header";
import Guitar from "./components/Guitar";
import { database } from "./database";
import { useState, useEffect } from "react";


function App() {

    const initialCart = () =>{
        const cartFromLocalStorage = localStorage.getItem('cart');
        return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
    }

    const [data] = useState(database)
    const [cart, setCart] = useState(initialCart)
    const MAX__QUANTITY = 5;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {

        const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

        if (itemExists >= 0) {
            if(cart[itemExists].quantity >= MAX__QUANTITY) return;
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

        if (itemExists >= 0 && cart[itemExists].quantity < MAX__QUANTITY) {
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

    function clearCart(){
        setCart([]);
    }

    return (
        <>
        <Header 
        cart ={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
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
