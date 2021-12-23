import React from "react";
import Pagination from "../common/Pagination/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

	return (
		<div>
			<div style={{textOverflow: 'ellipsis', overflow: 'hidden', height: 40}}>

				<Pagination currentPage={currentPage} onPageChanged={onPageChanged}
				            totalUsersCount={totalUsersCount} pageSize={pageSize}


				/>
			</div>
			{
				users.map(u => <User user={u}
				                     followingInProgress={props.followingInProgress}
				                     key={u.id}
				                     unfollow={props.unfollow}
				                     follow={props.follow}

				/>)
			}
			}
		</div>)


}
export default Users;