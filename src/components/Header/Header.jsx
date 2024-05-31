import wealthsimpleLogo from "../../assets/logo/WealthsimpleLogo.svg"
import "./Header.scss"
function Header(){
  return(
    <header className="header">
      <img 
        className="header__logo"
        src={wealthsimpleLogo}
        alt="Wealthsimple Logo" />

    </header>
    )
}

export default Header;