import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Helmet } from "react-helmet";

export function Router() {
  return (
    <Routes>
        
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title className="font-Poppins font-regular">Home - Denilson B. Sousa</title>
                </Helmet>
                <Home/>
              </>
            }
          />
        <Route 
          path="/home"
          element={
            <>
              <Helmet>
                <title className="font-Poppins font-regular">Home - Portfólio</title>
              </Helmet>
              <Home/>
            </>
          }
        />

        <Route 
          path="*" 
          element={
            <>
              <Helmet>
                <title>Página não encontrada - Portfólio</title>
              </Helmet>
              <NotFound />
            </>
          } 
        />
    </Routes>
  );
}
