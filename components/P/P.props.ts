import { ReactNode } from 'react';
import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";


export interface PProps extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l';
    children: ReactNode;
}
