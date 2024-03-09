import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";

import { Modal, ButtonToolbar, Button } from "rsuite";
import RemindIcon from "@rsuite/icons/legacy/Remind";

const Alert = ({ message }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonToolbar>
        <Button onClick={handleOpen}>Disable</Button>
      </ButtonToolbar>

      <Modal
        backdrop="static"
        role="alertdialog"
        open={open}
        onClose={handleClose}
        size="xs"
      >
        <Modal.Body>
          <RemindIcon style={{ color: "#ffb300", fontSize: 24 }} />
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Alert;
// ReactDOM.render(<App />, document.getElementById("root"));
