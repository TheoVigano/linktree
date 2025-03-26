import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import "../pages/stylesHome.css";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Github, Instagram, Youtube, Linkedin } from "lucide-react";

export function Home() {
  const { toggleTheme } = useTheme();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/TheoVigano");

        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }
    getUserData();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <img className="image" src={user.avatar_url} alt="" width={112} />

        <h1 className="nome">@{user.login}</h1>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <div className="links">
          <button className="botao">Inscreva-se no ETHO</button>
          <button className="botao">Baixe meu e-book</button>
          <button className="botao">Veja meu trabalho</button>
          <button className="botao">Conheça o Explorer</button>
        </div>
        <div className="icons">
          <a href="https://github.com/TheoVigano"><Github /></a>
          <a href="https://www.instagram.com/"><Instagram /></a>
          <a href="https://www.youtube.com/@EthosMusic2000"><Youtube /></a>
          <a href="https://br.linkedin.com/"><Linkedin /></a>
        </div>
      </div>
    </div>
  );
}
