const NewsList = () => {
    return ( 
        <section className="news">
          <div className="container">
            <div className="news__inner">
              <p className="news__subtitle subtitle">FUTURE OF eSPORTS</p>
              <h2 className="news__title title">Latest News & Articles</h2>
              <button className="news__btn btn">Read More</button>
              <div className="news__items">
                <div className="news__item news__item--big">
                  <img className="news__item-img" src="images/news/1.png" alt="newsImg" />
                  <p className="news__item-date">April 2, 2021</p>
                  <h4 className="news__item-title">
                    Esports Group teams up with the Indianapolis Colts
                  </h4>
                </div>
                <div className="news__item">
                  <img className="news__item-img" src="images/news/2.png" alt="newsImg" />
                  <p className="news__item-date">April 2, 2021</p>
                  <h4 className="news__item-title">NAVI reveals s1mple fifth anniversary</h4>
                </div>
                <div className="news__item">
                  <img className="news__item-img" src="images/news/3.png" alt="newsImg" />
                  <p className="news__item-date">April 2, 2021</p>
                  <h4 className="news__item-title">T1 unveil partnership with Razer</h4>
                </div>
                <div className="news__item">
                  <img className="news__item-img" src="images/news/4.png" alt="newsImg" />
                  <p className="news__item-date">April 2, 2021</p>
                  <h4 className="news__item-title">A1esports Shares new picture</h4>
                </div>
                <div className="news__item">
                  <img className="news__item-img" src="images/news/5.png" alt="newsImg" />
                  <p className="news__item-date">April 2, 2021</p>
                  <h4 className="news__item-title">RX secures content partnership with</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default NewsList;