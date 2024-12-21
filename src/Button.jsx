function Button({ children,toggleBtn }) {
  return (
    <>
      <button className="button" onClick={toggleBtn}>{children}</button>
    </>
  );
}

export default Button;
