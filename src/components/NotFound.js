const NotFound = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-h-100vh"}`}>
      <h2 className="section-title">Not Found</h2>
    </section>
  );
};

export default NotFound;
