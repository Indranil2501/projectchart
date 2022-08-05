import Header from "../components/Header/Header"
import MainDashboard from "../components/mainDashboard/mainDashboard"

const MainLayout = (props) {
    return {
        <div>
            <Header />
            <div className="container-fluid">
                <div id="wrapper">
                    <MainDashboard />
                </div>
            </div>
        </div>
    }
}