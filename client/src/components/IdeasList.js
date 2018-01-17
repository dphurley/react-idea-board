import React from 'react'

const IdeasList = (props) => {
  return (
    <div>
      {props.ideas.map((idea) => {
        return (
          <div key={idea._id}>

            <input type="text"
                   name="title"
                   value={idea.title}
                   onChange={(event) => props.handleChange(idea, event)}
                   onBlur={() => {props.updateIdea(idea)}}/>

            <textarea name="description"
                      value={idea.description}
                      onChange={(event) => props.handleChange(idea, event)}
                      onBlur={() => {props.updateIdea(idea)}}/>

            <button onClick={() => {props.deleteIdea(idea)}}>
              Delete Idea
            </button>

          </div>
        )
      })}
    </div>
  )
}

export default IdeasList