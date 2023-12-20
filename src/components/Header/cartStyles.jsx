import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, clearCart, addUnitToProduct, removeUnitFromProduct, closeCart, setCartItems } from '../../Redux/cartSlice';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 5.9rem;
  width: 20rem;
  height: calc(100vh - 5.9rem);
  background: transparent;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  z-index: 3;
  border-left: 2px solid var(--card-txt-gold);
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.15);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;

  .empty-cart-txt {
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .cart-summary {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    border-top: 1px solid var(--card-txt-gold);
    width: 100%;
    height: 9rem;
    color: var(--card-txt-gold);
  }

  .cart-total {
      padding-top: 10px;
      font-weight: 600;
      letter-spacing: 2px;
      font-family: 'Cinzel', sans-serif;
    } 

  .summary-btns {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    width: 100%;
    gap: 10px;
    & button {
      border: 1px solid var(--card-txt-gold);
      background: var(--bg-item);
      color: var(--card-txt-gold);
      border-radius: 10px;
      width: 9rem;
      height: 2.3rem;
      cursor: pointer;
      &:active {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 549px) {
    width: 100%;
    border-left: none;
}

`

const CartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--card-txt-gold);
  border-bottom: 1px solid var(--card-txt-gold);
`

const CartItem = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  width: 17.5rem;
  min-height: 9rem;
  gap: .5rem;
  border-radius: 15px;
  background: var(--bg-item);
  border: 1px solid var(--card-txt-gold);
  color: var(--card-txt-gold);

  .cart-item-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .cart-item-details {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .cart-item-name p {
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  .item-quantify-container {
    display: flex;
    margin-top: 3rem;
    gap: 10px;
    font-weight: 700;
  }

  .item-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & .quiantity-btn {
      display: flex;
      justify-content: center;
      align-items: center;  
      background: var(--bg-item);
      width: 1.5rem;   
      border: 1px solid var(--card-txt-gold);
      border-radius: 5px;
      height: 1.4rem;
      color: var(--card-txt-gold);
      cursor: pointer;
      font-weight: 500;
      font-size: 1.1rem;

      &:active {
        transform: scale(0.95);
      }

      &:hover {
        color: white;
        transition: all 0.3s ease;
      }
    }
  }

  .delete-btn {
    width: 5rem;
    height: 1.5rem;
    border: 1px solid var(--card-txt-gold);
    border-radius: 10px;
    background: var(--bg-item);
    color: var(--card-txt-gold);
    cursor: pointer;
    &:active {
        transform: scale(0.95);
      }
  }

  @media (max-width: 549px) {
    width: 90%;
}

`

const CartItemsContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
`
export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0fc5;
`;

export const ModalContent = styled.div`
  background-color: var(--card-hero);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid var(--card-txt-gold);
  border-radius: 30px;
  width: 30rem;
  height: 15rem;
  color: var(--card-txt-gold);
  font-size: 1.1rem;
  transition: all 0.3s ease-out;
    &:hover {
      background: var(--bg-item);
      transition: all 0.3s ease-in;
    }

    & p {
      margin-top: 2.8rem;
    }

    .modal-btn-container {
        display: flex;
        padding-top: 3rem;
        gap: 8rem;
    }

    .modal-btn-container button {
      width: 5rem;
      height: 1.5rem;
      border: 1px solid var(--card-txt-gold);
      border-radius: 10px;
      background: transparent;
      color: var(--card-txt-gold);
      cursor: pointer;
        &:active {
        transform: scale(0.95);
      }
  }

  @media (max-width: 611px) {
    font-size: 1rem;
    height: 30rem;
    width: 19rem;
    padding: 0 1rem;

    & p {
      margin-top: 6rem;
      text-align: center;
    }

    .modal-btn-container {
        gap: 3rem;
    }
}

@media (max-width: 350px) {
    font-size: .8rem;
    height: 25rem;
    width: 16rem;
    padding: 0 1rem;

    & p {
      margin-top: 6rem;
      text-align: center;
    }

    .modal-btn-container {
        gap: 2rem;
    }

    .modal-btn-container button {
      font-size: .7rem;
    }
}
`


export function Cart() {
  // Usa useSelector para obtener el estado isCartOpen del store de Redux
  const isOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false); //definimos el estado isModalOpen
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false); //definimos el estado isClearCartModalOpen (funcion para confirmar el vaciado del carrito)

    // Guardar los items del carrito en LocalStorage
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
  
    // Obtener los items del carrito de LocalStorage cuando la aplicación se carga
    useEffect(() => {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        dispatch(setCartItems(JSON.parse(savedCartItems)));
      }
    }, []);
  
  const removeFromCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  //logica para el modal al finalizar la compra
  const finalizePurchase = () => {
    setIsModalOpen(true);
    //cierra el carrito
    dispatch(closeCart());
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAcceptPurchase = () => {
    dispatch(clearCart());
    setIsModalOpen(false);
  };

  // logica para el modal para vaciar el carrito
  const handleClearCartClick = () => {
    setIsClearCartModalOpen(true);
  };

  const handleAcceptClearCart = () => {
    dispatch(clearCart());
    setIsClearCartModalOpen(false);
  };

  const handleRejectClearCart = () => {
    setIsClearCartModalOpen(false);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  //cantidades
  const addUnitToProduct = (productId) => {
    dispatch({ type: 'cart/addUnitToProduct', payload: productId });
  };

  const removeUnitFromProduct = (productId) => {
    dispatch({ type: 'cart/removeUnitFromProduct', payload: productId });
  };


  return (
    <>
      <CartContainer isOpen={isOpen}>
        <CartTitle>Tus Productos</CartTitle>
        <CartItemsContainer>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <div className="cart-item-container">
                  <div className='cart-item-details'>
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>Precio: ${item.precio}</p>
                  </div>
                  <div className='item-buttons-container'>
                    <div className='item-quantify-container'>
                      <button className='quiantity-btn' onClick={() => addUnitToProduct(item.id)}>+</button>
                      <p>{item.quantity}</p>
                      <button className='quiantity-btn' onClick={() => removeUnitFromProduct(item.id)}>-</button>
                    </div>
                    <button className='delete-btn' onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              </CartItem>
            ))
          ) : (
            <p className='empty-cart-txt'>Tu carrito está vacío</p>
          )}
        </CartItemsContainer>
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <p className='cart-total'>Total: ${getTotalPrice()}</p>
            <div className='summary-btns'>
              <button onClick={finalizePurchase}>Finalizar Compra</button>
              <button onClick={handleClearCartClick}>Vaciar Carrito</button>
            </div>
          </div>
        )}
      </CartContainer>
      {/* modal de finalizar compra */}
      <ModalContainer isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalContent>
          <p>¿Estás seguro de que quieres finalizar la compra?</p>
          <div className='modal-btn-container'>
            <button onClick={handleAcceptPurchase}>Aceptar</button>
            <button onClick={handleModalClose}>Rechazar</button>
          </div>
        </ModalContent>
      </ModalContainer>
      {/* modal de vaciar el carrito */}
      <ModalContainer isOpen={isClearCartModalOpen} onClose={handleRejectClearCart}>
        <ModalContent>
          <p>¿Estás seguro de que quieres vaciar el carrito?</p>
          <div className='modal-btn-container'>
            <button onClick={handleAcceptClearCart}>Aceptar</button>
            <button onClick={handleRejectClearCart}>Rechazar</button>
          </div>
        </ModalContent>
      </ModalContainer>

    </>
  );
}