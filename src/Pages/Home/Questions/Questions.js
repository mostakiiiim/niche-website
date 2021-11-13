import React from 'react';


const Questions = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="faq">
                        <h1 className="text-center fw-bold my-5 py-5">Frequently Asked <span className="text-info">
                            Questions</span>
                        </h1>
                        <div className="row py-5">
                            <div className="col-md-6">
                                <img className="img-fluid" src="https://i.ibb.co/8d20DR0/sun-glasses-wood-1339-124.jpg" alt="" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <div className="accordion " id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item mb-3  ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button fw-bold text-dark bg-transparent "
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne ">
                                                    Do darker lenses offer an increased level of UV protection?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne"
                                                className="accordion-collapse collapse show"
                                                labelled="panelsStayOpen-headingOne">
                                                <div className="accordion-body  text-muted">
                                                    No, they don’t. But unfortunately, about 42% of Americans believe that they do. In reality, dark lenses that lack full-spectrum UV protection can be more harmful than wearing no sunglasses at all.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3 ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                    But for kids, those cheap glasses at the discount store are fine, right?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingTwo">
                                                <div className="accordion-body  text-muted">
                                                    Absolutely not. The reason: children and teens are outside in the sun much more than adults, to the point where your kids are exposed to up to three times more UV rays each year than adults! And when you consider that UV damage is both cumulative and irreversible, it’s essential to wear the highest-quality UV eyewear sun protection at every age.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                    Should I wear sunglasses only in the summer, or all year long?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingThree">
                                                <div className="accordion-body  text-muted">
                                                    All year long– and even on cloudy days. Just as you can get sunburned on a cloudy day, UV rays are present in our atmosphere 12 months per year.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseFour">
                                                    What exactly is polarization?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingFour">
                                                <div className="accordion-body  text-muted">
                                                    Polarization is an effective solution to neutralizing glare. Polarization is a type of coating on lenses that blocks horizontal light rays so they don’t enter the eye
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </div>
    );
};

export default Questions;