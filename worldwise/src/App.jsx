import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import Form from "./components/Form";
import City from "./components/City";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import SpinnerFullPage from "./components/SpinnerFullPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Router>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path={"product"} element={<Product />} />
              <Route path={"pricing"} element={<Pricing />} />
              <Route path={"login"} element={<Login />} />
              <Route
                path={"app"}
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path={"cities"} element={<CityList />} />
                <Route path={"cities/:id"} element={<City />} />
                <Route path={"countries"} element={<CountryList />} />
                <Route path={"form"} element={<Form />} />
              </Route>
              <Route path={"*"} element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
