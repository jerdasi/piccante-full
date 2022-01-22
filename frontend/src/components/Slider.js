import React from 'react'

const Slider = () => {
    return (
        <div class="slider-section mt-4 mb-4">
            <div class="container">
                <div class="slider-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="carouselExampleIndicators" class="carousel slide carousel-fade"
                                data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner shadow-sm rounded">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="img/testing banner 1.png"
                                            alt="Slide pertama" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/testing banner 2.png"
                                            alt="Slide kedua" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="img/testing banner 3.png"
                                            alt="Slide ketiga" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                    data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                    data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider