import { throttle } from "../functions/throttle.js";
import { setHeaderHeight } from "../functions/header-height.js";

const headerOnResizeWindow = window.addEventListener('resize', () => { throttle(setHeaderHeight) });

export { headerOnResizeWindow };
