import Title from '../../../Module/Title/Title'
import './HomeAbout.css'

function HomeAbout() {
  return (
    <section className="homeAbout">
        <div className="row">
            <div className="col-12">
                <Title title='درباره ' text='من'/>
            </div>
            <div className="col-12">
                <p className="homeAbout_desc">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <Title title='اطلاعات' text='پایه'/>
            </div>
            <div className="col-12">
                <div className="homeAbout_wrapper">
                    <ul className="homeAbout_items">
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">تاریخ تولد: </span>
                            <span className="homeAbout_item_text">1379/08/22</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">شماره تماس: </span>
                            <span className="homeAbout_item_text">09390944025</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">محل سکونت:</span>
                            <span className="homeAbout_item_text">لرستان,بروجرد</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">ایمیل:</span>
                            <span className="homeAbout_item_text">mhmdmehdidalvadni@gmail.com</span>
                        </li>
                    </ul>
                    <ul className="about_items">
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">مدرک تحصیلی:</span>
                            <span className="homeAbout_item_text">-</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">وضعیت تاهل:</span>
                            <span className="homeAbout_item_text">مجرد</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">وب سایت:</span>
                            <span className="homeAbout_item_text">www.mhmdmehdidal.com</span>
                        </li>
                        <li className="homeAbout_item">
                            <span className="homeAbout_item_title">وضعیت:</span>
                            <span className="homeAbout_item_text">اماده</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeAbout