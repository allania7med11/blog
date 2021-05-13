import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const breakpointNames = ["sm", "md", "lg", "xl"];
const screens = breakpointNames.reduce((acc, cv) => {
  acc[cv] = parseInt(fullConfig.theme.screens[cv].max.slice(0, -2));
  return acc;
}, {});

const getBreakpointUp = (w) => {
  let rtn = breakpointNames.reduce((acc, cv) => {
    acc[cv] = w >= screens[cv];
    return acc;
  }, {});
  return rtn;
};
let debounce = (fn, wait) => {
  let time;
  return function (...args) {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), wait);
  };
};
const useBreakpoint = (update) => {
  useEffect(() => {
    const calcInnerWidth = debounce(() => {
      update(getBreakpointUp(window.innerWidth));
    }, 500);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);
};
export default useBreakpoint;
