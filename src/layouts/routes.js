import {HashRouter} from 'react-route-dom'
import MainDashboard from "../components/mainDashboard/mainDashboard"

const Routes = () => {
    <HashRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" element={<MainDashboard />} />
                <Route exact path="/MainDashboard" element={<MainDashboard />} />
            </Switch>
        </MainLayout>
    </HashRouter>
}

export default Routes;