import React from 'react'

function ProfileCard({title,description,img}) {
  return (
    <div className='card'>
      <div className="card-image">
       <figure className="image is-1by1">
       <img src={img} alt="pic" />
       </figure>
      
      </div>
      <div className="card-content">
      <div className="media-content">

      <h1>{title}</h1>
      <p className='content'>{description}</p><br/>
      </div>

      </div>
       
       
    </div>
  )
}

export default ProfileCard