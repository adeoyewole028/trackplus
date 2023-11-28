import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Select from "../../components/select/SelectInput";
import { useGlobalContext } from "../../context/globalContext";

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
export default function Business() {
  const { sortCountry } = useGlobalContext();
  const [form, setForm] = useState({
    businessName: "",
    businessAddress: "",
    email: "",
    country: "",
    city: "",
    businessDescription: "",
    phoneNumber: "",
    industry: "",
    state: "",
    registered: "",
  });

  const [errors, setErrors] = useState({
    businessName: "",
    businessAddress: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // reset error
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let temp = { ...errors };
    temp.businessName = form.businessName ? "" : "This field is required.";
    temp.businessAddress = form.businessAddress
      ? ""
      : "This field is required.";
    temp.phoneNumber = form.phoneNumber ? "" : "This field is required.";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(form);
    }
  };

  const handleOnAboutChange = (selectedOption: any) => {
    console.log(selectedOption);
    setForm({ ...form, country: selectedOption.label });
  };
  const handleOnPhoneChange = (selectedOption: any) => {
    console.log(selectedOption);
    setForm({ ...form, phoneNumber: selectedOption.phone });
  };
  return (
    <div className="px-20">
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Business Information
      </Typography>
      <Box>
        <Grid component="form" container columns={16} gap={5}>
          <Grid item xs={10}>
            <Box sx={{ mt: 1 }}>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="businessName">
                  <Typography variant="body2">
                    Business Name <span className="text-red-500">* </span>
                  </Typography>
                </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="businessName"
                  // label="First Name"
                  name="businessName"
                  autoComplete="textField"
                  autoFocus
                  sx={{
                    bgcolor: "#F5F5F5",
                  }}
                  onChange={handleChange}
                />
                {errors.businessName && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FF0000",
                    }}
                  >
                    {errors.businessName}
                  </Typography>
                )}
              </Box>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="businessAddress">
                  <Typography variant="body2">
                    Business Address <span className="text-red-500">* </span>
                  </Typography>
                </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="businessAddress"
                  name="businessAddress"
                  autoComplete="textField"
                  sx={{
                    bgcolor: "#F5F5F5",
                  }}
                  onChange={handleChange}
                />
                {errors.businessAddress && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FF0000",
                    }}
                  >
                    {errors.businessAddress}
                  </Typography>
                )}
              </Box>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="email">
                  <Typography variant="body2">Business Email</Typography>
                </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  sx={{
                    bgcolor: "#F5F5F5",
                  }}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="country">
                  <Typography variant="body2">Country</Typography>
                </label>
                <Select options={aboutUs} onChange={handleOnAboutChange} />
              </Box>

              <Box sx={{ mb: 2 }}>
                <label htmlFor="city">
                  <Typography variant="body2">City</Typography>
                </label>
                <Select options={aboutUs} onChange={handleOnAboutChange} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ mt: 1 }}>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="businessDescription">
                  <Typography variant="body2">
                    Description of Client’s Business
                  </Typography>
                </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="businessDescription"
                  name="businessDescription"
                  autoComplete="textField"
                  sx={{
                    bgcolor: "#F5F5F5",
                  }}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="businessDescription">
                  <Typography variant="body2">
                    Business Phone <span className="text-red-500">* </span>
                  </Typography>
                </label>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Select
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
                      sx={{
                        bgcolor: "#F5F5F5",
                      }}
                      onChange={handleChange}
                    />
                    {/* display error */}
                    {errors.phoneNumber && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FF0000",
                        }}
                      >
                        {errors.phoneNumber}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 2 }}>
                <label htmlFor="industry">
                  <Typography variant="body2">Business Industry</Typography>
                </label>
                <Select options={aboutUs} onChange={handleOnAboutChange} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <label htmlFor="state">
                  <Typography variant="body2">State</Typography>
                </label>
                <Select options={aboutUs} onChange={handleOnAboutChange} />
              </Box>
              <Box>
                <label htmlFor="registered">
                  <Typography variant="body2">
                    Is your Business Registered ?
                  </Typography>
                </label>
                <Select options={aboutUs} onChange={handleOnAboutChange} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Stack direction={"row"} maxWidth={650} gap={5} mt={5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                bgcolor: "#AD1582",
                "&:hover": {
                  bgcolor: "#AD1582",
                },
                padding: "6px",
              }}
              onClick={handleSubmit}
            >
              SAVE & CONTINUE
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
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
            >
              BACK
            </Button>
          </div>
        </Stack>
      </Box>
    </div>
  );
}
