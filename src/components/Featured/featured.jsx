import { FeaturedCard, FeaturedContainer, FeaturedProductsContainer, FeaturedImg, FeaturedInfo, FeaturedButton, FeaturedTitle } from "./featuredStyles";
import BuzoVintageImg from "../../assets/images/featured/buzo-vintage-2000s.webp"
import ParachuteCargoImg from "../../assets/images/featured/parachute-cargo.webp"
import PolleraY2kImg from "../../assets/images/featured/pollera-Y2K-jean.webp"

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
              <div className="f-info-title-container">
                <h2>Buzo Vintage 2000's</h2>
                <div className="featured-smallbar"></div>
              </div>
              <div>
                <p>Cuello redondo, Talle M (55cm) en tela microfibra.</p>
                <span>Precio: $12000</span>
              </div>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 2*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={ParachuteCargoImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <div className="f-info-title-container">
                <h2>Parachute Cargo</h2>
                <div className="featured-smallbar"></div>
              </div>
              <div>
                <p>Talle M (95cm) en tela microfibra.</p>
                <span>Precio: $15000</span>
              </div>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 3*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={PolleraY2kImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <div className="f-info-title-container">
               <h2>Pollera Y2K Jean</h2>
                <div className="featured-smallbar"></div>
              </div>
              <div>
                <p>Talle M en tela Jean.</p>
                <span>Precio: $10000</span>
              </div>
            </FeaturedInfo>
          </FeaturedCard>

        </FeaturedProductsContainer>
      </FeaturedContainer>
    );
  }