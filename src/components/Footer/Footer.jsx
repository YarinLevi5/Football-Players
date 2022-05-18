function Footer(props) {
  let { player, title } = props;
  let { year } = player;
  return (
    <div className="footer">
      <h1>{title}</h1>
      <p>
        Year : {year}-{new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
