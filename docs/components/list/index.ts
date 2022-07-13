import List from "./List";
import ListItem from "./ListItem";
import { attachPropsToComp } from "../_utils/index";

import "../_styles/index";
import "./index.less";

export default attachPropsToComp(List, { Item: ListItem });
