import  { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarSvg from './star.svg'
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";


export const Rating = forwardRef(({isEditable = false, rating, setRating, children, className, error,...props}: RatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  },[rating]);

    const  constructRating = ( currentRating: number ) => {
        const updateArray = ratingArray.map((r:JSX.Element, i:number) =>{
            return (
               <span
                    className = {cn(styles.star, {
                   [styles.filled]: i < currentRating,
                   [styles.editable]: isEditable
               })}
                   onMouseEnter={()=> changeDisplay(i + 1)}
                   onMouseLeave={()=> changeDisplay(rating)}
                   onClick = {() => onClick(i + 1)}
                    >
                    <StarSvg
                        tabIndex={isEditable ? 0 : -1 }
                        onKeyDown = {(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace( i+ 1, e)}

                    />
               </span>
             );
        });
    setRatingArray(updateArray);
    };
    
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };
        const onClick = (i: number) => {
            if (!isEditable || !setRating) {
                return;
            }
            setRating(i);
        };
        
        const handleSpace = ( i: number, e: KeyboardEvent<SVGAElement> ) => {
          if (e.code != 'Space' || !setRating){
              return;
          }
          setRating(i);
        };

    return (

        <div {...props} ref={ref} className={cn( styles.ratingWrapper, {
            [styles.error]:error
        })}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMassage}>{error.message}</span>}
        </div>

    );
});