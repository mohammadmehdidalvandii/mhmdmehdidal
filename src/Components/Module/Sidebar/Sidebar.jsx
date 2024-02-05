import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'
import { IoPerson, IoDocumentText  } from "react-icons/io5";
import { MdOutlineMiscellaneousServices, MdWorkspaces, MdArticle   } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';



function Sidebar() {
    const [activeMenu , setActiveMenu ] = useState('/')
    const location = useLocation()

    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
    },[location])
  return (
    <section className="sidebar bg_back">
        <div className="wrapper_sidebar">
            <ul className="sidebar_items">
            <li className="sidebar_item">
                    <NavLink to=''className='sidebar_item_link-img' >
                        <img src="/assets/images/mhd.png" alt="" className="sidebar_item_img" />
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/'className={`sidebar_item_link ${activeMenu === '/' ? "sidebar_item_linkActive" :""}`} >
                        <span className="sidebar_item_icon">
                            <IoPerson/>
                        </span>
                        <span className="sidebar_item_text">درباره من</span>
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/Resume'className={`sidebar_item_link ${activeMenu === '/Resume' ? "sidebar_item_linkActive " :""}`} >
                        <span className="sidebar_item_icon">
                            <IoDocumentText />
                        </span>
                        <span className="sidebar_item_text">رزومه من</span>
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/Services'className={`sidebar_item_link ${activeMenu === '/Services' ? "sidebar_item_linkActive" :""}`} >
                        <span className="sidebar_item_icon">
                            <MdOutlineMiscellaneousServices/>
                        </span>
                        <span className="sidebar_item_text">خدمات</span>
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/SampleWork'className={`sidebar_item_link ${activeMenu === '/SampleWork' ? "sidebar_item_linkActive" :""}`} >
                        <span className="sidebar_item_icon">
                            <MdWorkspaces />
                        </span>
                        <span className="sidebar_item_text">نمونه کارها</span>
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/Article'className={`sidebar_item_link ${activeMenu === '/Article' ? "sidebar_item_linkActive" :""}`} >
                        <span className="sidebar_item_icon">
                            <MdArticle />
                        </span>
                        <span className="sidebar_item_text">وبلاگ</span>
                    </NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink to='/Contact'className={`sidebar_item_link ${activeMenu === '/Contact' ? "sidebar_item_linkActive" :""}`} >
                        <span className="sidebar_item_icon">
                            <FaPhoneAlt/>
                        </span>
                        <span className="sidebar_item_text">تماس با من</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar