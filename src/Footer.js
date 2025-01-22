import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <div className="footer">
      <div className="footer-text">
        <p>Copyright &copy; {currentYear} by Vivek</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
      </div>
    </div>
  )
}

export default Footer
