import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-nodejs' ></i></h3>
                            <span className="skills__level">NodeJS</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-python' ></i></h3>
                            <span className="skills__level">Python</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-aws' ></i></h3>
                            <span className="skills__level">AWS</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-mongodb' ></i></h3>
                            <span className="skills__level">MongoDB</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-postgresql' ></i></h3>
                            <span className="skills__level">PostgreSQL</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name"><i className='bx bxl-docker' ></i></h3>
                            <span className="skills__level">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend;