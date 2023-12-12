import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart, clearCart } from '../../Redux/cartSlice';
import { ProductBanner, ProductFilterBtn, ProductFilters, ProductSection, ProductsBtnLoad, ProductsContainer, StyledAddedToCartModal } from './productsStyled';
import { ProductsData } from './data/data';
import { IoIosArrowDown } from "react-icons/io";
import { TbShoppingCartUp } from "react-icons/tb";

// Componente para el modal
// Componente para el modal que utiliza el componente estilizado
const AddedToCartModal = ({ isVisible, product }) => {
  if (!isVisible || !product) return null;
  return (
    <StyledAddedToCartModal isVisible={isVisible}>
      <p>Añadiste "{product.name}" con éxito</p>
    </StyledAddedToCartModal>
  );
};

// Componente para cada producto
const Product = ({ product, onAddToCart }) => {
  const { id, name, talle, precio, tela, imagen, category } = product;
  return (
    <div className="product fluid-opacity">
      <h4>{name}</h4>
      <div className="product-img">
        <img src={imagen} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-info-mid">
          <span>Tela: {tela}</span>
          <p>Talle: {talle}</p>
        </div>
        <div className="product-info-bottom">
          <span>Precio:</span>
          <p> ${precio}</p>
        </div>
      </div>
      <div className="product-btn-container">
        <button
          onClick={() => onAddToCart(product)}
          className="btn-add">
          <TbShoppingCartUp style={{ color: 'white', fontSize: '1.5rem' }} />
        </button>
      </div>
    </div>
  );
};


export const ProductsPage = () => {
  const dispatch = useDispatch();
  //mostrar productos por categorias
  const [productsToShow, setProductsToShow] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);


  const products = ProductsData;

  const loadMoreProducts = () => {
    setProductsToShow(prev => prev + 3);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setProductsToShow(6);
  };

  const filteredProducts = products.filter(product => 
    selectedCategory === 'todos' ? true : product.category === selectedCategory
  );

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
    setAddedProduct(product);
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 3500); // Oculta el modal después de 3.5 segundos
  };

  return (
    <>
      <ProductBanner>
        <h2>Products #1 Drop</h2>
      </ProductBanner>
      <ProductSection>
        <ProductFilters>
          <ProductFilterBtn
          className={selectedCategory === 'todos' ? 'selected' : ''} 
          onClick={() => filterByCategory('todos')}>Todos</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Pantalon' ? 'selected' : ''} 
          onClick={() => filterByCategory('Pantalon')}>Pantalones</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Buzo' ? 'selected' : ''} 
          onClick={() => filterByCategory('Buzo')}>Buzos</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Pollera' ? 'selected' : ''} 
          onClick={() => filterByCategory('Pollera')}>Polleras</ProductFilterBtn>
          
        </ProductFilters>
        <ProductsContainer>
          {filteredProducts.slice(0, productsToShow).map(product => (
            <Product key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </ProductsContainer>
        {productsToShow < filteredProducts.length && (
          <ProductsBtnLoad className='btn-products-load' onClick={loadMoreProducts}>
            <IoIosArrowDown style={{ color: 'grey', fontSize: '2rem' }} />
          </ProductsBtnLoad>
        )}
      </ProductSection>
      <AddedToCartModal isVisible={isModalVisible} product={addedProduct} />
    </>
  )
}

export default ProductsPage;