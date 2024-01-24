import styled from "styled-components";

import product from '../assets/product/product-1-thumbnail.jpg';
import deleteIcon from '../assets/icons/delete.svg';

const Cart = ({
    total,
    itemsInCart,
    itemAdded,
    removeItemFromCart,
}) => {
    return (
        <Container>
            <Heading>
                Cart
            </Heading>

            {
                itemAdded ?
                    <ProductDetails>
                        <ProductSelected>
                            <Image src={product} alt="image of the product selected in cart" />

                            <Description>
                                <Name>Fall Limited Edition Sneakers</Name>
                                <Quantity>$125 x {itemsInCart} =<Bold> ${total()}</Bold></Quantity>
                            </Description>

                            <Delete src={deleteIcon} alt="delete icon" onClick={() => removeItemFromCart()} />
                        </ProductSelected>

                        <Checkout type="button" value="Checkout" />
                    </ProductDetails>
                    :
                    <EmptyCart>
                        Your cart is empty.
                    </EmptyCart>
           }
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
    top: 75%;
    right: 1%;
    border-radius: 11px;
    border: 1px solid ${props => props.theme.secondary};
    z-index: 2;

    @media (max-width: 675px) {
        top: 120%;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Heading = styled.div`
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.secondary};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
`;

const ProductDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;


const ProductSelected = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    @media (max-width: 675px) {
        margin-bottom: 2rem;
    }
`;

const Image = styled.img`
    width: 3.125rem;
    border-radius: 4px;

    @media (max-width: 675px) {
        width: 20%;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1.2rem;
    font-size: 1.2rem;

    @media (max-width: 675px) {
        width: 100%;
        align-items: flex-start;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

const Name = styled.div``;

const Quantity = styled.div``;

const Delete = styled.img`
    cursor: pointer;

    @media (max-width: 675px) {
        width: 1.5rem;
    }
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

const EmptyCart = styled.div`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem;
    color: ${props => props.theme.text};
    padding: 2rem;
`;

const Bold = styled.span`
    font-weight: 700;
`;