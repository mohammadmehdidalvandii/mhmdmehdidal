import Title from '../../Module/Title/Title'
import './ResumeAbout.css'

function ResumeAbout() {
  return (
    <section className='resumeAbout'>
        <div className="row">
            <div className="col-12">
                <Title title="سوابق"  text="یادگیری"/>
            </div>
            <div className="col-12">
                <div className="resumeAbout_content">
                    <h5 className="resumeAbout_content_title">سبزلرن</h5>
                    <p className="resumeAbout_content_desc">سبزلرن جای است که صفر تا صد برنامه نویسی از اموزش های خوبشون فرا گرفتم.</p>
                    <ul className="resumeAbout_items">
                        <li className="resumeAbout_item">جاوااسکریپت (Javascript)</li>
                        <li className="resumeAbout_item">ری اکت (React)</li>
                        <li className="resumeAbout_item">ریداکس (Redux)</li>
                        <li className="resumeAbout_item">نکست (Next)</li>
                        <li className="resumeAbout_item">بوت استرپ (Bootstrap)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <Title title='مهارت های' text='برنامه نویسی'/>
            </div>
            <div className="col-12">
             <div className="resumeAbout_percent">
                <ul className="resumeAbout_percent_items">
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">HTML - CSS</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">جاوااسکریپت</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">ری اکت</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">ریداکس</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">نکست</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                    <li className="resumeAbout_percent_item">
                        <span className="resumeAbout_percent_text">بوت استرپ</span>
                        <span className="resumeAbout_percent_process"></span>
                    </li>
                </ul>
             </div>
            </div>
        </div>
    </section>
  )
}

export default ResumeAbout