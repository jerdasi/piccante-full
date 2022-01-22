import React from 'react'
import { orderData } from './data-order'

const TableCRUD = () => {
    return (
        <div className="col-md-9" style={{ marginTop: "1em" }}>
            <h5 style={{ color: "#003048fa" }}> <i className="bi bi-speedometer2 mt-2 ml-3 mr-2"></i> DASHBOARD </h5>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="row justify-content-end mr-1">
                            <a href="#" className="btn btn-sm btn-primary shadow font-weight-bold"> <i className="bi bi-download mr-2"></i> Cetak Laporan</a>
                        </div>
                        <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title ml-1 text-info">Riwayat Order Terakhir</h3>
                                </div>
                                <div className="box-body">
                                    <div className="table-responsive">
                                        <table className="table table-borderless no-margin">
                                            <thead>
                                                <tr style={{ color: "#003048fa" }}>
                                                    <th>Order ID</th>
                                                    <th>Jenis Makanan</th>
                                                    <th>Nama Makanan</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderData.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-decoration-none" style={{ color: "#003048fa" }}>
                                                                        {item.orderId}
                                                                    </a>
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.jenisMakanan}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.namaMakanan}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.quantity}
                                                                </td>
                                                                {item.total === "Berhasil" &&
                                                                    <td>
                                                                        <span className="label text-success font-weight-bold">
                                                                            Berhasil
                                                                        </span>
                                                                    </td>}
                                                                {item.total === "Ditunda" &&
                                                                    <td>
                                                                        <span className="label text-warning font-weight-bold">
                                                                            Ditunda
                                                                        </span>
                                                                    </td>}
                                                                {item.total === "Proses" &&
                                                                    <td>
                                                                        <span className="label text-info font-weight-bold">
                                                                            Proses
                                                                        </span>
                                                                    </td>}
                                                                {item.total === "Gagal" &&
                                                                    <td>
                                                                        <span className="label text-danger font-weight-bold">
                                                                            Gagal
                                                                        </span>
                                                                    </td>}
                                                                <td>
                                                                    <button type="button" className="btn btn-sm btn-danger"><i className="bi bi-trash-fill"></i></button>
                                                                    <button type="button" className="btn btn-sm btn-primary"><i className="bi bi-pencil-square"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableCRUD