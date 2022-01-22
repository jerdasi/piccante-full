import React from 'react'

const CardMenu = (props) => {
    console.log(props.jenis)
    return (
        <div className={`col-sm-6 col-lg-4 all ${props.jenis}`}>
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={`/img/f${props.image}.png`} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>{props.nama}</h5>
                        <p>{props.deskripsi}</p>
                        <div className="options">
                            <h6>{props.harga}</h6>
                            <a href=""><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMenu