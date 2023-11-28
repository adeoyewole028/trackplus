import React from "react";
import VerificationInput from "react-verification-input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CountrySelect from "../../components/select/SelectInput";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EmailVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [count, setCount] = useState(0);
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(code);
    navigate("/registration");
  };

  const resendCode = () => {
    setCount(180);
  };

  const tick = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  useEffect(() => {
    setCount(180);
  }, []);

  useEffect(() => {
    // Start the timer only if count is greater than 0
    if (count > 0) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  }, [count]);

  return (
    <>
      <Box
        component="main"
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage:
            "linear-gradient(to right, #F97226 23.92%, #4242423D 150%), url(/img/image2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center items-center"
      >
        <div className="flex justify-center w-full items-center">
          <div>
            <Grid container columns={16}>
              <Grid item xs={8}>
                <div className="max-w-md mt-36">
                  {" "}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="max-w-xs bg-white pt-5 rounded-lg pb-60 mt-20 ">
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
                        color: "#AD1582",
                        fontWeight: "bold",
                      }}
                    >
                      Verification Code
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#A1A1A1",
                      }}
                    >
                      We have sent the code verification to your email your
                      email****@mail
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 1 }}
                    >
                      <VerificationInput
                        length={4}
                        placeholder="0"
                        onChange={handleChange}
                        validChars="0-9"
                        autoFocus
                        classNames={{
                          container: "container",
                          character: "character",
                          characterInactive: "character--inactive",
                          characterSelected: "character--selected",
                        }}
                      />
                      <div className="flex justify-center mt-10">
                        {formattedMinutes}:{formattedSeconds}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 5,
                            mb: 2,
                            bgcolor: "#E5702E",
                            "&:hover": {
                              bgcolor: "#FC6800",
                            },
                            padding: "6px",
                            textTransform: "capitalize",
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                      <Box
                        sx={{
                          textAlign: "center",
                          mb: 2,
                        }}
                      >
                        <span>Didn’t receive the code? </span>

                        <Link
                          href="#"
                          variant="body2"
                          className="text-black"
                          onClick={resendCode}
                        >
                          {"Resend"}
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </>
  );
}
