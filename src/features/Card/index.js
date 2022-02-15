const Card = ({ height, title, children }) => {
  return (
    <div className={`${height} card rounded-lg bg-white p-6 mx-4 my-8`}>
      <h2 className="card-title text-left">{title}</h2>
      <div className="py-2">
        <hr />
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
};

export default Card;
