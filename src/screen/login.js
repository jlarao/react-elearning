import React from 'react';
import axios from 'axios';
//import  '../assets/css/login.css';
import logo from "../ui/logo.svg"
import Rightbar  from './rightbar'
import {Apiurl} from '../services/apirest';


class Login extends React.Component{

    constructor(props){
        super(props)
    }


    state  ={
        form: {
            usuario:"",
            password:""
        },
        error: false,
        errorMsg: ""
    }
    manejadorSubmit = e =>{
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.form)
    }

    manejadorBoton = ()=>{
        //let url = Apiurl + 'auth' ;
        let url = 'http://localhost:81/rest/api/loginjwt' ;
         console.log(this.state.form.usuario);
        if(this.state.form.usuario!=""){
            if(this.state.form.password!=""){
                axios.post(url,this.state.form)
            .then(response => {
                console.log(response);
                console.log(response.data.message); 
                if(response.data.status === "ok"){
                    localStorage.setItem("token", response.data.token)
                    global.fire.ID = response.data.token;
                    this.props.history.push("/")
                   
                }else{
                    this.setState({
                        error: true,
                        errorMsg: response.data.message
                    })
                }
            }).catch(error =>{
                console.log("error " . error);

                if (error.response) {
                    // client received an error response (5xx, 4xx)
                    console.log("response" + error.response);
                    this.setState({
                        error: true,
                        errorMsg: `error al conectar al api ${error.response.data.message}`
                    })
                  } else if (error.request) {
                    // client never received a response, or request never left
                    console.log("request"+error.request);
                    this.setState({
                        error: true,
                        errorMsg: `error al conectar al api`
                    })
                  } else {
                    // anything else
                    console.log(error);
                    this.setState({
                        error: true,
                        errorMsg: `error al conectar al api`
                    })
                  }

                
            })
        }else{
            this.setState({
                error: true,
                errorMsg: "campo contraseña vacia"
            })
        }

        
    }else{
        this.setState({
            error: true,
            errorMsg: "Campo usuario vacio"
        })

    }
}

    render(){
        return( 
        <React.Fragment>
            <div className="oauth-view oauth-view-verify  rel">
            <div id="formContent">                
                <div className="fadeIn first">
                <img src={logo}  width = "100px" id="icon" alt="User Icon" />
                <br/>
                <br/>
                </div>
                
                <form onSubmit={this.manejadorSubmit}>
                <input type="text" className="iput s24 fontb" name="usuario" placeholder="usuario" onChange={this.manejadorChange}/>
                <input type="password" className="iput s24 fontb" name="password" placeholder="password" onChange={this.manejadorChange}/>
                <input type="submit" className="button s24 fontb cfff " value="Log In" onClick={this.manejadorBoton}/>
                </form>
               
               {this.state.error === true &&
                 <div className="alert alert-danger" role="alert">
                   {this.state.errorMsg}
                 </div>
               }                

            </div>
            {<Rightbar/>}
            </div>
        </React.Fragment>
        )
    }
}

export default Login