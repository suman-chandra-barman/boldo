function ArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        border: "1px solid white",
        color: "black",
        padding: "22px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export default ArrowButton;
