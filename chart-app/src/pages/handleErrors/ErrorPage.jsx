import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen grid place-content-center place-items-center gap-10">
      <h1 className="text-slate-800 text-4xl font-bold">Oops!</h1>
      <p className="text-slate-600 text-lg">
        Sorry, an unexpected error has occurred.
      </p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;
