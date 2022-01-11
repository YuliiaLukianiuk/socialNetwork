import React, {useState} from "react";
import styles from "./Pagination.module.css";





let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 15}) => {
	let pageCounter = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCounter; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pageCounter / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = (portionNumber * portionSize)


	return (
		<div>
			{portionNumber > 1 &&
			<button onClick={() => {
				setPortionNumber(portionNumber - 1)
			}}>PREV</button>}

			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {
					return <span className={currentPage === p ? styles.selectedPage : styles.pageNumber}
					             style={{cursor: 'pointer', marginTop: 33, padding: 10}}
					             onClick={(e) => {
						             onPageChanged(p)
					             }}>{p}</span>
				})}
			{portionCount > portionNumber &&
			<button onClick={() => {
				setPortionNumber(portionNumber + 1)
			}}>NEXT</button>}

		</div>)
}
export default Pagination;