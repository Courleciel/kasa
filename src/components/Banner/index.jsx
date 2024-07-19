import { useLocation } from 'react-router-dom';
import bannerImg from '../../assets/banner_img.png';
import bannerFooter from '../../assets/banner_footer.png';

function Banner() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/apropos';

  return (
    <div className="banner">
      {isHomePage && (
        <>
          <img src={bannerImg} alt="banner_img" className="banner_img" />
          <div className="overlay"></div>
          <h1>Chez vous, partout ailleurs</h1>
        </>
      )}
      {isAboutPage && (
        <>
          <img src={bannerFooter} alt="banner_footer"  className="banner_img" />
        </>
      )}
    </div>
  );
}

export default Banner;
