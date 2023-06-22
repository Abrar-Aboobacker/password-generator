import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
const GeneratorPage = () => {
  const [password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [handleText, setHandleText] = useState("");
  const [copied, setCopied] = useState(false);
  const handleChangeUppercase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };
  const handleChangeLowercase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };
  const handleChangeNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers,
    });
  };
  const handleChangeSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  };
  const setPasswordLength = (val) => {
    setPassword({
      ...password,
      length: val,
    });
  };
  function generatePassword() {
    const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((letter) =>
      String.fromCharCode(letter)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );
    const { length, uppercase, lowercase, numbers, symbols } = password;
    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const avaiableCharacters = [
        ...(uppercase ? upperCaseLetters : []),
        ...(lowercase ? lowerCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(avaiableCharacters).slice(0, length);
      setHandleText(characters.join(""));
      return characters;
    };
    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }
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
              <TextField
                size="small"
                fullWidth
                value={handleText}
                sx={{ width: "100%", mt: 1 }}
                onChange={(e) => setHandleText(e.target.value)}
              />
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
                onClick={() => {
                  if (handleText.length > 0) {
                    navigator.clipboard.writeText(handleText);
                    setCopied(true);
                    setInterval(() => {
                      setCopied(false);
                    }, 20000);
                  }
                }}
              >
                {copied ? (
                  <AssignmentTurnedInIcon sx={{ mt: 1 }} />
                ) : (
                  <AssignmentIcon sx={{ mt: 1 }} />
                )}
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Password Length</Typography>
            </Box>
            <Box>
              <TextField
                type="number"
                size="small"
                value={password.length}
                sx={{ width: 60 }}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                Include uppercase letters
              </Typography>
            </Box>
            <Box>
              <CheckBox
                value={password.uppercase}
                onChange={handleChangeUppercase}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                Include lowercase letters
              </Typography>
            </Box>
            <Box>
              <CheckBox
                value={password.lowercase}
                onChange={handleChangeLowercase}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Include numbers</Typography>
            </Box>
            <Box>
              <CheckBox
                value={password.numbers}
                onChange={handleChangeNumbers}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Include symbols</Typography>
            </Box>
            <Box>
              <CheckBox
                value={password.symbols}
                onChange={handleChangeSymbols}
              />
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
              onClick={generatePassword}
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
