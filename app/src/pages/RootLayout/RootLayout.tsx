import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"

export const RootLayout = () => {
    return (
        <>
            <Header/>
            <main className="main">
            <Outlet/>
            </main>
            <Footer/>
        </>
    )
}