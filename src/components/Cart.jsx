import styled from "styled-components";

import product from '../assets/product/product-1-thumbnail.jpg';
import deleteIcon from '../assets/icons/delete.svg';

const Cart = () => {
    return (
        <Container>
            <Heading>
                Cart
            </Heading>

            <ProductDetails>
                <ProductSelected>
                    <Image src={product} alt="image of the product selected in cart" />

                    <Description>
                        <Name>Product details name just here</Name>
                        <Quantity>$125 x 3 = $544</Quantity>
                    </Description>

                    <Delete src={deleteIcon} alt="delete icon" />
                </ProductSelected>

                <Checkout type="button" value="Checkout" />
            </ProductDetails>
        </Container>
    );
}

export default Cart;

const Container = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
    position: absolute;
    top: 80%;
    border-radius: 11px;
`;

const Heading = styled.div`
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.secondary};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;


const ProductSelected = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const Image = styled.img`
    width: 3.125rem;
    border-radius: 4px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1.2rem;
`;

const Name = styled.div``;

const Quantity = styled.div``;

const Delete = styled.img`
    cursor: pointer;
`;

const Checkout = styled.input`
    width: 100%;
    padding: 1.13rem;
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
    border: none;
    font-weight: 700;
    border-radius: 11px;
    font-size: 1rem;
    cursor: pointer;
`;