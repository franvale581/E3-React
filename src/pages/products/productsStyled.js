import styled from 'styled-components';
import BgProductsImg from '../../assets/images/background/hero-bg-2.jpg';

export const ProductSection = styled.section`
    height: 100%;
    padding: 12rem 0;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--card-hero);
    
    //clase auxiliar para los filtros seleccionados
    .selected {
        transform: scale(0.93);
        color: var(--card-txt-gold);
        border: 2px solid var(--card-txt-gold);
        box-shadow: 0 0 15px 1px var(--bg-dark);
        background: white;
        transition: all 0.2s ease-out;
     }

`
export const StyledAddedToCartModal = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isVisible',
  })`
  position: fixed;
  bottom: 1.5rem;
  left: 1rem;
  background: var(--card-hero);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px var(--card-txt-gold);
  z-index: 1000;
  color: white;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 2px;
  display: ${props => props.isVisible ? 'block' : 'none'};
  justify-content: center;
  align-items: center;
  @media (max-width: 611px) {
    font-size: 0.6rem;
}
`;


export const ProductBanner = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
    background: var(--card-hero);
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e2711d;
        font-size: 2.3rem;
        letter-spacing: 10px;
        border: 1px solid var(--card-txt-gold);
        border-left:none;
        border-right:none;
        height: 5rem;
        width: 100%;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    & h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 740px) {
    & h2 {
        font-size: 1.7rem;
    }
}
/* mobile */
@media (max-width: 576px) {
    & h2 {
        height: 3.3rem;
        font-size: 1rem;
        width: 100%;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
}
`
export const ProductFilters = styled.div`
    top: 15rem;
    position: absolute;
    height: 4rem;
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media (max-width: 510px) {
        gap: 1rem;
        padding: 0 5px;
}
@media (max-width: 380px) {
        gap: 0.2rem;
        padding: 0 5px;
}
`
export const ProductFilterBtn = styled.button`
    width: 6rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: transparent;
    border: 2px solid var(--bg-dark);
    color: var(--bg-grey);
    cursor: pointer;
    transition: all 0.3s ease-out;
     &:hover {
        color: var(--card-txt-gold);
        border: 2px solid var(--card-txt-gold);
        box-shadow: 0 0 15px 1px var(--bg-dark);
        background: white;
        transition: all 0.3s ease-in;
     }
`

export const ProductsContainer = styled.div`
    margin-top: -8rem;
    padding: 0 2rem 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

@media (max-width: 1160px) {
         grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 751px) {
         grid-template-columns: repeat(1, 1fr);
}

        .product {
            width: 20rem;
            height: 37rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Cinzel', serif;
            gap: 1rem;
            background: var(--bg-products);
            box-shadow: 1px 1px 4px 2px black;
            border-radius: 5px;
        }
        .product-img {
            display:flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 22rem;
            border-top: 3px solid var(--card-txt-gold);
            border-bottom: 2px solid var(--card-txt-gold);
            border-bottom-left-radius:  2px;
            background-image: url(${BgProductsImg});
            background-size: contain;

            }
            & img {
                width: 12.8rem;
                height: 21.3rem;
                box-shadow: 0px 0px 3px 2px var(--bg-products);
            }
        & h4 {
            padding-top: .8rem;
            font-size: 1rem;
            font-weight: 800;
            color: var(--card-txt-gold);
            letter-spacing: 2px;
        }
        
        .product-info-mid {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: .8rem;
        }
        .product-info-mid span {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-mid p {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-bottom {
            position: relative;
            bottom: -3.7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .4rem;
        }
        .product-info-bottom span {
            color: var(--card-txt-gold);
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-bottom p {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }

        .btn-add {
            position: relative;
            bottom: -.7rem;
            left: 7.4rem;
            height: 2.7rem;
            width:  2.7rem;
            border-radius: 50%;
            cursor: pointer;
            background: var(--card-txt-gold);
            &:active {
                transform: scale(0.95);
            }
        }
`

export const ProductsBtnLoad = styled.button`
    height: 3rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    background: var(--bg-dark);
    border-radius: 25px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:active {
        transform: scale(0.95);
    }
    &:hover {
        border: 1px solid var(--card-txt-gold);
        transition: all 0.2s ease-in;
    }

`