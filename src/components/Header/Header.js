import './style.css'
import React from 'react';
import logo from '../../assets/shop_logo.jpg'
import { useDispatch, useSelector } from "react-redux";


function Header() {

    const productsInCart = useSelector((state) => state.cart.products)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const totalAmountInCart = () => {
        if (productsInCart.length > 0) {
        return productsInCart.reduce((prev, curr ) => {
            return prev + curr.amountInCart
        }, 0) }
        return 0;
    }

    return (
        <header className="store-banner">
            <div className='banner-logo'><img width='100' src={logo} alt="Shopping_Cart_Logo" /></div>
            <div className="banner-title"><span>Get a T-Shirt!</span></div>
            <div className='right'>
                <div className="banner-car-status">{totalAmountInCart()}</div>
                <div className='total-amount-container'>{totalPrice}.00 CHF</div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </header>

    )
}

export default Header;








