import { Outlet } from "react-router-dom";

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

          <div style={{backgroundColor:"red"}}>

          </div>
        <Outlet />
      </div>
    </>
  );
};
export default Mainlayout;
