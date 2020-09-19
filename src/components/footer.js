import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Made with <span className="icon -love"><RiHeart2Line/></span> using <Link to="/">gatsbyjs.com</Link></p>
      <p>Copyright © 2020 dinovaw.my.id. All Rights Reserved</p> </div>
    </div>
  </footer>
)


export default Footer