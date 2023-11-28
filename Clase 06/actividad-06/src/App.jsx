import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
  borderRadius: 5,
};
function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="contenedor-principal">
      <div>
        <Button variant="contained" onClick={handleOpen}>
          Registrate
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Formulario de Registro
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="form"
            >
              <TextField
                className="campo"
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
              />

              <TextField
                className="campo"
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
              />

              <TextField
                className="campo"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />

              <TextField
                className="campo"
                id="outlined-basic"
                label="Tèlefono"
                variant="outlined"
              />

              <TextField
                className="campo"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />

              <TextField
                className="campo"
                id="outlined-basic"
                label="Confirmar Password"
                variant="outlined"
              />
              <Button className="btn-submit" variant="contained">
                Registrate
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;

/* <div className="contenedor-principal">
        <Button variant="contained">Registrarte</Button>
      </div>*/
