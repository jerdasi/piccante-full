import React from 'react'

const BookingTable = () => {
    return (
        <section class="book-section layout-padding">
            <div class="container mt-4">
                <div class="heading-container">
                    <h2>
                        Book Table
                    </h2>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-container">
                            <form action="">
                                <div>
                                    <input type="text" class="form-control" placeholder="Nama" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" placeholder="Nomor Hp" />
                                </div>
                                <div>
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div>
                                    <select class="form-control nice-select wide">
                                        <option value="" disabled selected>
                                            Jumlah orang?
                                        </option>
                                        <option value="">
                                            2
                                        </option>
                                        <option value="">
                                            3
                                        </option>
                                        <option value="">
                                            4
                                        </option>
                                        <option value="">
                                            5
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" class="form-control" />
                                </div>
                                <div class="btn-box">
                                    <button>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src={"img/booking.png"} class="img-booking" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingTable