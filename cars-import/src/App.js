
import './App.css';
import './Queries.css';

import logo_empresa from "./assets/Logos/Logo-empresa-removebg-preview.png";
import bugatti_logo from "./assets/Logos/bugatti-logo.png";
import ferrari_logo from "./assets/Logos/ferrari-logo.png";
import jeep_logo from "./assets/Logos/Jeep-Logo.png";
import lamborguini_logo from "./assets/Logos/lamborguini-logo.png";
import porsche_logo from "./assets/Logos/porsche-logo.png";
import tesla_logo from "./assets/Logos/Tesla_logo.png";

import car_1 from './assets/Images_cars/car_1.jpg';
import car_2 from './assets/Images_cars/car_2.jpg';
import car_3 from './assets/Images_cars/car_3.jpg';
import car_4 from './assets/Images_cars/car_4.jpg';
import car_5 from './assets/Images_cars/car_5.jpg';
import car_antigo from './assets/Images_cars/antigo-luxo.jpg';
import car_linha_montagem from './assets/Images_cars/LINHA-DE-MONTAGEM.jpg';

import icon_bate_papo from './assets/Icons/bate-papo.png';
import icon_checked from './assets/Icons/checked.png';
import icon_email from './assets/Icons/email.png';
import icon_facebook from './assets/Icons/facebook.png';
import icon_instagram from './assets/Icons/instagram.png';
import icon_key from './assets/Icons/key.png';
import icon_Lista from './assets/Icons/Lista_icon.png';
import icon_lupa from './assets/Icons/lupa.png';
import icon_profile_user from './assets/Icons/profile-user.png';
import icon_telephone from './assets/Icons/telephone.png';
import icon_user from './assets/Icons/user.png';
import icon_whatsapp from './assets/Icons/whatsapp.png';


function App() {
  return (
    <div className="Application">
        <header>
            <nav>
                <div className="nav">
                    <div className="nav_1">
                        <a href="#index.html"><img src={logo_empresa} alt="Logo"/></a>
                        <input type="text" placeholder="Pesquisar..."/>
                    </div>
                    <div className="user_icon">
                        <a href="#"><img src={icon_profile_user} alt="Icon_User"/></a>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div className="title">
                <h1>Dream Imports - Lux</h1>
                <h2>Sua melhor importadora de veículos de luxo.</h2>
            </div>
            <div className="sobre">
                <div className="history_bg">
                    <h2 id="history">Nossa História</h2>
                </div>
                <p>Estamos no mercado a mais de 40 anos e somos uma das melhores empresas de importações
                de veículos do mundo. <br/><br/>Começamos em 1880 na Inglaterra e expandimos nossos serviços pelo mundo todo.
                Nosso foco principal é a importação de veículos de Luxo para clientes específicos. 
                </p>
                <img src={car_linha_montagem} alt="Fábrica Antiga"/>
            </div>
            <div className="apresentation">
                <div className="apresentation_subtitle">
                    <h2>Conheça nossas principais importações: </h2>
                    <h5>Logo abaixo, você poderá ver nossas melhores linhas de importação.</h5>
                </div>
                <div className="marcas">
                    <h2>Nossas principais Marcas:</h2>
                    <div className="img_marcas">
                        <a href="https://www.bugatti.com"><img src={bugatti_logo} alt="Bugatti"/></a>
                        <a href="https://www.ferrari.com/en-BR"><img src={ferrari_logo} alt="Ferrari"/></a>
                        <a href="https://www.jeep.com.br"><img src={jeep_logo} alt="Jeep"/></a>
                        <a href="https://www.lamborghini.com/en-en"><img src={lamborguini_logo} alt="Lamborguini"/></a>
                        <a href="https://www.porsche.com/brazil/pt/"><img src={porsche_logo} alt="Porsche"/></a>
                        <a href="https://www.tesla.com"><img src={tesla_logo} alt="Tesla"/></a>
                    </div>
                </div>
                <div className="galery_img">
                    <h2>Principais Modelos:</h2>
                    <div className="img_cars">
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_1} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Ferrari 458</p>
                            </div>
                        </div>
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_2} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Lamborghini Aventador</p>
                            </div>
                        </div>
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_3} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Terzo Millenio</p>
                            </div>
                        </div>
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_3} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Terzo Eletric</p>
                            </div>
                        </div>
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_4} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Lamborghini Terzo</p>
                            </div>
                        </div>
                        <div className="cars">
                            <div className="car_img">
                                <img src={car_5} alt="Car_1"/>
                            </div>
                            <div className="desc_img">
                                <p>Lamborghini Urus</p>
                            </div>
                        </div>
                    </div>
                    <div className="link_more_images">
                        <a id="link_images" href="https://www.ferrari.com/en-BR">Veja mais</a>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer">
                <div className="logo_empresa">
                    <img src={logo_empresa} alt="Logo"/>
                </div>
                <div className="frame">
                    <p>Abaixo está a localização da nossa Sede na Inglaterra</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4935928.2889158875!2d-2.3278149499999996!3d52.838200449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0xf4e19525332d8ea8!2sInglaterra%2C%20Reino%20Unido!5e0!3m2!1spt-BR!2sbr!4v1672861271034!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>
                </div>
                <div className="redes">
                    <div className="redes_sociais">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><img src={icon_email} alt="E-mail"/>dream_imports@outlook.com</a>
                        <a href="https://web.whatsapp.com"><img src={icon_whatsapp} alt="WhatsApp"/>Nosso WhatsApp</a>
                        <a href="https://www.facebook.com"><img src={icon_facebook} alt="Facebook"/>Nosso Facebook</a>
                        <a href="https://www.instagram.com"><img src={icon_instagram} alt="Instagram"/>Nosso Instagram</a>
                        <a href="#"><img src={icon_telephone} alt="Telefone"/>(33) 9 9999-9999</a>
                    </div>
                    <div className="comentarios">
                        <h2>Queremos ouvir você!</h2>
                        <h3>Deixe um breve comentário sobre seus modelos favoritos.</h3>
                        <div id="form_available">
                            <textarea cols="40" rows="10" placeholder="Escreva aqui..."></textarea>
                            <a href="message_ok.html">Enviar</a>
                        </div>
                    </div>    
                    <div className="redes_exp">
                        <p>Para mais informações e contato, envie uma mensagem de texto no nosso WhatsApp ou E-mail. Responderemos assim que possível.</p>
                        <p>Você também poderá nos visitar em uma das nossas sedes mais próxima de você. Lá haverá uma pessoa qualificada para te atender. </p>
                    </div>
                </div>
                <div className="compl">
                    <p>Tecnology - Imports ©</p>
                </div>
            </div>
        </footer>
    </div> 
  );
}

export default App;