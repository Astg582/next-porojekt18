import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(
  (
    { className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.textAreaWrapper)}>
        <textarea
          className={cn(styles.textArea, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMassage}>{error.message}</span>}
      </div>
    );
  },
);
