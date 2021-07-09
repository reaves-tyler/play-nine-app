import useSwr from "swr";
import Link from "next/link";
import { Box, Button, Container, Input } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { useState } from "react";
import axios from "axios";

export default function Users() {
  //   const { data, error } = useSwr("/api/game/new", fetcher);

  //   if (error) return <div>Failed to load users</div>;
  //   if (!data) return <div>Loading...</div>;

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
