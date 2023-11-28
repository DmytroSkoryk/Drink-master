import UserRoutes from "./UserRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <UserRoutes />
    </>
  );
};

export default App;
