import "./Header.css";
import Title from "../Title";
import jsonTitles from "../../titles.json";
function Header(props) {
  let { nav } = props;
  let { home, player, players } = nav;
  return (
    <div className="header-container">
      {jsonTitles.map((title) => (
        <Title title={title.headerTitle} />
      ))}
      <nav>
        <ul className="list">
          <li data-role="item">{home}</li>
          <li data-role="item">{player}</li>
          <li data-role="item">{players}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
