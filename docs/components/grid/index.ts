import Grid from "./Grid";
import GridItem from "./GridItem";
import { attachPropsToComp } from "../_utils/index";

import "../_styles/index";
import "./index.less";

export default attachPropsToComp(Grid, { Item: GridItem });
