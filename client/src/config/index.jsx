export const signUpFromControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your email",
    type: "text",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    type: "password",
    componentType: "input",
  },
];

export const signInFromControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your email",
    type: "text",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};
