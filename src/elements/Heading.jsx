function Heading({ children }) {
  return (
    <span className="heading">
      <pre>
        {"  "}
        {"   "}
        {children}
      </pre>
    </span>
  );
}

export default Heading;
