import { FeaturedCard, FeaturedContainer, FeaturedProductsContainer, FeaturedImg, FeaturedInfo, FeaturedButton, FeaturedTitle } from "./featuredStyles";
import BuzoVintageImg from "../../assets/images/featured/buzo-vintage-2000s.jpg"
import ParachuteCargoImg from "../../assets/images/featured/parachute-cargo.jpg"
import PolleraY2kImg from "../../assets/images/featured/pollera-Y2K-jean.jpg"

export function FeaturedSection() {
    return (
      <FeaturedContainer id="featured-section">

        <FeaturedTitle>
          <h2 className="fluid-opacity">Featured</h2>
        </FeaturedTitle>

        <FeaturedProductsContainer className="fluid-opacity">

        {/*product 1*/}        
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={BuzoVintageImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Buzo Vintage 2000's</h2>
              <p>Cuello redondo, talle M (55cm) en tela microfibra.</p>
              <p>Precio: $12000</p>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 2*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={ParachuteCargoImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Parachute Cargo</h2>
              <p>Talle M (95cm), tela microfibra.</p>
              <p>Precio: $15000</p>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 3*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={PolleraY2kImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Pollera Y2K Jean</h2>
              <p>Talle M, tela Jean.</p>
              <p>Precio: $10000X</p>
            </FeaturedInfo>
          </FeaturedCard>

        </FeaturedProductsContainer>
      </FeaturedContainer>
    );
  }