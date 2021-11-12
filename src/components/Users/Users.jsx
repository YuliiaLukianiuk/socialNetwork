import React from "react";
import styles from "./users.module.css";
import usersPhoto from "../../img/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";



let Users = (props) => {
	let pageCounter = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCounter; i++) {
		pages.push(i)
	}
	return (
		<div>
			<div style={{textOverflow: 'ellipsis', overflow: 'hidden', height: 40}}>
				{pages.map(p => {
					return <span className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}
					             style={{cursor: 'pointer', marginTop: 33, padding: 10}}
					             onClick={(e) => {
						             props.onPageChanged(p)
					             }}>{p}</span>
				})}

			</div>
			{
				props.users.map(u => {
						const {
							id,
							name,
							status,
							// location,
							photos,
							followed
						} = u;

						return (
							<div key={id}>
                <span>
                  <div>
                      <NavLink to={'/profile/' + id}>
                      <img src={photos.small != null ? photos.small : usersPhoto}
                           className={styles.userPhoto}/>
                          </NavLink>
                  </div>
                  <div>
                    {followed
	                    ? <button disabled={props.followingInProgress.some(id => id === id)} onClick={() => {
		                    props.toggleFollowingProgress(true, id);
		                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
				                    {
					                    withCredentials: true,
					                    headers: {
						                    'API-KEY': '6e47cc31-4791-45a1-9bde-719317a38571'
					                    }
				                    }
			                    )
			                    .then(response => {
				                    if (response.data.resultCode === 0) {
					                    props.unfollow(id)
				                    }
				                    props.toggleFollowingProgress(false, id);
			                    });

	                    }}>Unfollow </button>
	                    : <button disabled={props.followingInProgress.some(id => id === id)} onClick={() => {

		                    props.toggleFollowingProgress(true, id);
		                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
				                    {},
				                    {
					                    withCredentials: true,
					                    headers: {
						                    'API-KEY': '6e47cc31-4791-45a1-9bde-719317a38571'
					                    }
				                    }
			                    )
			                    .then(response => {
				                    if (response.data.resultCode === 0) {
					                    props.follow(id)
				                    }
				                    props.toggleFollowingProgress(false, id);
			                    })
	                    }}>Follow</button>}


                            </div>
                  </span>
								<span>
                  <span>
                                <div>{name} </div>
                                <div>{status}</div>
                            </span>
                  <span>
                                <div>{'location.country'} </div>
                                <div>{'location.city'} </div>
                            </span>
                  </span>
							</div>
						)
					}
				)
			}
		</div>
	)


}
export default Users;