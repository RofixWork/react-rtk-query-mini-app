import { Outlet } from "react-router";
const MainWrapper = () => {
  return (
    <div className="container py-5">
      <Outlet />
    </div>
  );
};

export default MainWrapper;
