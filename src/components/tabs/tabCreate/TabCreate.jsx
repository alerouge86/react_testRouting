import { useState } from "react";
import Button from "@material-ui/core/Button";
import MyModal from "../../common/MyModal";
import CreateEventWizard from "./event/CreateEventWizard";

const TabCreate = ({ t }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <h1>Start wizard</h1>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Start
      </Button>

      <MyModal
        t={t}
        title={<span>title</span>}
        open={dialogOpen}
        handleClose={handleCloseDialog}
        closeButton
        content={<CreateEventWizard t={t} />}
      />
    </>
  );
};

export default TabCreate;
