import {
  FormControl,
  OutlinedInput,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h3">My Todo List</Typography>

      <FormControl sx={{ width: "25ch" }} noValidate>
        <OutlinedInput
          placeholder="Please enter text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <Button onClick={addtolist} variant="contained">
          Add
        </Button>
      </FormControl>
    </Box>
  );

  function addtolist() {
    if (list[list.length - 1] === todo || todo === "") {
      return;
    }
    setList([...list, todo]);
    setTodo("");
  }
}

export default App;
