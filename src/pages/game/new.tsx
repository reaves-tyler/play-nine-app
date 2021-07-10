import { useState } from "react";
import axios from "axios";
import { Button, Input } from "@material-ui/core";

export default function Games() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  const newGame = () => {
    axios.post("/api/game/new", { name: value });
  };

  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter the name of your game"
      />
      <Button onClick={newGame}>Play!</Button>
    </>
  );
}
