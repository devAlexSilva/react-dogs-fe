import * as S from './main.module.css'
import svgImage from '../../assets/dogs-footer.svg'


export function Footer() {
  return (
    <footer className={S.footer}>
      <img src={svgImage} alt="logo do projeto com um cachorro" />
      <p>Desenvolvido por <b><a href='https://github.com/devAlexSilva' target='_blank'>DevAlexSilva</a></b> em curso da <b><a href='https://origamid.com' target='_blank'>Origamid</a></b></p>
    </footer>
  )
}