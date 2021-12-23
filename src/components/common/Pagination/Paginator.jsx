import React from "react";
import styles from "./Pagination.module.css";





let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
	let pageCounter = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCounter; i++) {
		pages.push(i)
	}
	return (
		<div>
				{pages.map(p => {
					return <span className={currentPage === p ? styles.selectedPage : styles.pageNumber}
					             style={{cursor: 'pointer', marginTop: 33, padding: 10}}
					             onClick={(e) => {
						             onPageChanged(p)
					             }}>{p}</span>
				})}

			</div>)
}
export default Pagination;