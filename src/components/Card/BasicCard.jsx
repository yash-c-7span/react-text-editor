const BasicCard = ({ children }) => {
  return (
    <>
      <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4">{children}</div>
      </div>
    </>
  );
};

export default BasicCard;
