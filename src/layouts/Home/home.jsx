import HeaderHome from "../Header/header";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
function LayoutHome({children}) {
    return (
        <>
        <HeaderHome/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}
export default LayoutHome;