import React, {useEffect} from 'react';

function MyCoursesPage(){
    
    useEffect(()=>{
        document.title = "mis cursos"; 
    })
    return(
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c3">MyCourses</h1>
        </div>
    )    
}

export default MyCoursesPage