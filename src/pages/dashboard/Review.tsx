import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Select from "../../components/select/SelectInput";
import { useGlobalContext } from "../../context/globalContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
export default function Review() {
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
  const handleOnAboutChange = (selectedOption: any) => {
    console.log(selectedOption);
    setForm({ ...form, aboutUs: selectedOption.label });
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
                />
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
                />
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
                    />
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

        <Box>
          <Stack direction={"row"} gap={5} ml={5}>
            <Box className="max-w-[6em] flex flex-col items-center justify-center text-center mb-5">
              <img src="/img/review.svg" alt="organization" />
              <Typography variant="caption">
                Preview of Proof document1.pdf
              </Typography>
            </Box>
            <Box>
              <Box className="max-w-[6em] flex flex-col items-center justify-center text-center">
                <img src="/img/review.svg" alt="organization" />
                <Typography variant="caption">
                  Preview of Proof document1.pdf
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Box className="mb-5">
            <Typography variant="h6">Applicant Declaration</Typography>
            <Box>
              <Typography variant="body2">
                We confirm that all information given above is true and
                complete. We have read and understood and hereby confirm with
                the terms and conditions in this form. In consideration of the
                courier services and credit account to be offered by CP Service,
                we accept all the terms and conditions as stipulated by this
                Credit Account Opening Form and shall be bound by the said terms
                and conditions. This Agreement supersedes and cancels all prior
                agreements, statements, representations, understandings,
                negotiations and discussions, whether oral or written, between
                the parties, unless new agreements are reached by parties
                afterwards. From time to time, we may use the information you
                provide to send you communications or updates about CP’s latest
                products and services, promotions and news. We understand that
                CP may provide to us the communications or updates from time to
                time in relation to CP’s latest products and services by fax,
                email or other mode of communications where CP thinks fit.
                Authorized Signature or Company Stamp
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6">
              Terms and Agreement after reviewing documents
            </Typography>
            <Typography variant="h6">Terms and Conditions of Credit</Typography>
            <Box>
              <Box>
                <ol>
                  <li>
                    CP shall examine and approve the credit account application
                    at its sole discretion upon receiving of the due original
                    copy of this Account Application Form. Once the account is
                    approved by the management of CP, CP shall inform the
                    Customer concerning the Credit Account Number, effective
                    date of the account.
                  </li>
                  <li>
                    The credit offered by CP in this Credit Account is
                    applicable to Labels charges only, i.e. the courier service
                    fees of CP courier services. Customer shall always be
                    primarily responsible for all the charges incurred thereof
                    or derived from the performance of the CP courier services
                    including but not limited to duties, taxes, charges for
                    returned Labels due to refusal by consignee of the Labels to
                    pay duties or taxes or other fees (collectively the
                    “Outstanding Charges”) and shall pay such charges to CP. on
                    demand without delay.
                  </li>
                  <li>
                    Invoices shall be issued by CP and sent to Customer on a
                    regular basis according to the respective Billing Dates of
                    CP. Quarterly Statement shall also be issued to the Customer
                    on a Quarterly basis after the end of each month. Customer
                    shall settle the outstanding balance on or before the due
                    date in the manner as prescribed by CP from time to time.
                  </li>
                  <li>
                    CP shall retain the physical pod for all delivery, customer
                    requesting for the physical pod shall be charge for each
                    copy of the physical pod. CP is obligated to ensure that all
                    invoices has its pod information
                  </li>
                  <li>
                    CP shall also be entitled to take legal action for full
                    recovery of any outstanding balance and all damages, costs
                    and/or expenses incurred thereof. CP reserves the right to
                    pass the information or particulars of the Customer to third
                    parties (include without limitation the financial
                    institutes) for follow up or recovery of any outstanding
                    balance that is due by the Customer to CP. CP reserves
                    rights and sole discretion to terminate the said credit
                    account and request customers to settle the outstanding
                    balance at any time.
                  </li>
                  <li>
                    Customers agree that CP is entitled to use, store, reveal or
                    tranfer the particulars of customers to other persons
                    (including but not limited to natural persons, shops,
                    companies, incorporations or non-incorporation institutions)
                    which CP deems fit, which shall be in compliance with the
                    applicable laws and regulations. CP reserves the rights to
                    amend these terms and conditions. Any change will be updated
                    with prior notice.
                  </li>
                </ol>
              </Box>
            </Box>
          </Box>

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I have read the Terms and Agreement"
          />
        </Box>

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
              // onClick={handleSubmit}
            >
              SUBMIT
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
              // onClick={handleSubmit}
            >
              BACK
            </Button>
          </div>
        </Stack>
      </Box>
    </div>
  );
}
