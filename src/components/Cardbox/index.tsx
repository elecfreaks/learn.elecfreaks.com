import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Cardbox = ({ children }) => {
    return (
        <article className={clsx('col', 'col--12', styles.cardbox)}>
            {children}
        </article>
    );
}

export default Cardbox;
