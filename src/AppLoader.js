import AppContext from "./AppContext"
import React,{useState, useEffect} from 'react';
import logo from "./ui/logo.svg"

import {Route, NavLink, HashRouter} from 'react-router-dom';

import Sidebar from './screen/sidebar'
import HomePage  from './screen/home'
import CoursePage  from './screen/course'
import DiscoverPage  from './screen/discover'
import CategoriesPage  from './screen/categories'
import MyCoursesPage  from './screen/mycourses'
import AccountPage  from './screen/oauth'
import Login from './screen/login'; 

import './assets/css/App.css';
import './assets/css/props.css';
import './assets/css/uifont.css';

import  fire_base from 'firebase';
global.firebase = fire_base;
global.fire = {
    ID: null
};


export default function AppLoader(props){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        //const init = async () => {
            global.firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    console.log(user);
                    console.log("has iniciado sesion.");
                    setIsFireUser(true);
                    {/*global.firebase.auth().signOut()
                    .then(result => console.log('Te has desconectado correctamente'))
                .catch(error => console.error('Un error ocurrio')) */}


                }else{
                    console.log(user);
                    console.log("invitado no ha iniciado sesion.");
                    setIsFireUser(false);
                    setTimeout(()=>{ 
                        context.setAppLoaded(true);
                    } , 500);
                }
              
            });
          }

    const splash = (context)=>{
        return(
            <div className="App flex">
                <div className="splash abs abc">
                    <img src= {logo}  className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return(
        <AppContext.Consumer>
            {
            context =>{
                return (
                    context.appLoaded() ?
                    <div className="App flex">       
                        <HashRouter>
                            <Sidebar/>
                            <div className="app-content">
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/course/:courseid" component={CoursePage}/>
                            <Route path="/discover" component={DiscoverPage}/>
                            <Route path="/cate" component={CategoriesPage}/>
                            <Route path="/my-courses" component={MyCoursesPage}/>
                            <Route path="/oauth" component={Login}/>
                            <Route path="/citas" component={Login}/>
                            </div>   
                        </HashRouter>    
                    </div>
                    :
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return(splash(context))
                                }
                            }
                        </AppContext.Consumer>
                )
            }
            }
        </AppContext.Consumer>
    )
}