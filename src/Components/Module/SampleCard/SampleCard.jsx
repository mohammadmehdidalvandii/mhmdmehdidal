import { NavLink } from 'react-router-dom'
import './SampleCard.css'

function SampleCard() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <NavLink to='/Sample-d' className="sampleCard">
        <img src="/assets/images/pro.jpg" alt="" className="sampleCard_img" />
        <span className="sampleCard_name">سایت فروشگاهی</span>
    </NavLink>
</div>
  )
}

export default SampleCard