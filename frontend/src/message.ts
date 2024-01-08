import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = () => {
  toast.success("User Register Successfully!", {
    position: toast.POSITION.TOP_CENTER,
  });
};

const showToastMessageFirstNameEmpty = () => {
    toast.warn("Please Enter First Name!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

const showToastMessageLastNameEmpty = () => {
    toast.warn("Please Enter Last Name!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessageConfirmPasswordEmpty = () => {
    toast.warn("Please Enter Confirm Password!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

const showToastMessageInputFieldEmpty = () => {
  toast.warn("Please Enter Credential!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const showToastMessageEmailFieldEmpty = () => {
  toast.warn("Please Enter Email!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const showToastMessagePasswordFieldEmpty = () => {
  toast.warn("Please Enter Password!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const showToastMessagePasswordConfirmPasswordNotSame = () => {
  toast.warn("Password And Confirm Password Not Same!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const showToastMessageEmailNotFound = () => {
  toast.error("Email Not Found!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export {
  showToastMessage,
  showToastMessageInputFieldEmpty,
  showToastMessageEmailFieldEmpty,
  showToastMessagePasswordFieldEmpty,
  showToastMessagePasswordConfirmPasswordNotSame,
  showToastMessageEmailNotFound,
  showToastMessageFirstNameEmpty,
  showToastMessageLastNameEmpty,
  showToastMessageConfirmPasswordEmpty
};
