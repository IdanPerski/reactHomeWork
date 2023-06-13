import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: 0, name: "Task1" },
    { id: 1, name: "Task2" },
  ]);

  return (
    <div>
      <Box>
        <Typography>To Do List</Typography>
        <TextField variant="outlined" label="newTask" />
        <Button
          variant="contained"
          onClick={(e) => {
            console.log();
          }}
        >
          +
        </Button>
      </Box>

      <Divider />

      <Paper>
        <List>
          {toDoList.map((task) => (
            <ListItem key={task.id}>{task.name} </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

// onChange={(e) => {
//           setPerson({
//             ...person,
//             fullName: { ...person.fullName, firstName: e.target.value },
//           });
//         }}
