import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "../../components/select/SelectInput";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../../context/globalContext";
import { GoogleIcon } from "../../components/icons";

const aboutUs = [
  {
    label: "Google",
    value: "google",
  },
  {
    label: "Facebook",
    value: "facebook",
  },
  {
    label: "Instagram",
    value: "instagram",
  },
];

export default function SignInSide() {
  const navigate = useNavigate();
  const { sortCountry } = useGlobalContext();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    code: "",
    aboutUs: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    code: "",
    aboutUs: "",
  });

  const validateForm = () => {
    // Basic validation checks
    const newErrors = {
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      code: "",
      aboutUs: "",
    };

    if (!form.fname) {
      newErrors.fname = "First name is required";
    }

    if (!form.lname) {
      newErrors.lname = "Last name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.aboutUs) {
      newErrors.aboutUs = "Please select how you heard about us";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const isValidEmail = (email: string) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOnAboutChange = (selectedOption: any) => {
    setForm({ ...form, aboutUs: selectedOption.label });
    setErrors({ ...errors, aboutUs: "" });
  };

  const handleOnPhoneChange = (selectedOption: any) => {
    setForm({ ...form, phoneNumber: selectedOption.phone });
    setErrors({ ...errors, phoneNumber: "" });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(form);
      navigate("/email-verification");
    }
  };
  return (
    <>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            backgroundImage:
              "linear-gradient(to right, #F97226 23.92%, #4242423D 150%), url(/img/image1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          container
          sx={{
            position: "absolute",
            top: "0",
          }}
        >
          <Grid
            item
            sx={{
              position: "absolute",
              top: "0",
              left: "30em",
              width: "30%",
              zIndex: 1,
              // margin: "60px",
              mt: 20,
              mr: 5,
              height: "calc(100% - 160px)",
            }}
          >
            <Stack
              direction={{ sm: "column" }}
              spacing={{ xs: 12 }}
              sx={{
                mt: 2,
                mx: 4,
              }}
            >
              <Box>
                <img src="/logo.svg" alt="" />
              </Box>
              <Box>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                >
                  Going to the Future...
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={1}
                  mt={3}
                  maxWidth={150}
                  alignItems={"center"}
                >
                  {" "}
                  <Box
                    sx={{
                      width: "150px",
                      height: "5px",
                      backgroundColor: "white",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "150px",
                      height: "3px",
                      backgroundColor: "#9E9E9E",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "150px",
                      height: "3px",
                      backgroundColor: "#9E9E9E",
                    }}
                  ></Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "30%",
              backgroundColor: "white",
              zIndex: 1,
              mt: 10,
              mr: 5,
            }}
          >
            <Box
              sx={{
                mt: 2,
                mx: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "#FC6800",
                  fontWeight: "bold",
                }}
              >
                Get Started
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FC6800",
                }}
              >
                CREATE YOUR ACCOUNT
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="fname"
                      label="First Name"
                      name="fname"
                      autoComplete="textField"
                      autoFocus
                      onChange={handleInputChange}
                    />{" "}
                    {errors.fname && (
                      <Typography variant="caption" color="error">
                        {errors.fname}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lname"
                      label="Last Name"
                      name="lname"
                      autoComplete="textField"
                      onChange={handleInputChange}
                    />{" "}
                    {errors.lname && (
                      <Typography variant="caption" color="error">
                        {errors.lname}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                />{" "}
                {errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email}
                  </Typography>
                )}
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Select
                      label="Phone"
                      options={sortCountry}
                      onChange={handleOnPhoneChange}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={handleInputChange}
                    />{" "}
                    {errors.phoneNumber && (
                      <Typography variant="caption" color="error">
                        {errors.phoneNumber}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleInputChange}
                    />{" "}
                    {errors.password && (
                      <Typography variant="caption" color="error">
                        {errors.password}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="current-password"
                      onChange={handleInputChange}
                    />
                    {errors.confirmPassword && (
                      <Typography variant="caption" color="error">
                        {errors.confirmPassword}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Select
                      label="How did you hear about us?"
                      options={aboutUs}
                      onChange={handleOnAboutChange}
                    />
                    {errors.aboutUs && (
                      <Typography variant="caption" color="error">
                        {errors.aboutUs}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="code"
                      label="Referral Code"
                      name="code"
                      autoComplete="code"
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{
                      mb: 2,
                      bgcolor: "#E5702E",
                      "&:hover": {
                        bgcolor: "#FFA057",
                      },
                      padding: "6px",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{
                      mb: 2,
                      bgcolor: "#EEEEEE",
                      color: "#616161",
                      "&:hover": {
                        bgcolor: "#EEEEEE",
                      },
                      padding: "6px",
                      boxShadow: "none",
                      px: "30px",
                      textTransform: "capitalize",
                    }}
                    startIcon={<GoogleIcon />}
                  >
                    Continue with Google
                  </Button>
                </div>
                <Box
                  sx={{
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  <span>Have an Account? </span>
                  <Link href="#" variant="body2" className="text-black">
                    {"SIGN IN"}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
