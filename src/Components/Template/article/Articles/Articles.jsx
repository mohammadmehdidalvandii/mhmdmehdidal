import './Articles.css';
import Title from '../../../Module/Title/Title'
import ArticleCard from '../../../Module/ArticleCard/ArticleCard';

function Articles() {
  return (
    <section className="articles">
        <div className="row">
            <div className="col-12">
                <Title title='مقالات' text='سایت'/>
            </div>
        </div>
        <div className="row">
           <ArticleCard/>
           <ArticleCard/>
           <ArticleCard/>
           <ArticleCard/>
        </div>
    </section>
  )
}

export default Articles