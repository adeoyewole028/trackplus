import React, { MouseEventHandler, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

type NavigationItem = {
  name: string;
  ref?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  // current: boolean;
  // icon: any;
  activeSubmenu?: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [activePrimaryNav, setActivePrimaryNav] = useState(() => {
    // Retrieve the active primary navigation from localStorage on component mount
    return localStorage.getItem("activePrimaryNav") || "Business Information";
  });

  useEffect(() => {
    // Update localStorage when the activePrimaryNav changes
    localStorage.setItem("activePrimaryNav", activePrimaryNav);
  }, [activePrimaryNav]);

  const setActiveItem = (itemName: string) => {
    setActivePrimaryNav(itemName);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSecondaryNavigation: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.preventDefault();
    const primaryNavName = event.currentTarget.getAttribute(
      "data-primary-nav-name"
    );

    if (primaryNavName) {
      setActiveItem(primaryNavName);
      navigate(event.currentTarget.getAttribute("id") as string);
    }
  };

  const navigation: NavigationItem[] = [
    {
      name: "Business Information",
      ref: "/business-Information",
    },
    {
      name: "Upload Document",
      ref: "upload-document",
    },
    {
      name: "Review Document",
      ref: "review-document",
    },
  ];

  return (
    <div className="flex flex-col w-64 p-5">
      <CssBaseline />
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <>
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 pb-4">
            <div className="flex flex-shrink-0 items-center px-4 justify-center mb-5">
              <img
                className="h-8 w-auto rounded-none"
                src="/img/logo.svg"
                alt="Track Plus"
              />
            </div>
            <div className="mt-16 flex flex-grow flex-col">
              <nav className="flex-1 space-y-8 px-2" aria-label="Sidebar">
                <div className="space-y-4 text-white">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Box
                        sx={{ border: 1 }}
                        component={"span"}
                        id={item.ref}
                        data-primary-nav-name={item.name}
                        onClick={toggleSecondaryNavigation}
                        className={classNames(
                          activePrimaryNav === item.name
                            ? "bg-[#AD1582] border-transparent text-gray-100"
                            : "text-[#000000] hover-bg-gray-50 hover-text-gray-900 bg-white border-[#AD1582] !border-2",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer  border-l-4  hover:border-pink-300"
                        )}
                      >
                        <span className="w-5 mr-3">
                          {activePrimaryNav === item.name ? (
                            <div className="rounded-full border !bg-white  h-5 w-5 "></div>
                          ) : (
                            <Box
                              sx={{ border: 2 }}
                              component={"div"}
                              className=" group-hover-text-gray-500 rounded-full border-2 border-[#AD1582] h-5 w-5 bg-white"
                            ></Box>
                          )}
                        </span>
                        {item.name}
                      </Box>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
