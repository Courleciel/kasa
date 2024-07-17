import footer_logo from '../../assets/footer_logo.png';

function Footer() {
  return (
      <footer>
        <img src={footer_logo} alt="Logo" className="footer_logo" />
        <p>@2020 Kasa. All rights reserved</p>
      </footer>
  )
}

export default Footer
