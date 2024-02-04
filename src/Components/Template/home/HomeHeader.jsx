import { NavLink } from 'react-router-dom'
import './HomeHeader.css'

function HomeHeader() {
  return (
    <section className="homeHeader">
        <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="homeHeader_content">
                    <h1 className="homeHeader_title">برنامه نویس فرانت-اند</h1>
                    <p className="homeHeader_desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله</p>
                    <NavLink to='/Contact' className='homeHeader_btn button_yellow'>تماس با ما</NavLink>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/images/mhd-1.png" alt="" className="homeHeader_img" />
            </div>
        </div>
    </section>
  )
}

export default HomeHeader