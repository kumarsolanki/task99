import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SinglePostContent from './layout/singlePostContent.js';

const styles = (theme) => ({

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    maxHeight: '10vh'
  },
  dialogHeader: {
    backgroundColor: '#191a1b',
    color: theme.palette.grey[500],
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '95vh',
    maxWidth: "none",
    backgroundColor: '#dae0e6'

  },
  herderContent: {
    text: {
      primary: '#dae0e6'
    }
  }
}
);
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography  {...other}>
      <Typography variant="h6" >
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
          Close
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
}))(MuiDialogContent);

function ModalPost(props) {
  const {classes } = props;
  const handleClose = () => {
    props.closeDialog1();
  };

  return (
    <div>
      <Dialog fullWidth={true} classes={{ paper: classes.dialogPaper }} open={props.diaOpen} onClose={handleClose} aria-labelledby="customized-dialog-title" >
        <DialogTitle className={classes.dialogHeader} id="customized-dialog-title" onClose={handleClose}>
          <ArrowUpwardIcon className="upvote" />
          <span>{props.post1.ups - props.post1.downs}</span>
          <ArrowDownwardIcon className="downvote" />
          <span className="title">{props.post1.title}</span>
        </DialogTitle>
        <DialogContent dividers>
          <SinglePostContent post1={props.post1.id} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(ModalPost);

