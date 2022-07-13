import Flex from "./Flex";
import FlexItem from "./FlexItem";
import { attachPropsToComp } from "../_utils/index";

import "../_styles/index";
import "./index.less";

export default attachPropsToComp(Flex, { Item: FlexItem });
