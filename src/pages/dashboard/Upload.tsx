import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";

function convertBytesToMB(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2);
}
function dataURItoBlob(dataURI: string) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

type UploadData = {
  labels: string[];
  files: any;
};
export default function Upload() {
  const [label, setLabel] = useState<string[]>([]);
  const [businessRegistration, setBusinessRegistration] = useState<UploadData>({
    labels: [],
    files: [],
  });

  const [proofOfAddress, setProofOfAddress] = useState<UploadData>({
    labels: [],
    files: [],
  });

  const [mediaName, setMediaName] = useState<string[]>([]);
  const [uploads, setUploads] = useState<UploadData>({
    labels: [],
    files: [],
  });
  const handleUpload = (
    files: File[],
    setUploadState: React.Dispatch<React.SetStateAction<UploadData>>
  ) => {
    console.log(files);
    const updatedFiles = [...files];

    if (updatedFiles.length > 1) {
      // User is trying to upload more than one image, show an error or replace the existing image.
      alert("You can only upload two image.");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const allowedTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "application/pdf",
        "application/xlsx",
        "application/vnd.ms-excel",
      ];

      if (file.size <= 5 * 1024 * 1024 && allowedTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          const matches = dataUrl.match(/^data:(.*?);base64,(.*)$/);
          if (matches) {
            const mimeType = matches[1];
            const base64Data = matches[2];
            const image = {
              path: file.name,
              lastModified: file.lastModified,
              lastModifiedDate: new Date(file.lastModified),
              url: dataUrl,
              size: file.size,
              type: mimeType,
              base64: base64Data,
            };
            console.log(image);
            // updatedFiles.push(image);
            // const mediaName = image.path.split("." as string)[0];
            // console.log(mediaName);
            // setMediaName((prevMedia) => [...prevMedia, mediaName]);
            // setUploads({
            //   ...uploads,
            //   files: updatedFiles,
            // });
          }
        };

        reader.readAsDataURL(file);
      } else {
        // Handle the case where the file is too large or not an allowed type
        if (file.size > 5 * 1024 * 1024) {
          alert(
            `File "${file.name}" is larger than 5MB and won't be uploaded.`
          );
        } else {
          alert(
            `File "${file.name}" has an unsupported type and won't be uploaded.`
          );
        }
      }
    }

    setUploadState((prevState) => ({
      ...prevState,
      files: updatedFiles,
    }));
  };

  const {
    acceptedFiles: businessRegistrationFiles,
    getRootProps: businessRegistrationRootProps,
    getInputProps: businessRegistrationInputProps,
  } = useDropzone();
  const {
    acceptedFiles: proofOfAddressFiles,
    getRootProps: proofOfAddressRootProps,
    getInputProps: proofOfAddressInputProps,
  } = useDropzone();

  useEffect(() => {
    if (businessRegistrationFiles.length > 0) {
      handleUpload(businessRegistrationFiles, setBusinessRegistration);
    }
  }, [businessRegistrationFiles]);

  useEffect(() => {
    if (proofOfAddressFiles.length > 0) {
      handleUpload(proofOfAddressFiles, setProofOfAddress);
    }
  }, [proofOfAddressFiles]);
  return (
    <div className="px-5 md:px-20">
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>
        Upload Document
      </Typography>
      <Box>
        <Box
          className="bg-white p-10 max-w-2xl  border-[#AD1582]"
          sx={{ border: 1 }}
        >
          <Grid component="form" container columns={12} gap={2}>
            <Grid item xs className="max-w-xs">
              <Box sx={{ mt: 1 }}>
                <div>
                  <section className="container text-center max-w-[15em]">
                    <Typography className="mb-3 text-xs">
                      Business Registration Certificate{" "}
                    </Typography>
                    <Box
                      sx={{ border: 1 }}
                      {...businessRegistrationRootProps({
                        className:
                          "dropzone w-full h-[288px] border-[#B5B5B5] border-spacing-5 border-2  cursor-pointer flex items-center justify-center bg-gray-50 rounded-xl",
                      })}
                    >
                      <input {...businessRegistrationInputProps()} />
                      <Box>
                        <Box className="max-w-[10em] flex flex-col items-center justify-center text-center">
                          <img src="/img/upload.svg" alt="organization" />
                          <Typography variant="caption">
                            Drag & Drop files here <br /> or
                          </Typography>
                          <Button>BROWSE FILES</Button>
                        </Box>
                      </Box>
                    </Box>
                  </section>
                </div>
              </Box>

              <Box>
                <Box>
                  {/* Display uploaded files for business registration */}
                  {businessRegistration.files &&
                    businessRegistration.files.map(
                      (
                        file: {
                          path:
                            | string
                            | number
                            | boolean
                            | React.ReactElement<
                                any,
                                string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | React.ReactPortal
                            | null
                            | undefined;
                          size: number;
                        },
                        index: React.Key | null | undefined
                      ) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: 2,
                            border: 1,
                            borderColor: "#E4E7EB",
                            borderRadius: "0.375rem",
                            padding: 0.6,
                            maxWidth: "15rem",
                            fontSize: "12px",
                          }}
                        >
                          <Typography variant="body2">{file.path}</Typography>
                        </Box>
                      )
                    )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs className="max-w-xs">
              <Box sx={{ mt: 1 }}>
                <div>
                  <section className="container text-center max-w-[15em]">
                    <Typography className="mb-3 text-xs">
                      Prove of address
                    </Typography>
                    <Box
                      sx={{ border: 1 }}
                      {...proofOfAddressRootProps({
                        className:
                          "dropzone w-full h-[288px] border-spacing-5 border-2 border-[#B5B5B5] cursor-pointer flex items-center justify-center bg-gray-50 rounded-xl",
                      })}
                    >
                      <input {...proofOfAddressInputProps()} />

                      <Box>
                        <Box className="max-w-[10em] flex flex-col items-center justify-center text-center">
                          <img src="/img/upload.svg" alt="organization" />
                          <Typography variant="caption">
                            Drag & Drop files here <br /> or
                          </Typography>
                          <Button>BROWSE FILES</Button>
                        </Box>
                      </Box>
                    </Box>
                  </section>
                </div>
              </Box>{" "}
              <Box>
                {/* Display uploaded files for proof of address */}
                {proofOfAddress.files &&
                  proofOfAddress.files.map(
                    (
                      file: {
                        path:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        size: number;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: 2,
                          border: 1,
                          borderColor: "#E4E7EB",
                          borderRadius: "0.375rem",
                          padding: 0.6,
                          maxWidth: "15rem",
                          fontSize: "12px",
                        }}
                      >
                        <Typography variant="body2">{file.path}</Typography>
                      </Box>
                    )
                  )}
              </Box>
            </Grid>
          </Grid>
          <Typography className="text-center mt-5 text-xs text-[#AD1582]">
            Maximum size of file to upload 3 to 5MB
          </Typography>
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
