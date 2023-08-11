const Footer = () => {
    return (  
        <footer className="footer">
          <div className="container">
            <div className="footer__inner">
              <div className="logo-block">
                <a className="footer__logo" href="#">
                  <img src="images/logo.svg" alt="logo" />
                </a>
                <p className="footer__text">
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed
                  turpis volutpat. Cursus sed massa non .
                </p>
              </div>
              <div className="footer__info">
                <ul className="footer__info-list">
                  <h4 className="footer__list-title">Menu Items</h4>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Shop
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
                <ul className="footer__info-list">
                  <h4 className="footer__list-title">Other Pages</h4>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Styleguide
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Changelog
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      licenses
                    </a>
                  </li>
                  <li className="footer__info-item">
                    <a className="footer__info-link" href="#">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
}
 
export default Footer;