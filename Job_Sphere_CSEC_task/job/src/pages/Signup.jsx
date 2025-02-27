import { useStepper } from "../stores/stepper";
import Personalinfo from "./Signup/Personalinfo";
import Handleinfo from "./Signup/Handlesinfo";
import Credentialinfo from "./Signup/Credentialinfo";
import { Reviewinfo } from "./Signup/Reviewinfo";

const steps = [
  <Personalinfo key="personalinfo" />,
  <Handleinfo key="handleinfo" />,
  <Credentialinfo key="credentialinfo" />,
  <Reviewinfo key="reviewinfo" />,
];
const Signup = () => {
  const { count } = useStepper();

  return <div>{steps[count]}</div>;
};

export default Signup;
