import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";

const GeneratorPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#201f1f",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            width: "400px",
            maxWidth: "100%",
            margin: "0 auto",
            p: "30px",
          }}
        >
          <Typography sx={{ ml: 3, fontWeight: 600 }}>
            Password Generator
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            <Box>
              <TextField size="small" fullWidth sx={{ width: "100%" }} />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  display: "block",
                  cursor: "pointer",
                  border: 0,
                  fontWeight: "bolder",
                  borderRadius: "5px",
                  backgroundColor: "rgba(48, 226, 12, 0.747)",
                  color: "black",
                  ":hover": {
                    backgroundColor: "black",
                    color: "rgba(48, 226, 12,1)",
                  },
                }}
              >
                Copy Text
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Password Length</Typography>
            </Box>
            <Box>
              <TextField size="small" sx={{ width: 60 }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                Include uppercase letters
              </Typography>
            </Box>
            <Box>
              <Checkbox />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                Include lowercase letters
              </Typography>
            </Box>
            <Box>
              <Checkbox />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Include numbers</Typography>
            </Box>
            <Box>
              <Checkbox />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Include symbols</Typography>
            </Box>
            <Box>
              <Checkbox />
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                p: 2,
                mt: 3,
                display: "block",
                cursor: "pointer",
                border: 0,
                fontWeight: "bolder",
                borderRadius: "5px",
                backgroundColor: "rgba(48, 226, 12, 0.747)",
                color: "black",
                ":hover": {
                  backgroundColor: "black",
                  color: "rgba(48, 226, 12,1)",
                },
              }}
            >
              Generate password
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GeneratorPage;
