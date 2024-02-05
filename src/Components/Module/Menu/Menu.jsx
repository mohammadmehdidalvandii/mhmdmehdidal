import { NavLink, useLocation } from 'react-router-dom';
import './Menu.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from 'react';


function Menu() {
    const [showMenu , setShowMenu] =useState(false)
    const [activeMenu , setActiveMenu] = useState('/')

    const location =useLocation()

    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
        setShowMenu(false)
    },[location])

    const handlerMenu = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <section className="menu">
        <div className="menu_wrapper">
        <div className="row">
            <div className="col-12">
                {
                    showMenu ?(
                        <span className="menu_btn" onClick={handlerMenu}>
                        <FaTimes/>
                     </span>
                    ):(
                        <span className="menu_btn" onClick={handlerMenu}>
                        <FaBars/>
                     </span>
                    )
                }
                           
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                {showMenu &&(
                      <ul className="menu_items">
                      <li className="menu_item">
                          <NavLink to='/ ' className='menu_item_link'>
                              <img src="/assets/images/mhd.png" alt="" className="menu_item_img" />
                          </NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/'  className={`menu_item_link ${activeMenu === '/' ? "menu_item_linkActive":""}`}>درباره من</NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/Resume'  className={`menu_item_link ${activeMenu === '/Resume' ? "menu_item_linkActive":""}`}>رزومه من</NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/Services'  className={`menu_item_link ${activeMenu === '/Services' ? "menu_item_linkActive":""}`}>خدمات</NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/SampleWork'  className={`menu_item_link ${activeMenu === '/SampleWork' ? "menu_item_linkActive":""}`}>نمونه کارها</NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/Article'  className={`menu_item_link ${activeMenu === '/Article' ? "menu_item_linkActive":""}`}>وبلاگ</NavLink>
                      </li>
                      <li className="menu_item">
                          <NavLink to='/Contact'  className={`menu_item_link ${activeMenu === '/Contact' ? "menu_item_linkActive":""}`}>تماس با ما</NavLink>
                      </li>
                  </ul>
                )}
          
            </div>
        </div>
        </div>
    </section>
  )
}

export default Menu