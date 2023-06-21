import React, {useState} from 'react';
import cn from 'classnames';

import Button from '../Button';
import classes from './Paginator.module.css';


export const  Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
	let pagesCount = Math.ceil (totalUsersCount/pageSize);
		
			let pages = [];
			for (let i=1; i <= pagesCount; i++) {
				pages.push(i);
			}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	
	
	return <div className={(classes.paginator)}>

					{ portionNumber > 1 
						&&  <Button  onClick={ () => {setPortionNumber(portionNumber - 1) }}>BACK</Button> 
					}

					{pages
						.filter(page =>page >= leftPortionPageNumber && page <= rightPortionPageNumber)
						.map (page =>  {
						return <span className={ cn({
							[classes.selectedPage] : currentPage === page
						}, classes.pageNumber) }
							
						key={page}
						onClick={ (e) => {
							onPageChanged (page);
						}}>{page} </span>
					})}

					{ portionCount > portionNumber 
						&& <Button  onClick={ () => {setPortionNumber(portionNumber + 1) }}>NEXT</Button> 
					}

				</div>
	
}	





















