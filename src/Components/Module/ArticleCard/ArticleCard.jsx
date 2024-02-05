import { NavLink } from 'react-router-dom'
import './ArticleCard.css'

function ArticleCard() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
                <NavLink to='/Article-d' className="articleCard">
                    <img src="/assets/images/blog.jpg" alt="blog images" className="articleCard_img" />
                    <div className="articleCard_content">
                        <h4 className="articleCard_title">سئو چیست؟</h4>
                        <p className="articleCard_desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                </NavLink>
            </div>
  )
}

export default ArticleCard