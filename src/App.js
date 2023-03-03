import { GlobalReset } from "./pages/CommonStyle"
import Footer from "./pages/Footer"
import TopBanner from "./pages/TopBanner"
import Header from "./pages/Header"
import MainVisual from "./pages/MainVisual"
import MainContent from "./pages/MainContent"
import MainTab from "./pages/MainTab"
import Main from "./pages/Main"
import { Outlet, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <>
            <TopBanner />
            <GlobalReset />
            <Header />
            <Routes>
                <Route path="/*" element={
                    <Main>
                        <MainVisual />
                        <MainContent />
                        <MainTab />
                    </Main>
                }>
                </Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App