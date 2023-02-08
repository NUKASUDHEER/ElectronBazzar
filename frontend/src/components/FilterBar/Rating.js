import React from 'react';
import '../styles/FilterExtra.css'

const Rating = (props) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    const rating = e.target.value
    props.onCateogrySetHandler(rating)
  }
    return(
        <div className="Rating">
        <details id="details" open>
          <summary>  Ratings</summary>

          <input type="radio" value ="4"  onClick = {onSubmitHandler}></input>
          <label>
            <span className="inline"></span>
            <span className="outline">4
                <img src="/images/star_image.png" alt="star" className="star"></img>
            </span>
            <p className="para" style={{ color: 'black' }}>& Above</p>
          </label><br></br>

          <input type="checkbox"  name="R1" value ="3" onClick = {onSubmitHandler}></input>
          <label>
            <span className="inline"></span>
            <span className="outline">3
                <img src="/images/star_image.png" alt="star" className="star"></img>
            </span>
            <p className="para" style={{ color: 'black' }}>& Above</p>
          </label><br></br>

          <input type="checkbox"  name="R1" value ="2" onClick = {onSubmitHandler}></input>
          <label >
            <span className="inline"></span>
            <span className="outline">2
                <img src="/images/star_image.png" alt="star" className="star"></img>
                
            </span>
            <p className="para" style={{ color: 'black' }}>& Above</p>
          </label><br></br>

        </details>
       <div className="reset"></div>
       <div className="border-line"></div>
      </div>
      
     
      

    )
}

export default Rating