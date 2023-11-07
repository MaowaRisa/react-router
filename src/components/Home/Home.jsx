import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <h1>This is the home component</h1>
            <Outlet/>
        </div>
    );
};

export default Home;