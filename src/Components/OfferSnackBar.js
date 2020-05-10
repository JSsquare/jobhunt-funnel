import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import BottomDialog from './BottomDialog'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function OfferSnackBar(props) {
    return (
        <div>          
        <Snackbar  open={props.offers} autoHideDuration={4000} >
            <Alert severity="success">
                Hurray! You have {props.offerNumber} Job Offer{props.offerNumber > 1 ? 's': null}.
            </Alert>
        </Snackbar>  
        <div className="bottom-arrow">
            <BottomDialog>
            </BottomDialog>  
        </div>        
        </div>
    )
}
