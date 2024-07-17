import banner_img from '../../assets/banner_img.png';

function Banner() {
  return (
      <div className="banner">
        <img src={banner_img} alt="banner_img" className="banner_img" />
        <div className="overlay"></div>
        <h1>Chez vous, partout ailleurs</h1>
      </div>
  )
}

export default Banner
