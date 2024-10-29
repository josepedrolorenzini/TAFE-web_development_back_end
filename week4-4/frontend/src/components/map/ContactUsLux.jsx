
import LuxMarbleMap from './LuxMarbleMap';
function ContactUsLux() {
  return (
    <div className="container">
      <div id="left-column" className="col-xs-12 col-sm-3">
        <div className="contact-rich">
          <h4>Store information</h4>
          <div className="block">
            <div className="icon">
              <i className="material-icons"></i>
            </div>
            <div className="data">
              Lux Marble<br /> 146 Joynton Ave<br /> Zetland<br /> Sydney NSW 2017<br /> Australia
            </div>
          </div>
          <hr />
          <div className="block">
            <div className="icon">
              <i className="material-icons"></i>
            </div>
            <div className="data">
              Call us:<br />
              <a href="tel:02 72 500 300">02 72 500 300</a>
            </div>
          </div>
          <hr />
          <div className="block">
            <div className="icon">
              <i className="material-icons"></i>
            </div>
            <div className="data email">
              Email us:<br />
              <a href="mailto:info@luxmarble.com.au">info@luxmarble.com.au</a>
            </div>
          </div>
          <div className="block">
            <LuxMarbleMap />
          </div>
        </div>
      </div>
      <div id="content-wrapper" className="right-column col-xs-12 col-sm-8 col-md-9">
        <section id="main">
          <section id="content" className="page-content card card-block" style={{ border: 0 }}>
            <h2>
              <i className="material-icons"></i> Contact us
            </h2>
            <div className="col-md-9 col-md-offset-3" id="envelopContactform">
              <form
                action="https://luxmarble.com.au/form/contactus-g1.html"
                method="POST"
                className="form_using_ajax"
              >
                <input type="hidden" name="usingajax" value="1" />
                <input type="hidden" name="idform" value="1" />
                <input type="hidden" name="id_lang" value="1" />
                <input type="hidden" name="id_shop" value="1" />
                <input type="hidden" name="gSubmitForm" value="1" />
                <div className="gformbuilderpro_content row">
                  <div className="formbuilder_group col-md-12 col-sm-12 col-xs-12">
                    <div className="itemfield_wp row">
                      <div className="itemfield col-xs-12 col-sm-12 col-md-6" id="gformbuilderpro_1">
                        <div className="form-group input_box">
                          <label htmlFor="input_1623209332">Name</label>
                          <input
                            type="text"
                            className="form-control input_1623209332"
                            id="input_1623209332"
                            name="Name"
                          />
                        </div>
                      </div>
                      <div className="itemfield col-xs-12 col-sm-12 col-md-6" id="gformbuilderpro_11">
                        <div className="form-group input_box">
                          <label htmlFor="Lastname">Lastname</label>
                          <input
                            type="text"
                            className="form-control Lastname"
                            id="Lastname"
                            name="input_1629086260"
                          />
                        </div>
                      </div>
                      <div className="itemfield col-xs-12 col-sm-12 col-md-6" id="gformbuilderpro_84">
                        <div className="form-group input_box">
                          <label htmlFor="input_1690777898">Phone</label>
                          <input
                            type="text"
                            className="form-control input_1690777898"
                            id="input_1690777898"
                            name="Phone"
                          />
                        </div>
                      </div>
                      <div className="itemfield col-xs-12 col-sm-12 col-md-6" id="gformbuilderpro_2">
                        <div className="form-group input_box">
                          <label htmlFor="input_1623209364" className="required_label">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control input_1623209364"
                            id="input_1623209364"
                            name="Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formbuilder_group col-md-12 col-sm-12 col-xs-12">
                    <div className="itemfield_wp row">
                      <div className="itemfield col-xs-12 col-sm-12 col-md-12" id="gformbuilderpro_10">
                        <div className="form-group input_box">
                          <label htmlFor="Messagetext">Message</label>
                          <textarea
                            className="form-control Messagetext"
                            name="Message"
                            id="Messagetext"
                            rows="7"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gformbuilderpro_action">
                  <button type="submit" name="submitForm" id="submitForm" className="button btn btn-default button-medium">
                    <span>
                      Submit <i className="icon-chevron-right right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </section>
          <footer className="page-footer"></footer>
        </section>
      </div>
    </div>
  );
}

export default ContactUsLux;
