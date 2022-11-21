import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import { PProps } from '../P/P.props';

export const Tag = ({
  size = 's',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.teg, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.green]: color == 'green',
        [styles.grey]: color == 'grey',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
