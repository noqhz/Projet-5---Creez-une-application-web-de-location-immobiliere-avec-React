import logo from '../assets/logo_kasa_footer.png'
 
function Footer() {
    return (
        <footer>
            
                <img src={logo} alt="logo Kasa" className="footer__logo" />
                <span>© 2020 Kasa. All rights reserved</span>
            
        </footer>
    )
}

export default Footer