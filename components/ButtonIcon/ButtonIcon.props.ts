import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import up from './Up.svg';
import clos from './Clos.svg';
import menu from './Menu.svg';


export const icons = {
        up,
        clos,
        menu
};

export type IconName = keyof typeof icons;

export  interface ButtonIconProps extends DetailedHTMLProps <ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName;
    appearance: 'primary' | 'white';

}