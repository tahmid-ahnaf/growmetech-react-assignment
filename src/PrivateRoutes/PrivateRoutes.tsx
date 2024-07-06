import { Navigate, useLocation} from "react-router-dom";
import { UserDetails } from "../types";
import { useDialog } from '../Context/DialogContext';

interface IPrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ children }) => {
  const location = useLocation();
  const { setShowDialog } = useDialog();

  const userDetails: UserDetails | null = JSON.parse(
    localStorage.getItem("userDetails") || "null"
  );

  if (userDetails && userDetails.name && userDetails.phone && userDetails.email) {
    return children;
  }
  setShowDialog(true);
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRoutes;
