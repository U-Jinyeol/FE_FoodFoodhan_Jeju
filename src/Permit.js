import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) =>{

    const is_login = useSelector(state => state.user.is_login);
    const is_token = document.cookie? true:false


    if(is_login && is_token){
        return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )}

    return null;
    


}

export default Permit;


