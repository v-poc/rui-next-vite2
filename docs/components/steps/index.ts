import { Steps } from "./Steps";
import { Step } from "./Step";
import { attachPropsToComp } from "../_utils/index";

// import "../_styles/index";
import "./index.less";

export type { StepsProps } from "./Steps";
export type { StepProps } from "./Step";

export default attachPropsToComp(Steps, { Item: Step });
