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

const Sections: FC = () => {
  let { id } = useParams<{ id: string }>();
  const show = useSelector((state: RootState) => state.section.show);
  const dispatch = useDispatch();
  return (
    <div>
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
      {show && <Form />}
      <Cards />
    </div>
  );
};

export default Sections