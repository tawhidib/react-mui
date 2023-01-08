import { Button, IconButton, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

const MuiButtons = () => {
  return (
    <>
      <Stack spacing={4} direction="column">
        <Stack spacing={1} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outline</Button>
        </Stack>

        <Stack spacing={1} direction="row">
          <Button variant="text" color="primary">
            Text primary
          </Button>
          <Button variant="text" color="secondary">
            Text secondary
          </Button>
          <Button variant="text" color="error">
            Text error
          </Button>
          <Button variant="text" color="info">
            Text Info
          </Button>
          <Button variant="text" color="success">
            Text success
          </Button>
          <Button variant="text" color="warning">
            Text warning
          </Button>
        </Stack>

        <Stack spacing={1} direction="row">
          <Button variant="contained" color="primary">
            contained primary
          </Button>
          <Button variant="contained" color="secondary">
            contained secondary
          </Button>
          <Button variant="contained" color="error">
            contained error
          </Button>
          <Button variant="contained" color="info">
            contained Info
          </Button>
          <Button variant="contained" color="success">
            contained success
          </Button>
          <Button variant="contained" color="warning">
            contained warning
          </Button>
        </Stack>

        <Stack spacing={1} direction="row">
          <Button variant="outlined" color="primary">
            outlined primary
          </Button>
          <Button variant="outlined" color="secondary">
            outlined secondary
          </Button>
          <Button variant="outlined" color="error">
            Text error
          </Button>
          <Button variant="outlined" color="info">
            outlined Info
          </Button>
          <Button variant="outlined" color="success">
            outlined success
          </Button>
          <Button variant="outlined" color="warning">
            outlined warning
          </Button>
        </Stack>

        <Stack display="block" direction="row" spacing={4}>
          <Button variant="contained" size="small">
            Small
          </Button>

          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={4} direction="row">
          <Button variant="contained" startIcon={<AddIcon />}>
            Add
          </Button>

          <Button variant="contained" endIcon={<DeleteIcon />}>
            Delete
          </Button>

          <IconButton color="primary" size="large">
            <PersonIcon />
          </IconButton>
        </Stack>

        <Stack spacing={4} direction="row">
          <Button variant="contained" disableElevation>
            Disable Elevation
          </Button>
          <Button variant="contained" disableRipple>
            Disable Ripple
          </Button>

          <Button variant="contained" disableElevation disableRipple>
            Disable Elevation & Ripple
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButtons;
