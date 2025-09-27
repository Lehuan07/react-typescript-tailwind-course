import { useState, useEffect, useMemo } from "react";
import { database } from "../database";


export function useCart (){
    
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

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.quantity * item.price, 0), [cart]);

    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}

