import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../webApp/common/header'
import Footer from '../webApp/common/footer'

export default function DefaultLyout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
