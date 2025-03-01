import logo from '../assets/logo_kasa_footer.png';
import './Footer.scss';
 
function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo Kasa blanc" />
            <span>© 2020 Kasa. All rights reserved</span> 
        </footer>
    )
}

export default Footer;
