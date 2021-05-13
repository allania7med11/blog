import btn from "@/assets/css/btn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { currentCreate } from "@/actions/section";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Form from "./Form";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import useBreakpoint from "@/hooks/useBreakpoint";
import { upUpdate } from "@/actions/breakpoint";
import { Breakpoint } from "@/types/breakpoint";

const Sections: FC = () => {
  useBreakpoint((payload: Breakpoint) => dispatch(upUpdate(payload)));
  let { id } = useParams<{ id: string }>();
  const [show, margin, up] = useSelector((state: RootState) => {
    const { show, extend } = state.section
    const up = state.breakpoint.up
    const margin = extend && !up.sm ? "ml-px220" : "ml-14"
    return [show, margin, up] as const
  });
  const dispatch = useDispatch();
  return (
    <div>
      {JSON.stringify(up)}
      <Sidebar />
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
