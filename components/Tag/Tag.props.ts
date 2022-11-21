import { ReactNode } from 'react';
import { DetailedHTMLProps } from 'react';
import { HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
