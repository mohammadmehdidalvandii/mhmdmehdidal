import './SampleDe.css'
import Title from '../../Module/Title/Title'

function SampleDe() {
  return (
    <section className="sampleDe">
        <div className="row">
            <div className="col-12">
                <div className="sampleDe_info">
                    <img src="/assets/images/pro.jpg" alt="" className="sampleDe_info_img" />
                    <ul className="sampleDe_info_items">
                        <li className="sampleDe_info_item">
                            <Title title='توضیحات' text='پروژه'/>
                        </li>
                        <li className="sampleDe_info_item">
                            <span className="sampleDe_info_title">نام توسعه دهنده :</span>
                            <span className="sampleDe_info_text">محمدمهدی دالوندی</span>
                        </li>
                        <li className="sampleDe_info_item">
                            <span className="sampleDe_info_title">تاریخ شروع :</span>
                            <span className="sampleDe_info_text">۱۴۰۲/۵/۲۸ </span>
                        </li>
                        <li className="sampleDe_info_item">
                            <span className="sampleDe_info_title">لینک پروژ :</span>
                            <span className="sampleDe_info_text">www.mySite.com</span>
                        </li>
                        <li className="sampleDe_info_item">
                            <span className="sampleDe_info_title">توضیحات تکمیلی :</span>
                            <p className="sampleDe_info_desc">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SampleDe