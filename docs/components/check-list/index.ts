import CheckList from "./CheckList";
import CheckListItem from "./CheckListItem";
import { attachPropsToComp } from "../_utils/index";

import "../_styles/index";
import "./index.less";

export default attachPropsToComp(CheckList, { Item: CheckListItem });
