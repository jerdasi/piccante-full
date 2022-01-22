import React, { useState } from 'react'
import CardMenu from './CardMenu'
import { jenisMenu, daftarMenu } from '../data-menu'

const FoodSection = () => {
    const [jenis, setJenis] = useState({
        activeMenu: 0,
        objectMenu: jenisMenu
    })

    const [menu, setMenu] = useState(daftarMenu)

    const toggleActive = (index) => {
        setJenis({ ...jenis, activeMenu: jenis.objectMenu[index].id })

        if (index === 0) {
            setMenu([...daftarMenu])
        } else {
            const filtered = daftarMenu.filter((item) => {
                return item.jenis === jenis.objectMenu[index].jenis
            })
            setMenu([...filtered])
        }
    }

    const toggleStyle = (index) => {
        if (index === jenis.activeMenu) {
            return "active"
        } else {
            return ""
        }
    }

    return (
        <div className="container mt-5">
            <section class="food-section layout-padding-bottom">
                <div class="container">
                    <div class="heading-container heading-center pt-2">
                        <h2>
                            Menu Makanan
                        </h2>
                    </div>

                    <ul class="filters-menu">
                        {jenis.objectMenu.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <li className={toggleStyle(index)} onClick={() => { toggleActive(index) }}>{item.jenis}</li>
                                )
                            }
                            else {
                                return (
                                    <li className={toggleStyle(index)} onClick={() => { toggleActive(index) }}>{item.jenis}</li>
                                )
                            }

                        })}

                    </ul>

                    <div class="filters-content">
                        <div class="row grid">
                            {menu.map((item, index) => {
                                return (
                                    <CardMenu jenis={item.jenis} nama={item.nama} deskripsi={item.deskripsi} harga={item.harga} image={index + 1} />
                                )
                            })}
                        </div>
                    </div>

                    <div class="btn-box">
                        <a href="">
                            Selanjutnya
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FoodSection