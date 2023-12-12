import { BoldText, SHeroContainer, SHeroImageContainer, SHeroImg, SHeroInfoContainer, SecondHeroSection } from "./hero-2styles"
import LogoFondo from "../../assets/images/logo/logo-fondo.jpg"
import { FeaturedSection } from "../Featured/featured"

export function SecondHero() {
    return(
      <>
        <SecondHeroSection id="second-hero">

        <SHeroContainer className='second-hero-container fluid-opacity'>
  
          <SHeroImageContainer>
            <SHeroImg src={LogoFondo} alt="hero-logo"></SHeroImg>
          </SHeroImageContainer>
          
          <SHeroInfoContainer>
            <h2>Hidden Garden Indumentaria</h2>
            <p>En <BoldText>Hidden Garden</BoldText>, la moda y la artesanía se entrelazan de manera sublime, fusionando la <BoldText>belleza de la naturaleza</BoldText> con la destreza y creatividad de Mateo.
            Inspirado por los secretos de la naturaleza, Mateo confecciona su <BoldText>propia magia</BoldText> en cada diseño.</p>
          </SHeroInfoContainer>
  
  
        </SHeroContainer>
  
      </SecondHeroSection>
      
      <FeaturedSection />
    </>
    )
}