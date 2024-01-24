import styled from "styled-components";

import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';
import cartIcon from '../assets/icons/cart.svg';


const Product = ({
    itemsInCart,
    increaseItemsInCart,
    decreaseItemsInCart,
    addItemToCart,
}) => {
    return (
        <Container>
            <CompanyName>
                sneakers company
            </CompanyName>
            <ProductName>
                Fall Limited Edition Sneakers
            </ProductName>
            <ProductDescription>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand
                everything the weather can offer.
            </ProductDescription>
            <PriceContainer>
                <CurrentPrice>
                    <Price>$125.00</Price>
                    <Discount>50%</Discount>
                </CurrentPrice>
                <OriginalPrice>
                    $250.00
                </OriginalPrice>
            </PriceContainer>
            <ButtonsContainer>
                <ProductNumber>
                    <AddIcon 
                        src={minus} 
                        alt="plus icon"
                        onClick={() => decreaseItemsInCart()}
                    />
                    <Number> {itemsInCart} </Number>
                    <AddIcon 
                        src={plus} 
                        alt="minus icon" 
                        onClick={() => increaseItemsInCart()}
                    />
                </ProductNumber>
                <CartButton onClick={() => addItemToCart()}>
                    <Cart src={cartIcon} />
                    Add to cart
                </CartButton>
            </ButtonsContainer>
        </Container>
    );
}

export default Product;

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.text};

    @media (max-width: 950px) {
        width: 60%;
        text-align: center;
    }

    @media (max-width: 675px) {
        width: 90%;
        margin-bottom: 50px;
    }
`;

const CompanyName = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    
    @media (max-width: 950px) {
        margin: 2rem 0;
        text-align: center;
        width: 100%;
    }
`;

const ProductName = styled.div`
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;

    @media (max-width: 675px) {
        width: 100%;
        font-size: 1.75rem;
        text-align: center;
    }
`;

const ProductDescription = styled.div`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    margin: 2rem 0;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2rem;

    @media (max-width: 950px) {
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
    }
`;

const CurrentPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .3rem;

    @media (max-width: 675px) {
        margin: 0;
    }
`;

const Price = styled.div`
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 2rem;

    @media (max-width: 675px) {
        margin-right: 1rem;
    }
`;

const Discount = styled.div`
    border-radius: 0.375rem;
    background: ${props => props.theme.accent};
    color: #FFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: .25rem .5rem;
`;

const OriginalPrice = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem; /* 162.5% */
    text-decoration: line-through;

    @media (max-width: 675px) {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 675px) {
        flex-direction: column;
    }
`;

const ProductNumber = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid ${props => props.theme.accent};
    border-radius: 0.625rem;
    margin-right: 1rem;

    @media (max-width: 675px) {
        width: 100%;
        flex: 100%;
        margin-bottom: 1rem;
        margin-right: 0;
    }
`;

const AddIcon = styled.img`
    cursor: pointer;
`;

const Number = styled.div`
    color: ${props => props.theme.accent};
`;

const CartButton = styled.div`
    flex: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.accent};
    border: none;
    border-radius: 0.625rem;
    color: #FFF;
    font-weight: 700;
    padding: 1rem;
    cursor: pointer;
    user-select: none;

    @media (max-width: 675px) {
        flex: 100%;
        width: 100%;
    }
`;

const Cart = styled.img`
    margin-right: 1rem;
`;