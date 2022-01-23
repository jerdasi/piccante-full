import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const [jenis, setJenis] = useState([])
    const [menu, setMenu] = useState([])
    const [valueJenis, setValueJenis] = useState(1)
    const [valueMenu, setValueMenu] = useState(null)
    const [namaMenu, setValueNamaMenu] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [harga, setHarga] = useState(0)
    const [total, setTotal] = useState(0)
    const history = useNavigate();

    useEffect( () => {
        getAllJenis()
        getAllMenu(1)
    }, [])

    const getAllJenis = async () => {
        const response = await axios.get('http://localhost:5000/api/jenis')
        setJenis(response.data)
    }

    const getAllMenu = async (id) => {
        const response = await axios.get(`http://localhost:5000/api/menu/${id}`)
        setMenu(response.data)
        setValueNamaMenu(response.data[0].nama)
        setHarga(response.data[0].harga)
        setTotal(response.data[0].harga * quantity)
    }
    
    const changeJenisHandler = (event) => {
        setValueJenis(event.target.value)
        getAllMenu(event.target.value)
    }

    const changeMenuHandler = (event) => {
        setValueMenu(event.target.value)
        setValueNamaMenu(event.target.value)
        let obj = menu.find(item => item.nama == event.target.value)
        setHarga(obj.harga)
        setTotal(quantity * obj.harga)
    }

    const changeValueQuantity = (event) => {
        event.target.validity.valid? setQuantity(event.target.value) : setQuantity(quantity)
        setTotal(event.target.value * harga)
    }

    const createOrder = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/orders', {
            'jenisMakanan': jenis[jenis.findIndex(x => x.id == valueJenis)].namaJenis,
            'namaMakanan': namaMenu,
            'quantity': quantity,
            'total': total
        })
        history('/')
        } catch (error) {
            console.log('Gagal')
        }
        
    }

    return (
        <div className='main-body'>
            <section class="book-section layout-padding">
                <div class="container">
                    <div class="heading-container">
                        <h2>
                            Order Online
                        </h2>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="form-container">
                                <form onSubmit={createOrder}>
                                    <div>
                                        <input type="text" class="form-control" placeholder="Order ID" readOnly />
                                    </div>
                                    <div>
                                        <select class="form-control nice-select wide" value={valueJenis} onChange={changeJenisHandler}>
                                            {
                                                
                                                jenis.map( (item, index) => {
                                                    if(index == 0){
                                                        return (
                                                            <option value={item.id}>
                                                                {item.namaJenis}
                                                            </option>
                                                        )
                                                    } else {
                                                        return (
                                                            <option value={item.id}>
                                                                {item.namaJenis}
                                                            </option>
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        
                                        <select class="form-control nice-select wide" onChange={changeMenuHandler} value={valueMenu}>
                                            {
                                                menu.map( (item, index) => {

                                                    return (
                                                        <option value={item.nama}>
                                                            {item.nama}
                                                        </option>
                                                    )
                                                })
                                            
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <input type="number" min="1" pattern='[0-9]*' onInput={changeValueQuantity} id="number" value={quantity} class="form-control" onChange={changeValueQuantity}/>
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" placeholder="Total" readOnly value={total}/>
                                    </div>
                                    <div class="btn-box">
                                        <button type='submit'>
                                            Order Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src={"img/order.png"} class="img-order mt-0" width="424" height="389"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order