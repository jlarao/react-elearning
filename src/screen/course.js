import React, {useState} from 'react';

import Course1 from "../ui/course-1.png"
import Course2 from "../ui/logo2.jpg"
function CoursePage(props){    

    const [Course, setCourse] = useState(
        {
            ID:1,
            title: "Learning how to create beautiful scenes in ilustrator in 60 minutes",
            about: "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future.<br />Hope you'll get some really usefull stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1
            },
            duration: "82 min",
            poster: Course1,

            videos: [
                {
                    ID:1,
                    title: "Introduccion",
                    duration: " 03 minutes 22 seconds"
                },
                {
                    ID:2,
                    title: "Getting started",
                    duration: " 09 minutes 55 seconds"
                },
                {
                    ID:3,
                    title: "The Ilustration",
                    duration: " 63 minutes 12 seconds"
                }
            ]
        }
    );

    var courseid = props.match.params.courseid ;
    var courseVideos = [];
        for(let i=0; i < Course.videos.length; i++){
            courseVideos.push(
                <a href="#" key={"course-video-"+ i} className="noul aic rel flex">
                    <div className="id s18 fontn cfff">{Course.videos[i].ID}</div>
                    <div className="meta rel">
                        <h1 className="s15 lbl fontb c333">{Course.videos[i].title}</h1>
                        <h1 className="s13 dur fontn c777">{Course.videos[i].duration}</h1>
                    </div>
                </a>
            )
        }

        
    return(
        
        <div className="course-page rel flex">

            <div className="course-info rel">

            
            <div className="tutor rel aic flex" >
                <div className="pic">
                    <img src={Course.tutor.dp}  className="bl"/>
                </div>
                <div className="meta rel">
                    <h2 className="s15 name fontb c333">{Course.tutor.name}</h2>
                    <h2 className="s13 uname fontn c777">Course tutor</h2>
                </div>
            </div>           

            <div className="course-meta">
                <h2 className="s24 title fontb c333">{Course.title}</h2>
                <p className="s18 about fontn c777" dangerouslySetInnerHTML={{__html : Course.about}}></p>

                <div className="section section-b rel">
                    <h2 className="title s24 fontb">logros  <span className="fontn">del curso</span></h2>
                    <div className="course-stats aic flex">
                    <div className="stats-box flex">
                        <div className="ico ico-points s24 icon-shield"/>
                        <h2 className="val s15 c333 fontb">1800</h2>
                        <h2 className="lbl s13 c777">points</h2>
                    </div>

                    <div className="stats-box flex">
                        <div className="ico ico-battery s24 icon-battery-3"/>
                        <h2 className="val s15 c333 fontb">45.3%</h2>
                        <h2 className="lbl s13 c777">complete</h2>
                    </div>
                    <div className="stats-box flex">
                        <div className="ico ico-battery s24 icon-battery-90"/>
                        <h2 className="val s15 c333 fontb">+26</h2>
                        <h2 className="lbl s13 c777">level</h2>
                    </div>
                    </div>
                </div>

                <div className="section section-b rel">
                    <h2 className="title s24 fontb">Detalles  <span className="fontn">del curso</span></h2>
                    <div className="course-videos flex">
                                      {courseVideos}                    
                    </div>
                </div>

            </div>
            </div>

            <div className="course-preview rel">
                <div className="player rel">
                    <video poster={Course.poster}/>
                    <div className="ctrls abs aic flex">
                        <button className="icon-pause s24 pp"></button>
                        <div className="timer rel fontn s15 cfff">
                              02:54 / 09:45
                        </div>
                        <div className="slider rel ">
                              <div className="prog rel">
                                <div className="bar rel">
                                    <div className="knob abs"></div>
                                </div>
                              </div>
                        </div>
                        <button className="icon-volume-100 s24  vol"></button>
                        <button className="icon-full-screen-enter2 s24 fs"></button>
                    </div>
                </div>

                <div className="extras-block rel flex">
                    <div className="chat rel">
                        <div className="section section-b rel">
                        <h2 className="title s24 fontb">conversacion  <span className="fontn">rapida</span></h2>
                        <div className="messages aic flex">
                            <div className="bubble rel">
                                <h2 className="txt ilb fontn s15 c333">Soy novato</h2>                                
                            </div>
                            <div className="bubble rel">
                                <h2 className="txt ilb fontn s15 c333">Amo este curso</h2>                                
                            </div>
                            <div className="bubble bubble-mine rel">
                                <h2 className="txt ilb fontn s15 c333">Oye</h2>                                
                            </div>
                            <div className="bubble bubble-mine rel">
                                <h2 className="txt ilb fontn s15 c333">dope intro, thanks</h2>                                
                            </div>

                        </div>
                    </div>
                    </div>

                    <div className="now-watching rel">
                    <div className="tooltip abs s13 fontb cfff">86 live now</div>
                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Viendo  <span className="fontn">ahora</span></h2>
                            <div className="you-list rel">
                                <div className="you rel aic flex" >
                                    <div className="pic">
                                        <img src="https://placeimg.com/100/100/people?guest-1"  className="bl"/>
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Gregory house</h2>
                                        <h2 className="s13 uname fontn c777">@houseg</h2>
                                    </div>
                                </div>  

                                <div className="you rel aic flex" >
                                    <div className="pic">
                                        <img src="https://placeimg.com/100/100/people?guest-2"  className="bl"/>
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Wilson </h2>
                                        <h2 className="s13 uname fontn c777">@wilson</h2>
                                    </div>
                                </div>  
                                <div className="you rel aic flex" >
                                    <div className="pic">
                                        <img src="https://placeimg.com/100/100/people?guest-3"  className="bl"/>
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Foreman </h2>
                                        <h2 className="s13 uname fontn c777">@foreman</h2>
                                    </div>
                                </div> 
                                <div className="you rel aic flex" >
                                    <div className="pic">
                                        <img src="https://placeimg.com/100/100/people?guest-4"  className="bl"/>
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Cameron </h2>
                                        <h2 className="s13 uname fontn c777">@cameron</h2>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage