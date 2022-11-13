import  { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns'




export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
       <footer className={cn(styles.footer)}  {...props}>
           <div>
               OwlTop © 2020 - {format(new Date(), 'yyy')} Все права защищены
           </div>
           <a href="#" target="_blank">
               Пользовательское соглашение
           </a>
           <a href="#" target="_blank">
               Политика конфиденциальности
           </a>
       </footer>
    );
};