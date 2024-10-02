import React from 'react'

function Article(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ol>
                {props.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

export default Article
