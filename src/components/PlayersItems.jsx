function PlayerItems(props) {
  let { item, title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>{item}</li>
      </ul>
    </div>
  );
}

export default PlayerItems;
