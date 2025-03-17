import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import porfileImg from "../assets/perfil.jpg";
import "../pages/stylesHome.css";
export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="body">
      <div className="container">
        <img className="image" src={porfileImg} alt="" width={112} />

        <h1 className="nome">@theo.mp3_</h1>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <div className="links">
          <button className="botao">Inscreva-se no ETHO</button>
          <button className="botao">Baixe League of Legends</button>
          <button className="botao">Veja minhas músicas</button>
          <button className="botao">Conheça Riot Games</button>
        </div>
      </div>
    </div>
  );
}
