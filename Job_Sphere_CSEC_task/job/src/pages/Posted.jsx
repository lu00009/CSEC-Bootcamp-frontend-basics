import { useStepperPost } from "../stores/stepperPost";
import { PJob } from "./PostJObs/pJob";
import Post1 from ".//PostJObs/Post1";
import Post2 from "./PostJObs/Post2";

const steps = [
  <Post1 key="post1" />,
  <Post2 key="post2" />,
  <PJob key="pjob" />,


  
];
const Posted = () => {
  const { count } = useStepperPost();

  return <div className="mt-44 ml-40 absolute">{steps[count]}</div>;
};

export default Posted;
