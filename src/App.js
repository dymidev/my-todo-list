import {
  FormControl,
  OutlinedInput,
  Typography,
  Box,
  Button,
  ListItem,
  ListItemText,
  IconButton,
  List,
} from "@mui/material";
import { useState } from "react";
import { Delete } from "@mui/icons-material";
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
      <List>
        {list.map((l) => (
          <ListItem
            key={l}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(l)}
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemText primary={l} secondary={l} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function addtolist() {
    if (list[list.length - 1] === todo || todo === "") {
      return;
    }
    const newList = [...list, todo];
    setList(newList);
    setTodo("");
  }

  function deleteItem(item) {
    const newList = list.filter((t) => t !== item);
    setList(newList);
  }
}

export default App;
