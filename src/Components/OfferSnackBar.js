import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function OfferSnackBar(props) { 
    const [open, setOpen] = React.useState(false); 
    const isOpen = () => {
        return props.offers;
    }    
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }             
        setOpen(false);
      };

    return (
        <div>
        <Snackbar  open={props.offers} autoHideDuration={4000} >
            <Alert severity="success">
                Hurray! You have {props.offerNumber} Job Offer{props.offerNumber > 1 ? 's': null}.
            </Alert>
        </Snackbar>            
        </div>
    )
}
