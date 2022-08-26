import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
    href: string;
    title: string;
    description: string;
    img: string;
}

const Card: FC<Props> = ({ href, title, description, img }) => {
    return (
        <article className="margin--md">
            <Link
                href={href}
                className={clsx('card padding--md', styles.cardContainer)}
            >
                <div className={styles.imgWrapper}>
                    <img src={img} alt="" className={styles.img} />
                </div>
                <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
                    {title}
                </h2>
                {description && (
                    <p
                        className={clsx('text--truncate', styles.cardDescription)}
                        title={description}>
                        {description}
                    </p>
                )}
            </Link>
        </article>
    );
}

export default Card;
