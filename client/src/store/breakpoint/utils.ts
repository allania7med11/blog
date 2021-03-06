
import { useEffect } from "react";
import tailwindConfig from "@/tailwind.config";


const breakpointNames = ["sm", "md", "lg", "xl"] as const ;
const screens = breakpointNames.reduce((acc:{[key:string]:any}, cv) => {
  acc[cv] = parseInt(tailwindConfig.theme.extend.screens[cv].max.slice(0, -2));
  return acc;
}, {});
const getBreakpointUp = (w:number) => {
  let rtn = breakpointNames.reduce((acc:{[key:string]:boolean}, cv:string) => {
    acc[cv] = w >= screens[cv];
    return acc;
  }, {});
  return rtn;
};
const debounce = (fn:Function, wait:number) => {
  let time:any;
  return function (...args:any) {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), wait);
  };
};
const useBreakpoint = (update:Function) => {
  useEffect(() => {
    update(getBreakpointUp(window.innerWidth))
    const calcInnerWidth = debounce(() => {
      update(getBreakpointUp(window.innerWidth));
    }, 500);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  },[]);
};
export default useBreakpoint
