import { FooterBottom, FooterContainer, FooterMid, FooterTop } from "./FooterStyles"
import FooterLogoImg from "../../assets/images/logo/logo-nav.png"


export function FooterSection() {
    return(
        <>
        
        <FooterContainer className='footer-container'>

      <FooterTop>
        <img src={FooterLogoImg} alt="logo" />
        <small></small>
      </FooterTop>

      <FooterMid className='footer-mid'>

      <a href="#">
        <i className="fa-brands fa-instagram fa-2x"></i>
        </a>
      <a href="#">
        <i className="fa-brands fa-tiktok fa-2x"></i>
        </a>
      <a href="#"><i className="fa-brands fa-whatsapp fa-2x"></i> 
      </a>

      </FooterMid>

      
     

    </FooterContainer>
    <FooterBottom>
        <h3>All Rights Reserved 2023 - Hidden Garden</h3>
    </FooterBottom>
        
        </>
        
    )
}