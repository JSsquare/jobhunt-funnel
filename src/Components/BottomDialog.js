import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BottomDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <KeyboardArrowUpIcon fontSize="large" color="primary" onClick={handleClickOpen}>
      </KeyboardArrowUpIcon>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            built by <a href="http://www.twitter.com/HandleChanger" target="_blank">Johnny<TwitterIcon style={{ fontSize: 18 }}></TwitterIcon></a> with React
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ArrowDownwardIcon style={{ fontSize: 20 }} onClick={handleClose} color="primary"></ArrowDownwardIcon>
        </DialogActions>
      </Dialog>
    </div>
  );
}