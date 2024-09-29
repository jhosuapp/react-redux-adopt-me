import styles from './header.module.scss';

const Header = ():JSX.Element => {
    return (
        <>
            <header className={ styles.header }>
                <div className={ styles.header__content }>
                    <p>Logo</p>
                    <div>User</div>
                </div>
            </header>
        </>
    )
}

export { Header }