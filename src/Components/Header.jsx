const Header = ({open}) => {
    return (  
        <div className={`header-top__inner ${open ? 'show' : ''}`}>
              <a className="logo" href="#">
                <img src="images/logo.svg" alt="logo" />
              </a>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Team
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Shop
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Pages
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header__contact-block">
                <a className="header__contact-block-link" href="#">
                  <img src="images/cart.svg" alt="cart" />
                </a>
                <button className="header__contact-block-btn">Contact Us</button>
              </div>
            </div>
    );
}
 
export default Header;