import { useState } from "react";
import styled from "styled-components";

import Cart from "./Cart";

import logoImage from '../assets/logo.svg';
import profileIcon from '../assets/profile.png';
import cartIcon from '../assets/icons/cart.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';



const Nav = ({
    itemsInCart,
    itemAdded,
    removeItemFromCart,
}) => {

    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    const calculateTotal = () => {
        return itemsInCart * 125;
    }

    return (
        <Container>
            <NavSection>
                <Menu src={menu} alt="menu icon" onClick={() => toggleNav()} />
                <Logo src={logoImage} alt="logo image" />
                
                <NavLinks $show={showNav}>
                    <Close src={close} alt="close menu icon" onClick={() => toggleNav()} />
                    <Link>Collections</Link>
                    <Link>Men</Link>
                    <Link>Women</Link>
                    <Link>Cantact</Link>
                    <Link>About</Link>
                </NavLinks>
            </NavSection>

            <NavSection>
                <CartIcon src={cartIcon} alt="cart icon" onClick={() => toggleCart()} />
                {
                    showCart &&
                    <Cart 
                        total={calculateTotal}
                        itemsInCart={itemsInCart}
                        itemAdded={itemAdded}
                        removeItemFromCart={removeItemFromCart}
                    />
                }
                <Profile src={profileIcon} alt="profile picture" />
            </NavSection>
        </Container>
    );
}

export default Nav;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme.secondary};
    position: relative;
    margin-bottom: 5.5rem;
`;

const NavSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Menu = styled.img`
    width: 1.25rem;
    display: none;

    @media (max-width: 950px) {
        display: inline-block;
        margin-right: 1.5rem;
        cursor: pointer;
    }
`;

const Logo = styled.img`
    height: 1.25rem;
    margin-right: 1.5rem;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 950px) {
        position: absolute;
        height: 100vh;
        width: 66%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        z-index: 2;
        top: 0;
        left: -100%;
        padding: 2rem;
        background-color: ${props => props.theme.background};
        transition: all .4s ease;

        ${props => props.$show && `
            transition: all .4s ease;
            left: 0; 
        `};
    }
`;

const Close = styled.img`
    display: none;

    @media (max-width: 950px) {
        display: inline-block;
        margin-bottom: 3rem;
        width: 1.2rem;
        cursor: pointer;
    }

    @media (max-width: 675px) {
        width: .9rem;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.text};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    cursor: pointer;
    margin: 2rem;

    @media (max-width: 1250px) {
        margin: 1rem;
    }

    @media (max-width: 950px) {
        margin: 1.25rem 0;
        font-size: 1.125rem;
        font-weight: 700;
    }
`;

const CartIcon = styled.img`
    height: 1.5rem;
    cursor: pointer;

    @media (max-width: 950px) {
        height: 1.25rem;
    }
`;

const Profile = styled.img`
    width: 3.125rem;
    margin-left: 2rem;
    cursor: pointer;

    @media (max-width: 950px) {
        width: 2.3rem;
        height: 2.3rem;
    }

    @media (max-width: 675px) {
        width: 1.5rem;
        height: 1.5rem;
    }
`;