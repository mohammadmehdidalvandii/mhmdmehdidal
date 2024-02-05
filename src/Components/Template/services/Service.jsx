import "./Service.css";
import Title from "../../Module/Title/Title";

function service() {
  return (
    <section className="service">
      <div className="row">
        <div className="col-12">
          <Title title="خدمات" text="من" />
        </div>
        <div className="col-12">
          <div className="service_card">
            <img
              src="/assets/images/icon-1.png"
              alt=""
              className="service_card_img"
            />
            <div className="service_card_content">
              <h5 className="service_card_title">برنامه نویسی وب</h5>
              <p className="service_card_desc">
                برنامه نویسی وب با
                HTML-CSS-JAVASCRIPT-REACT-NEXT-REDUX-BOOTSTRAP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <Title title="برخی از" text="مشتریان" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <Title title="دیدگاه" text="مشتریان" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="commentCard">
            <h6 className="commentCard_name"> محمد آزادی</h6>
            <p className="commentCard_text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="commentCard">
            <h6 className="commentCard_name"> محمد آزادی</h6>
            <p className="commentCard_text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default service;
