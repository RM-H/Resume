import {Outlet} from "react-router-dom";
import {Nav} from '../components/index.js'

const Mainlayout = () => {
    return (
        <>
            <div
                className="container "
                style={{
                    minHeight: "100vh",
                    marginRight: "auto",
                    marginLeft: "auto",


                }}
            >

                <Nav/>

                <Outlet/>
            </div>
        </>
    );
};
export default Mainlayout;
