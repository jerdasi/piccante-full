import React from 'react'

const About = () => {
    return (
        <section class="about-section layout-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mt-5 mb-5">
                        <div class="img-box">
                            <img src={"img/cheff-about.png"} alt="" />
                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <div class="detail-box">
                            <div class="heading-container">
                                <h2>
                                    We Are Feane
                                </h2>
                            </div>
                            <p>
                                Piccante adalah restoran cepat saji yang memiliki khas dari Italia. Piccante didirikan
                                pada 01 Desember 2021. Piccante
                                sendiri memiliki arti dalam bahasa Italia "Lezat" dimana akan memberikan pelayanan
                                makanan yang tentunya sesuai dengan arti
                                nama tersebut.
                            </p>
                            <a href="">
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About