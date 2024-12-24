import { Routes, Route } from 'react-router-dom'
import { LandingPage, CatalogPage, RootLayout, CartPage } from '../pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout/>}> {/* тут лежат странички с хедером и футером*/}
                <Route index element={<LandingPage/>}/>
                <Route path="catalog" element={<CatalogPage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                {/* <Route path="design" element={<DesignPage/>}/> */}
            </Route>
        </Routes>
    )
}