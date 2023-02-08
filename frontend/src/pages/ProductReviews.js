import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen,faTrash,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {getAllReviews} from '../store/actions/product-actions'
// import { allReviewActions } from '../store/index';
import { useAlert } from 'react-alert';
import {useDispatch, useSelector} from 'react-redux'

const AdminReviews = () => {

  const dispatch = useDispatch()
  const alert = useAlert()

  const [id, setId] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!id) {
      return alert.error("Invalid id")
    }
    dispatch(getAllReviews(id))
  }

  const {reviews} = useSelector(state => state.allReview)

  return (
    <div>
      <div className="heading">
        <div className="reviewContainer">
          <h1>All Reviews</h1>
          <form className="reviewForm">
            <input
              type="text"
              className="inputReview"
              name="reviewSearch"
              placeholder="product id"
              onChange = {e=>setId(e.target.value)}
              value= {id}
              
            />
            <FontAwesomeIcon style={{marginTop:"-0.65%"}} icon={faMagnifyingGlass} className="searchIcon" onClick = {onSubmitHandler} />
            {/* <button className="buttonReview">SEARCH</button> */}
          </form>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Review ID</th>
            <th>User</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </tbody>
        <tbody>
          {reviews.length > 0 &&(reviews.map(review => 
            <tr key = {review._id}>
              <td>{review._id }</td>
              <td>{ review.name}</td>
              <td>{ review.comment}</td>
              <td>{ review.rating}</td>
            <td>
              <span className="tableicon">
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span className="tableicon">
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </td>
          </tr>
            
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminReviews
