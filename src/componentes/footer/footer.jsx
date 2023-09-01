// para utilizar o componente crie o import na página que deseja
// coloque o nome da pessoa entre <Footer>NomePessoa</Footer
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>MuriloGaliazzi</Footer>
import SocialLink from "../sociallinks/sociallinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>  
      <div>
        <ul>
        <a href="#"> <li>DEVFLIX</li></a>
         <a href="#"> <li>Mvn</li></a>
        <a href="#">  <li>2006-2023</li></a>
        </ul>
      </div>
      <div>
        {" "}
        <ul>
         <a href="#"> <li>Configuração</li></a>
         <a href="#"> <li>Perfil</li></a>
        <a href="#">  <li>notificação</li></a>
        </ul>
      </div>
      <div>
        {" "}
        <ul>
       <a href="#">  <li>Cartão pré-pago</li></a> 
         <a href="#"><li>Impresa</li></a> 
        <a href="#"><li>Termos de uso</li></a>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
