import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class="uil uil-html5"></i></h3>
                            <span className="skills__level">HTML5</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class="uil uil-css3-simple"></i></h3>
                            <span className="skills__level">CSS3</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class='bx bxl-javascript' ></i></h3>
                            <span className="skills__level">Javascript</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class='bx bxl-tailwind-css'></i></h3>
                            <span className="skills__level">Tailwind</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class="uil uil-github"></i></h3>
                            <span className="skills__level">Git</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i class="uil uil-react"></i></h3>
                            <span className="skills__level">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend