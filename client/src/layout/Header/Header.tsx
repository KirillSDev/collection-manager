import { FC } from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ children, title }): JSX.Element => {
    return (
        <div className={cn(styles.container)}>
            <div className='row w-100 justify-content-between '>
                <div className='col'>
                    <a href='/' className={styles.title}>
                        {title}
                    </a>
                </div>
                <div className='col-auto'>
                    <div className={styles.buttons}>{children}</div>
                </div>
            </div>
        </div>
    );
};
