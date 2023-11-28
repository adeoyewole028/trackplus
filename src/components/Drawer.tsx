import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Bars3Icon } from "@heroicons/react/24/outline";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const navigate = useNavigate();
  const setActiveItem = (itemName: string) => {
    setActivePrimaryNav(itemName);
  };
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
  const [activePrimaryNav, setActivePrimaryNav] = React.useState(() => {
    // Retrieve the active primary navigation from localStorage on component mount
    return localStorage.getItem("activePrimaryNav") || "Business Information";
  });
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingY: 5,
          alignItems: "center",
          flexDirection: "column",
        }}
        className="flex flex-shrink-0 items-center px-4 justify-center mb-5"
      >
        <img
          className="h-8 w-auto rounded-none"
          src="/img/logo.svg"
          alt="Track Plus"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "white",
        }}
      >
        {[
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
        ].map((item) => (
          <div key={item.name}>
            <Box
              sx={{
                border: 1,
                paddingX: 1,
                paddingY: 1,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: 2,
                fontWeight: "bold",
                backgroundColor:
                  activePrimaryNav === item.name ? "#AD1582" : "white",
                color:
                  activePrimaryNav === item.name
                    ? "white"
                    : theme.palette.text.primary,
                "&:hover": {
                  borderColor: "pink",
                  backgroundColor:
                    activePrimaryNav === item.name
                      ? "pink"
                      : theme.palette.action.hover,
                },
              }}
              component={"span"}
              id={item.ref}
              data-primary-nav-name={item.name}
              onClick={toggleSecondaryNavigation}
              className={classNames(
                activePrimaryNav === item.name
                  ? "bg-[#AD1582] border-transparent text-gray-100"
                  : "text-[#000000] hover-bg-gray-50 hover-text-gray-900 bg-white border-[#AD1582] !border-2",
                "group flex items-center text-sm font-medium rounded-md cursor-pointer  border-l-4  hover:border-pink-300"
              )}
            >
              <span className="w-5 mr-3">
                {activePrimaryNav === item.name ? (
                  <Box
                    sx={{
                      border: 2,
                      borderColor: "#AD1582",
                      borderRadius: 99999,
                      borderStyle: "solid",
                      height: 20,
                      width: 20,
                      marginRight: 1,
                      bgcolor: "white",
                    }}
                    className="rounded-full border !bg-white  h-5 w-5 "
                  ></Box>
                ) : (
                  <Box
                    sx={{
                      border: 2,
                      borderColor: "#AD1582",
                      borderRadius: 99999,
                      borderStyle: "solid",
                      height: 20,
                      width: 20,
                      marginRight: 1,
                    }}
                    component={"div"}
                    className=" group-hover-text-gray-500 rounded-full border-2 border-[#AD1582] h-5 w-5 bg-white"
                  ></Box>
                )}
              </span>
              {item.name}
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          {" "}
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
