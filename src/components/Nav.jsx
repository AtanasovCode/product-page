import styled from "styled-components";

import logoImage from '../assets/logo.svg';
import profileIcon from '../assets/profile.png';
import cartIcon from '../assets/icons/cart.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';



const Nav = () => {
    return (
        <Container>
            <NavSection>
                <Menu src={menu} />
                <Logo src={logoImage} alt="logo image" />
                
                <NavLinks>
                    <Link>Collections</Link>
                    <Link>Men</Link>
                    <Link>Women</Link>
                    <Link>Cantact</Link>
                    <Link>About</Link>
                </NavLinks>
            </NavSection>

            <NavSection>
                <CartIcon src={cartIcon} alt="cart icon" />
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