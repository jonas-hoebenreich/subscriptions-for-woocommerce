import React,{useState, useContext} from 'react';
import axios from 'axios';
import qs from 'qs';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
const { __ } = wp.i18n;
import { Button, 
    ListItem,ListItemText,
    IconButton,
    ListItemSecondaryAction,
    CircularProgress,Tooltip } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Context from '../store/store';
const PaymentGateway = (props) => {
    const {name,id,item} = props;
    const ctx = useContext(Context);
    const {paymentHandler} = ctx;
    const [loading,setLoading] = useState(false);
    const PaymentInstallHanlder = ( event, id ) => {
        event.preventDefault();
        setLoading(true);
        const user = {
            'slug':item.slug,
            'action': 'mwb_sfw_install_plugin_configuration',
            nonce: frontend_ajax_object.mwb_sfw_react_nonce,   // pass the nonce here
        };
        axios.post(frontend_ajax_object.ajaxurl, qs.stringify(user) )
            .then(res => {
               setLoading(false);
                if( res.data ) {
                    paymentHandler(id);
                }
               
            }).catch(error=>{
        })
    }
    let button = (
        
        <Tooltip title={__( 'Download & activate', 'subscriptions-for-woocommerce' )} placement="right-start">
            <CloudDownloadIcon onClick={(e) => PaymentInstallHanlder(e,id)} />
          </Tooltip>
    )
    
    if(  item.is_activated ) {
       button = (<Tooltip title={__( 'Installed', 'subscriptions-for-woocommerce' )} placement="right-start">
            <CheckCircleOutlineIcon />
          </Tooltip>);

       
    }
    return(
        <ListItem button>
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                { loading ? <CircularProgress/> : (
                    button
                )}
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        
    )
}

export default PaymentGateway;