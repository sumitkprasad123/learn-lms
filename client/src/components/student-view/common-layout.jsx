import { Outlet } from "react-router-dom";

function StudentViewCommonLayout() {
  return (
    <div>
      Student view common layout
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;
