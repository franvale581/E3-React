import { CartToggle, HeaderStyles, MenuToggleContainer, NavContainer, NavFeatured, NavLink, NavLogo, ToggleContainer } from "./headerStyles"
import { Cart } from "./cartStyles";

import NavLogoImg from "../../assets/images/logo/logo-nav.png"

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../Redux/cartSlice';
import { MenuContext } from '../../hooks/MenuContext/menuContext';
import React, { useContext } from 'react';


import { AiOutlineMenu } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'


export function HeaderNav() {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const { isOpen, setIsOpen } = useContext(MenuContext);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCartToggle = () => {
        dispatch(toggleCart());
    };


    return (
        <>
        <HeaderStyles className="header">

            <div className="nav-logo-container">
                <NavLogo src={NavLogoImg} alt="logo" className="nav-logo" />
            </div>

            <nav >
                <NavContainer isOpen={isOpen}>
                    <NavLink>
                        <Link to="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/products">Products</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/contact">Contact</Link>
                    </NavLink>
                </NavContainer>
            </nav>

            <ToggleContainer>
                <MenuToggleContainer onClick={handleMenuToggle}>
                    <AiOutlineMenu style={{ fontSize: '1.2em' }} />
                </MenuToggleContainer>
                <CartToggle className="cart-toggle" onClick={handleCartToggle}>
                    <GiShoppingCart style={{ fontSize: '1.4em' }} />
                </CartToggle>
            </ToggleContainer>
        </HeaderStyles>
        <Cart isOpen={isCartOpen} />
        </>

    )
}