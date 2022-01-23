import React from 'react'

const TableCRUD = () => {
    return (
        <div className="col-md-12" style={{ marginTop: "1em" }}> 
            <div className="container">
            <h5 style={{ color: "#580e0dff" }}> <i className="bi bi-cart mt-2 ml-3 mr-2"></i> Keranjang </h5>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title ml-1 text-info">List Keranjang</h3>
                                </div>
                                <div className="box-body">
                                    <div className="table-responsive">
                                        <table className="table table-borderless no-margin">
                                            <thead>
                                                <tr style={{ color: "#003048fa" }}>
                                                    <th>ID</th>
                                                    <th>Jenis Makanan</th>
                                                    <th>Nama Makanan</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>



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