import btn from "@/assets/css/btn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useEffect } from "react";
import { currentCreate, extendUpdate } from "@/actions/section";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Form from "./Form";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import { upUpdate } from "@/actions/breakpoint";
import { debounce, getBreakpointUp } from "@/hooks/useBreakpoint";

enum CSS {
  shadow = "z-10 w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-25",
}
const Sections: FC = () => {

  let { id } = useParams<{ id: string }>();
  const [show, margin, shadow] = useSelector((state: RootState) => {
    const { show, extend } = state.section;
    const up = state.breakpoint.up;
    const shadow = extend && !up.sm;
    const margin = extend && up.sm ? "ml-px220" : "ml-14";
    return [show, margin, shadow] as const;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let BreakpointUp = getBreakpointUp(window.innerWidth)
    dispatch(upUpdate(BreakpointUp))
    if(!BreakpointUp.sm){
      dispatch(extendUpdate())
    }
    const calcInnerWidth = debounce(() => {
      let BreakpointUp = getBreakpointUp(window.innerWidth)
      dispatch(upUpdate(BreakpointUp))
    }, 500);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, [dispatch]);
  return (
    <div>
      <Sidebar />
      {shadow && <div className={CSS.shadow} onClick={() => dispatch(extendUpdate())}></div>}
      {show && <Form />}
      <div className={margin}>
        <button
          onClick={() => dispatch(currentCreate("page", id))}
          className={`${btn.btn} bg-primary`}
        >
          <FontAwesomeIcon className="mx-1" icon={faPlus} />
          New page
        </button>
        <button
          onClick={() => dispatch(currentCreate("section", id))}
          className={`${btn.btn} bg-primary`}
        >
          <FontAwesomeIcon className="mx-1" icon={faPlus} />
          New section
        </button>
        <Cards />
      </div>
    </div>
  );
};

export default Sections;
