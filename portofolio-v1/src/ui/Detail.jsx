const Detail = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:place-items-center">
      {children}
    </div>
  );
};

const Content = ({ children }) => {
  return <div className="space-y-6">{children}</div>;
};

const Title = ({ first, second }) => {
  return (
    <>
      <h2 className="text-3xl font-thin uppercase tracking-[10px] tablet:text-4xl">
        {first}
        <span className="block font-bold">{second}</span>
      </h2>
    </>
  );
};

Detail.Title = Title;
Detail.Content = Content;

export default Detail;
