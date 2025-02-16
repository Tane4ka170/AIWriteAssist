import { usePrivy } from "@privy-io/react-auth";

const PrivateRoute = ({ children }) => {
  const { authenticated, ready } = usePrivy();
  if (!ready) {
    return <div>Loading...</div>;
  }
  return authenticated ? <div>PrivateRoute</div> : <div>Public Route</div>;
};

export default PrivateRoute;
