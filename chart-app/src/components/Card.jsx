/* eslint-disable react/prop-types */
const Card = ({ title, desc, imgURL, children }) => {
  return (
    <div className="pt-20 px-5 w-full h-[calc(100vh-56px)] bg-gray-200">
      <div className="w-2/3 h-1/2 mx-auto rounded-lg flex items-center gap-2">
        <div className="space-y-6">
          <h3 className="font-bold text-3xl text-slate-800">{title}</h3>
          <p className="text-slate-500 font-thin text-lg">{desc}</p>
          {children}
        </div>
        <div>
          <img src={imgURL} className="rounded-xl scale-75" alt="shoping" />
        </div>
      </div>
    </div>
  );
};

export default Card;
