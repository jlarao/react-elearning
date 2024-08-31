import React,{useState} from 'react';
import logo from '../ui/logo.svg';
import {Route, NavLink, HashRouter} from 'react-router-dom';

function Sidebar(){
    
    const [nav, setNav] = useState([
        {"label": "Principal", "slug": "/", "icon": "icon-home"},
        {"label": "Busqueda", "slug": "discover", "icon": "icon-ul"},
        {"label": "Categorias", "slug": "cate", "icon": "icon-tag"},
        {"label": "Mis Cursos", "slug": "my-courses", "icon": "icon-briefcase"}        
    ])

    const [currentPage, setCurrentPage] = useState("/")
    var navigation = [];
    for(let i=0; i<nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex c333 "}>
                    <div className={"ico s20 " + nav[i].icon}></div>
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </NavLink>
            </li>
        )
    }

    console.log(global.fire);

        return(
            <div className="sidebar rel">
                <a href="#" className="logo bl">
                    <img src={logo} className="bl" />
                </a>
                <ul className="nav">
                    {navigation}
                </ul>

                <div className="updated-course flex aic">
                    <div className="icon-lamp-bright ico"></div>
                    <div className="lbl sl5 fontb c333">
                        Updated Courses
                        <h2 className="author s13 c777">by kamram xasdfgh</h2>
                    </div>
                </div>

                <div className="stats aic flex">

                    <div className="stats-box flex">
                        <div className="ico ico-points s24 icon-shield"/>
                        <h2 className="val s15 c333 fontb">1800</h2>
                        <h2 className="lbl s13 c777">points</h2>
                    </div>

                    <div className="stats-box flex">
                        <div className="ico ico-battery s24 icon-battery-90"/>
                        <h2 className="val s15 c333 fontb">45.3%</h2>
                        <h2 className="lbl s13 c777">complete</h2>
                    </div>

                </div>

                <div className="me flex aic">
                {global.fire.ID ? <React.Fragment>
                    <div className="photo cfff s24">
                        <img src="https://placeimg.com/100/100/people" className="bl"/>
                    </div>
                    <div className="lbl sl5 fontb c333">
                        Updated Courses
                        <h2 className="uname s13 c777">@kamram xasdfgh</h2>
                    </div>
                    </React.Fragment>
                :
                    <NavLink to="oauth" className={"aic link noul flex c333 "}>
                        <div className={"ico s24 cfff rel icon-portrait-male" }></div>
                        <h2 className="lbl s20 fontt">Sign in</h2>
                    </NavLink>
                   }
                </div>
                
            </div>
        )
    }

    export default Sidebar

