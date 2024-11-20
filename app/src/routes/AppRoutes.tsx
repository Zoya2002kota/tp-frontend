import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { RootLayout } from '../pages/RootLayout/RootLayout'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout/>}> {/* тут лежат странички с хедером и футером*/}
                <Route index element={<LandingPage/>}/>
                {/* <Route path="design" element={<DesignPage/>}/> */}
            </Route>
        </Routes>
    )
}