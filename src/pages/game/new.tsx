import { Box, Button, Container, Input } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { useState } from "react";
import axios from "axios";

export default function Games() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  const newGame = () => {
    axios.post("/api/game/new", { name: value });
  };

  return (
    <Container>
      <DarkModeSwitch />
      <Box padding="3">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Enter the name of your game"
        />
        <Button colorScheme="teal" width="full" onClick={newGame}>
          Play!
        </Button>
      </Box>
    </Container>
  );
}
