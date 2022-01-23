import React from 'react'

const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer-contact">
                            <h4>
                                Hubungi Kami
                            </h4>
                            <div class="contact-link-box">
                                <a href="#">
                                    <i class="bi bi-telephone-fill"></i>
                                    (121) 1234 5678
                                </a>
                                <a href="#">
                                    <i class="bi bi-envelope-fill mr-1 ml-2"></i>
                                    support.piccante@gmail.com
                                </a>
                                <a href="#">
                                    <i class="bi bi-whatsapp mr-1 ml-2"></i>
                                    +62822-7639-4439
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <div class="footer-detail">
                            <a href="" class="footer-logo">
                                Piccante
                            </a>
                            <p class="mt-3">
                                Kunjungi media sosial kami di :
                            </p>
                            <div class="footer-social">
                                <a href="">
                                    <i class="bi bi-twitter"></i>
                                </a>
                                <a href="">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href="">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <h4>
                            Buka
                        </h4>
                        <p>
                            Senin - Sabtu
                        </p>
                        <p>
                            09.00 WIB - 22.00 WIB
                        </p>
                    </div>
                </div>
                <div class="footer-info">
                    <p>
                        &copy; All Rights Reserved By Piccante
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer