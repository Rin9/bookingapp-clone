import { toast } from "react-toastify";

export const toastMaker = (type, data) => {
  switch (type) {
    case "success":
      break;
    case "error":
      return toast.error(data.msg, data.toastConfig);
    default:
      return;
  }
};
