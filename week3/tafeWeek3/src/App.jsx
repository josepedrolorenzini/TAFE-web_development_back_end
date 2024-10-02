import React from 'react'
import Article from './components/Article';

function App() {
    const names = ["jose" ,"pedro" , "maria" , "lauren"] ;
    return (
        <div>
            {names.map( name => 
                 <p>{name}</p>
                )}
                <Article 
                title="my component" 
                content={["jsx" ,"javascript"]}
                />
        </div>
    )
}

export default App
