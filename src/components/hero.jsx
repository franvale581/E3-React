import { HeroCard, HeroLink, HeroLogo, HeroStyles } from "../assets/js/styles"

export function FirstHero() {

return (

    <HeroStyles>
      <HeroCard className='hero-card'>
          <HeroLogo className="hero-logo">Hidden Garden</HeroLogo>
          <HeroLink href="#second-hero" className="hero-link">
              <i className="fa-solid fa-arrow-down hero-arrow" style={{ color: '#fb8500' }}></i>
          </HeroLink>
      </HeroCard>

  </HeroStyles>


    )
}