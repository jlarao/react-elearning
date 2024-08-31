import React, {useEffect} from 'react';

function DiscoverPage(){ 
    useEffect(()=>{
        document.title = "Busqueda"; 
    })
    return(
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c3">Discover</h1>
        </div>
    )    
}

export default DiscoverPage