import React from "react";
import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";
import TemporaryDrawer from "../Drawer";
import { Box, Divider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function MainLayout() {
  return (
    <>
      <Box className="flex flex-col md:flex-row bg-[#f4edf2] relative">
        <CssBaseline />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            width: "3px",
            bgcolor: "#AD1582",
            position: "relative",
            top: "0",
            left: "280px",
            bottom: "0",
          }}
        />
        <Box className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <Box className="flex min-h-0 flex-1 flex-col ">
            <Box className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <Sidebar />
            </Box>
          </Box>
        </Box>

        <Box className="flex flex-1 flex-col md:pl-64">
          <Box className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden flex justify-between items-center px-5">
            <Box className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 outline-none">
              <TemporaryDrawer />
              <span className="sr-only">Open drawer</span>
            </Box>

            <img
              className="h-8 w-auto rounded-none"
              src="/img/logo.svg"
              alt="Track Plus"
            />
          </Box>
          <Box className="flex-1">
            <Box className="py-6">
              <Box className="mx-auto max-w-7xl sm:px-6 md:px-8">
                {<Outlet />}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
