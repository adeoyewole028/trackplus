import React from "react";
import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";
import { Divider } from "@mui/material";

export default function MainLayout() {
  return (
    <div className="m-5 flex flex-col md:flex-row bg-[#f4edf2]">
      <Sidebar />

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          width: "3px",
          bgcolor: "#AD1582",
        }}
      />
      <div className="flex-1 flex flex-col p-10">{<Outlet />}</div>
    </div>
  );
}
