import React,{useState} from 'react';
import logo from '../ui/logo.svg';
import Course1 from "../ui/course-1.png"
import Course2 from "../ui/logo2.jpg"
import cake from "../ui/cake.png"

function Rightbar(){

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
    },
    {
    ID:3,
    title: "creating a beautiful portrait ilustration. Learning new techniques a tricks",
    tutor: {
        ID: 3,
        name: "Uran Desing",
        username: "urandc",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3
    },
    duration: "1 hr 12 min",
    poster: Course1
}
    ]);

    var courseList = [];
    for(let i=0; i < popularCourses.length; i++){
        courseList.push(
            <a href="#" className="course rel" key = {"popular-course"+ i}>
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
            </a>
        );
    }

    return(
        <div className="rightbar rel">
            <div className="section rel">
                <h2 className="title s24 fontb">Advanced <span className="fontn">search</span></h2>
                <div className=" search-box rel flex">
                    <input type="text" placeholder="start writing something..." className="qry s15 fontb"/>
                    <button className="go cfff s15 fontb">Find</button>
                </div>
            </div>

            <div className="section section-b rel">                
                <div className=" courses rel flex">
                    <div className="course-a">
                        {courseList[0]}
                    </div>
                    <div className="flex cols">
                        {courseList[1]}
                        {courseList[2]}
                    </div>
                </div>
            </div>

            <div className="section section-b rel">
            <h2 className="title s24 fontb">Special <span className="fontn">offers</span></h2>
                <div className=" special-offer rel flex">
                        <div className="meta rel">
                        <h2 className="h1 s20 fontb">50 days premium!</h2>
                        <h2 className="h2 s14 fontb">Get it before 5.5.21</h2>
                        <button className="s15 fontb">Learn more</button>
                    </div>
                    <div className="vector rel">
                        <img src={cake} />
                    </div>
                    <div className="ring abs" />
                </div>
            </div>

        </div>
    )
}

export default Rightbar