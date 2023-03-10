import { type FC, memo } from 'react'
import { Button } from 'shared/ui'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/themeIcons/sun-solid.svg'
import MoonIcon from 'shared/assets/icons/themeIcons/moon-solid.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
    const {
        theme,
        toggleTheme
    } = useTheme()

    return (
        <Button onClick={ toggleTheme } className={ props.className }>
            {
                theme === Theme.LIGHT
                    // eslint-disable-next-line i18next/no-literal-string
                    ? <SunIcon fill="#d0ac58" width="30px"/>
                    // eslint-disable-next-line i18next/no-literal-string
                    : <MoonIcon fill="#d8d8d8" width="35px" height="35px"/>
            }
        </Button>
    )
})
