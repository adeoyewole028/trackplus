import React from "react";
import VerificationInput from "react-verification-input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
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
            "linear-gradient(to right, #AD1582 23.92%, #4242423D 150%), url(/img/image2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center items-center"
      >
        <div>
          <div>
            <Box>
              <Box className="bg-[#FC6800] p-5 text-center text-white">
                <Typography>Registration</Typography>
              </Box>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: "0rem",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Grid container columns={16}>
                  <Grid item xs>
                    <div className="max-w-xs">
                      <Stack
                        direction={{ sm: "column" }}
                        alignContent={{ xs: "center" }}
                        alignItems={{ xs: "center" }}
                        spacing={3}
                        sx={{
                          mt: 2,
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <img src="/img/organization.svg" alt="organization" />
                          <Typography className="italic">
                            Organization
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{}}>
                            2-10% off shipping when you onboard your
                            organization on this platform.
                          </Typography>
                        </Box>
                        <div className="max-w-[10em] w-full">
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{
                              mb: 2,
                              bgcolor: "#FC6800",
                              "&:hover": {
                                bgcolor: "#FFA057",
                              },
                              padding: "6px",
                            }}
                            onClick={() => navigate("/business-Information")}
                          >
                            Continue
                          </Button>
                        </div>
                      </Stack>
                    </div>
                  </Grid>
                  <Divider orientation="vertical" flexItem>
                    OR
                  </Divider>
                  <Grid item xs>
                    <div className="max-w-xs">
                      <Stack
                        direction={{ sm: "column" }}
                        alignContent={{ xs: "center" }}
                        alignItems={{ xs: "center" }}
                        spacing={4}
                        sx={{
                          mt: 2,
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <img src="/img/individual.svg" alt="individual" />
                          <Typography className="italic">Individual</Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit,
                          </Typography>
                        </Box>
                        <div className="max-w-[10em] w-full">
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{
                              mb: 2,
                              bgcolor: "#FC6800",
                              "&:hover": {
                                bgcolor: "#FFA057",
                              },
                              padding: "6px",
                            }}
                            onClick={() => navigate("/business-Information")}
                          >
                            Continue
                          </Button>
                        </div>
                      </Stack>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}
