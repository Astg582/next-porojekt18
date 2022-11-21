import { ReactNode } from 'react';
import { DetailedHTMLProps } from 'react';
import { HTMLAttributes } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}
