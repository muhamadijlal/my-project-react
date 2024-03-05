import { useEffect, useState } from "react";

const Content = ({ children }) => {
  return <div className="my-[150px] space-y-16">{children}</div>;
};

const Title = ({ first, second }) => {
  return (
    <>
      <h1 className="text-2xl font-thin uppercase tracking-[15px] tablet:text-5xl">
        {first}
        <span className="block font-bold">{second}</span>
      </h1>
    </>
  );
};

const Column = ({ children, styles }) => {
  return (
    <div
      className={`grid-c0ls-1 my-[150px] grid gap-10 tablet:grid-cols-2 ${styles} `}
    >
      {children}
    </div>
  );
};

Content.Title = Title;
Content.Column = Column;

export default Content;
