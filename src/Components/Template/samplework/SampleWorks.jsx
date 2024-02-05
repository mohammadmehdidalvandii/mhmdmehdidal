import './SampleWorks.css'
import Title from '../../Module/Title/Title'
import SampleCard from '../../Module/SampleCard/SampleCard'


function SampleWorks() {
  return (
   <section className="sampleWorks">
    <div className="row">
        <div className="col-12">
            <Title title='نمونه' text='کار'/>
        </div>
    </div>
    <div className="row mt-4">
       <SampleCard/>
       <SampleCard/>
       <SampleCard/>
       <SampleCard/>
    </div>
   </section>
  )
}

export default SampleWorks