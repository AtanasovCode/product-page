import styled from "styled-components";

import logoImage from '../assets/logo.svg';
import profileIcon from '../assets/profile.png';
import cartIcon from '../assets/icons/cart.svg';


const Nav = () => {
    return (
        <Container>
            <NavSection>
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

const Logo = styled.img`
    height: 1.25rem;
    margin-right: 1.5rem;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

const CartIcon = styled.img`
    width: 1.6rem;
`;

const Profile = styled.img`
    width: 3.125rem;
    margin-left: 3rem;
`;