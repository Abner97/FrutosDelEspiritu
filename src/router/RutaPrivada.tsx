import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

interface RutaPrivadaProps {
  Component: React.FC;
  path: string;
}

const RutaPrivada = ({ Component, path, ...props }: RutaPrivadaProps) => {
  const authContext = useContext(AuthContext);

  const { email, name, cargando } = authContext;

  const autenticado: boolean = name !== "" && email !== "";
  // useEffect(() => {
  //   name = localStorage.getItem("Name");
  //   email = localStorage.getItem("Email");
  //   //eslint-disable-next-line
  // }, []);

  return (
    <Route
      exact
      {...props}
      render={(props) =>
        !autenticado && cargando ? <Redirect to="/login" /> : <Component />
      }
    />
  );
};

export default RutaPrivada;
