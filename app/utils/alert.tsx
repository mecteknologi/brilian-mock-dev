import { Snackbar } from "@mui/joy";
import { createPortal } from "react-dom";

const showAlert = (title: string) => {

  createPortal(
    <Snackbar
      autoHideDuration={4000}
      open
      variant="soft"
      color="danger"
      onClose={(event, reason) => {
        console.log("los celose");
      }}
    >
      {title}
    </Snackbar>,
    document.getElementById("portal-snackbar")!,
    "portal-snackbar"
  );
};

export default showAlert;
