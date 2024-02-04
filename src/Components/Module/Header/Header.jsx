import {  Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FaInstagram, FaGithub, FaTelegram   } from "react-icons/fa";

import resume from '../../../assets/resume.pdf'


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
            <a href={resume} className='header_resume button_yellow' target='_blank' download="mohammadmehdidalvadni-pdf">دانلود رزومه</a>
        </div>
    </section>
  )
}

export default Header