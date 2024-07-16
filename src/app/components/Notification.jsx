import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ message }) => {
  const notify = () => toast.success(message);

  return (
    <>
      <ToastContainer />
      {notify()}
    </>
  );
};

export default Notification;
