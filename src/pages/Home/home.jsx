import "./home.scss";
import IntroProcedure from "../../components/IntroProcedure/IntroProcedure";
import WebsiteVisitsChart from "../../components/WebsiteVisitsChart/WebsiteVisitsChart";
import ChartComponent from "../../components/Chart/chart";
function Home() {
    return(
        <div className="home_wrapper">
            <div className="home_banner">
                <img src=""></img>
            </div>
            <div className="home_body">
                 <div className="home_body_title_mobile">
                    <h4>Thủ tục tra cứu vi phạm giao thông</h4>
                </div>
                <div className="home_body_title">
                    <h2>Giới thiệu về thủ tục tra cứu vi phạm giao thông</h2>
                </div>
                <div className="home_body_introduce">
                     <IntroProcedure/>
                    <ChartComponent/>
                </div> 
            </div>
        </div>
    )
}
export default Home;