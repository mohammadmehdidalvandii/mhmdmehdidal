import './ContactMe.css'
import Title from '../../Module/Title/Title'


function ContactMe() {
  return (
   <section className="contactMe">
    <div className="row">
        <div className="col-12">
            <Title title='تماس' text='با من'/>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col-12">
            <div className="contactForm">
                <input type="text" className="contactForm_input" placeholder='نام و نام خانوادگی' />
                <input type="text" className="contactForm_input" placeholder='شماره تماس' />
                <textarea className='contactForm_text' placeholder='سلام و خسته نباشید...'></textarea>
                <button className="contactForm_btn button_yellow">ارسال پیغام</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default ContactMe