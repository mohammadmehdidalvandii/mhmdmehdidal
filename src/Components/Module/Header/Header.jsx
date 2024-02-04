import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FaInstagram, FaGithub, FaTelegram   } from "react-icons/fa";


function Header() {
  return (
    <section className="header bg_back">
        <div className="wrapper_header">
            <div className="header_title_textJob">
                <h1 className="header_title">محمدمهدی دالوندی</h1>
                <span className="header_textJob">برنامه نویس وب</span>
            </div>
            <div className="header_media">
                <NavLink to='' className="header_media_link">
                    <span className="header_media_icon link_icon_insta">
                        <FaInstagram/>
                    </span>
                </NavLink>
                <NavLink to='' className="header_media_link">
                    <span className="header_media_icon link_icon_git">
                        <FaGithub />
                    </span>
                </NavLink>
                <NavLink to='' className="header_media_link">
                    <span className="header_media_icon link_icon_tel">
                        <FaTelegram />
                    </span>
                </NavLink>
            </div>
            <Link src="" className='header_resume' target='_blank' download>دانلود رزومه</Link>
        </div>
    </section>
  )
}

export default Header