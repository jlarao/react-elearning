import React, {useEffect, useState} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Course1 from "../ui/course-1.png"
import Course2 from "../ui/logo2.jpg"
function HomePage(){    

    useEffect(()=>{
        document.title = "Inicio"; 
    })

    const [popularCourses, setPopularCourses] = useState([
        {
            ID:1,
            title: "Learning how to create beautiful scenes in ilustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1
            },
            duration: "82 min",
            poster: Course1
        },
        {
        ID:2,
        title: "creating a beautiful portrait ilustration. Learning new techniques a tricks",
        tutor: {
            ID: 2,
            name: "Uran Desing",
            username: "urandc",
            dp: "https://placeimg.com/100/100/people?tutor-" + 2
        },
        duration: "1 hr 12 min",
        poster: Course2
    }
    ]);


    const [topTutors, setTopTutors] = useState([
        {
                           ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "https://placeimg.com/100/100/people?tutors-" + 1
                    },
        {
            ID: 2,
            name: "Uran Desing",
            username: "urandc",
            dp: "https://placeimg.com/100/100/people?tutors-" + 2
        },
        {
            ID: 3,
            name: "Uran Desing",
            username: "urandc",
            dp: "https://placeimg.com/100/100/people?tutors-" + 3
        },
        {
            ID: 4,
        name: "Lana Marandina",
        username: "lanamara",
        dp: "https://placeimg.com/100/100/people?tutors-" + 4
            },
        {
        ID: 5,
        name: "Uran Desing",
        username: "urandc",
        dp: "https://placeimg.com/100/100/people?tutors-" + 5
        },
        {
        ID: 6,
        name: "Uran Desing",
        username: "urandc",
        dp: "https://placeimg.com/100/100/people?tutors-" + 6
        }
    
    ]);

    var tutorslist = [];
    for(let i=0; i < 8; i++){
        tutorslist.push(
            <button className="tutor rel" key = {"tutor-live"+ i}>
                <img src={"https://placeimg.com/100/100/people?" + i} className="bl"/>
            </button>
        )
    }

    var courseList = [];
    for(let i=0; i < popularCourses.length; i++){
        courseList.push(
            <NavLink to={"/course/"+ popularCourses[i].ID} className="course rel" key = {"popular-course"+ i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url("+ popularCourses[i].poster  +") no-repeat center"
                }}>
                    <div className="user abs aic flex" >
                        <div className="pic">
                            <img src={popularCourses[i].tutor.dp}  className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourses[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourses[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                    <h2 className="s15 name fontb cfff">{popularCourses[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                    <h2 className="s15 name fontb cfff">{popularCourses[i].title}</h2>
                    </div>
                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i=0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key = {"top-tutors"+ i}>                
                    <div className="user aic flex noul" >
                        <div className="pic">
                            <img src={topTutors[i].dp}  className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                        </div>
                    </div>                                                      
            </a>
        );
    }

    return(
        <div className="home-page rel">

            {/* tutors live now */ }
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span className="fontn">now</span></h2>
                <div className=" tutors rel flex">
                    {tutorslist}
                </div>
            </div>

            {/* popular */ }
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className="fontn">Esta semana</span></h2>
                <div className=" courses rel flex">
                    {courseList}
                </div>
            </div>

            {/* top */ }
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span className="fontn">tutors</span></h2>
                <div className=" top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>
        </div>
    )
}

export default HomePage