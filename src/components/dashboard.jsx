import React from 'react';
import Header from '../template/header';
import axios from 'axios';
import {Apiurl} from '../services/apirest';

class Dashboard extends React.Component{

    state = {
        pacientes: []
    }

    clickPaciente(id){
        console.log(id)
    }
    
    componentDidMount(){
        //let url = Apiurl + 'auth' ;
        let url = 'http://localhost:81/rest/api/usuarios.php?page=1' ;
        axios.get(url)
            .then(response => {
                this.setState ={
                    pacientes: response.data
                }
            })
    }


    render(){

        return <React.Fragment>            
            <Header/>

            <div className="container">
            <table className="table table-hover">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </thead>
                <tbody>
                {this.state.pacientes.map((value,index) => {
                    return(
                        <tr key={index} onClick= {()=>this.clickPaciente(value.paciete.id)}>
                            <th >{value.paciete.id}</th>
                            <td>{value.paciete.id}</td>
                            <td>{value.paciete.id}</td>
                            <td>{value.paciete.id}</td>
                        </tr>
                    )
                })}
                
                                                           
                </tbody>
            </table>
            </div>
            </React.Fragment>
    }
}

export default Dashboard