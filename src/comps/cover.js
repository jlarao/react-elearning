import React,{useState, useEffect} from 'react';
import Loading from "./loading"

export default class Cover extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            success: this.props.success || false
        }
    }

    render(){
    const props = this.props;   
    return(       
        <div className="cover abs" id ={this.props.id ? this.props.id: "__cover__"}>
            <div className="abc abs">
                {<Loading />}
            </div>
        </div>
     )    
}
}
