import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

type Themes = "dark" | "light"

export function Menu() {
    const [theme, setTheme] = useState<Themes>(() => {
        const storageTheme = localStorage.getItem('theme') as Themes || 'dark'
        return storageTheme;
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme]);

    const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label="Ir para a home" title="Ir para a home">
                <HouseIcon size={64} />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Ir para o menu" title="Ir para o menu">
                <HistoryIcon size={64} />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Ir para as configurações" title="Ir para as configurações">
                <SettingsIcon size={64} />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Trocar de tema" title="Trocar de tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
} 