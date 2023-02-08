import { type FC } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import ruIcon from 'shared/assets/icons/langIcons/icons8-russian-federation-48.png'
import engIcon from 'shared/assets/icons/langIcons/icons8-great-britain-48.png'
import s from './LangSwitcher.module.scss'
interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { i18n } = useTranslation()
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru')
  }

  return (
        <Button onClick={toggleLanguage} className={s.switcher}>
            {
                i18n.language === 'ru'
                  ? <img alt="russian" src={ruIcon}/>
                  : <img alt="english" src={engIcon}/>
            }
        </Button>
  )
}