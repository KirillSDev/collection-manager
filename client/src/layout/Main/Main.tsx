import { FC } from 'react';
import { MainProps } from './Main.props';
import styles from './Main.module.scss';
import cn from 'classnames';

export const Main: FC<MainProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles['container-fluid']}>
            <div className={cn('container-xxl container-sm container-xs', styles.container)}>{children}</div>
        </div>
    );
};
