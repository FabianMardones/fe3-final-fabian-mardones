import dhImage from '/images/DH.png'
import facebookIcon from '/images/ico-facebook.png'
import instagramIcon from '/images/ico-instagram.png'
import tikTokIcon from '/images/ico-tiktok.png'
import whatsAppIcon from '/images/ico-whatsapp.png'

import "./Footer.css";
import { useGlobalReduceStates } from '../../utils/GlobalContextReducer'

export function Footer() {
  
  const {state, dispatch} = useGlobalReduceStates()

  return (
    <div className={`footer_container ${state.darkMode && 'dark'}`}>
    <div className={`mensaje ${state.darkMode && 'dark'}`}>
        <h3>Mensaje</h3>
    </div>
    <footer className={`footer ${state.darkMode && 'dark'}`}>
      <div className={`footer-dh ${state.darkMode && 'dark'}`}>
        <img className={`footer-hd-img ${state.darkMode && 'dark'}`} src={dhImage} alt="" />
      </div>
      <div className="icons-group">
        <img
          className={`imagen-invertida icon ${state.darkMode && 'dark'}`}
          src={facebookIcon}
          alt="ico-facebook"
        />
        <img
          className={`imagen-invertida icon ${state.darkMode && 'dark'}`}
          src={instagramIcon}
          alt="ico-instagram"
        />
        <img
          className={`imagen-invertida icon ${state.darkMode && 'dark'}`}
          src={tikTokIcon}
          alt="ico-tiktok"
        />
        <img
          className={`imagen-invertida icon ${state.darkMode && 'dark'}`}
          src={whatsAppIcon}
          alt="ico-whatsapp"
        />
      </div>
    </footer>
    </div>
  );
}
