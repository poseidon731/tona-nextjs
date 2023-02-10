import React from "react"

const Contact = () => {
    return (
        <section className="contact section-padding">
			<div className="contact-overlay"></div>

			<div className="text-center mb-50">
				<h4 className="tit tit-center">GET IN TOUCH</h4>
			</div>

			<div className="contact-item container">
				<div className="row">

					<div className="col-md-8 col-md-offset-2">
						<div className="form" id="contact-form" method="post" action="contact.php">
							<div className="messages"></div>

							<div className="controls">

								<div className="col-sm-6">
									<div className="form-group">
	                                    <input id="form_name" type="text" name="name" placeholder="Name *" required="required" data-error="Firstname is required." />
	                                    <div className="help-block with-errors"></div>
	                                </div>
								</div>

								<div className="col-sm-6">
									<div className="form-group">
	                                    <input id="form_email" type="email" name="email" placeholder="Email *" required="required" data-error="Valid email is required." />
	                                    <div className="help-block with-errors"></div>
	                                </div>
								</div>

								<div className="col-sm-12">
									<div className="form-group">
	                                    <input id="form_subject" type="text" name="subject" placeholder="Subject" />
	                                    <div className="help-block with-errors"></div>
	                                </div>
								</div>

								<div className="col-sm-12">
									<div className="form-group">
	                                    <textarea id="form_message" name="message" placeholder="Message *" rows="4" required="required" data-error="Message."></textarea>
	                                    <div className="help-block with-errors"></div>
	                                </div>
								</div>

								<div className="col-sm-12">
									<input type="submit" className="button" value="Send Message" />
								</div>
								<div className="clear-fix"></div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
    );
  };
  
  export default Contact;
  