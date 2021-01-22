import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


//criando componente
function Footer() {
    return (
        //criar a classe footer
        <footer className="maind-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            {/* cria classe footer */}
            <div className="footer-icons">
                <a href="http://www.youtube.com/c/DevSuperior" target="_new">
                   <YoutubeIcon /> 
                </a>
                <a href="http://www.linkedin.com/school/devsuperior" target="_new">
                   <LinkedinIcon />
                </a>
                <a href="http://www.instagram.com/c/devsuperior.ig " target="_new">
                   <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;