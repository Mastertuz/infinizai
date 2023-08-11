import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewsList from './Components/NewsList';
function App() {
  const [open, setOpen] = useState(false);
  let body = document.querySelector('body');
  body.classList = open ? 'overflow' : '';
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <button className="menuOpener" onClick={() => setOpen(!open)}>
              <img src="images/menuOpen.svg" alt="burger" />
            </button>
            <Header open={open}/>

            <div className="header-content__inner">
              <div className="header-content__info">
                <h4 className="header-content__subtitle subtitle">FUTURE OF eSPORTS</h4>
                <h2 className="header-content__title title">
                  Unleash the Next <span>Generation</span> of Gaming
                </h2>
                <p className="header-content__text text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi
                  pulvinar. Enim non pulvinar neque.
                </p>
                <button className="header-content__btn btn">Explore More</button>
                <button className="header-content__btn btn">View our team</button>
              </div>
              <img
                className="header-content__img"
                src="images/content/header-content.png"
                alt="header-content-img"
              />
              <div className="header-content__links">
                <a className="header-content__link" href="#">
                  FACEBOOK
                </a>
                <a className="header-content__link" href="#">
                  INSTAGRAM
                </a>
                <a className="header-content__link" href="#">
                  TWITCH
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="details">
          <div className="container">
            <div className="details__inner">
              <img
                className="details__img"
                src="images/content/details-content.png"
                alt="detailsImg"
              />
              <div className="details__info">
                <h4 className="details__info-subtitle subtitle">FUTURE OF eSPORTS</h4>
                <h2 className="details__info-title title">Customize your Own Character</h2>
                <p className="details__info-text text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae.
                </p>
                <div className="details__info-characters">
                  <div className="details__info-character active">
                    <img src="images/characters/1.png" alt="character" />
                  </div>
                  <div className="details__info-character">
                    <img src="images/characters/2.png" alt="character" />
                  </div>
                  <div className="details__info-character">
                    <img src="images/characters/3.png" alt="character" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsList/>
        <Footer/>

    
      </div>
    </>
  );
}

export default App;
