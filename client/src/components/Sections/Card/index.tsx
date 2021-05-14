import { currentUpdate } from "@/store/section/actions";
import { Dispatch, Section } from "@/store/section/types";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import Body from "./Body";
import See from "./See";

enum CSS {
    card = "text-left relative m-2  p-6  w-full  mx-auto bg-white rounded-xl shadow-md  flex flex-col",
    icon = "btn  px-1 py-1 hover:text-gray-800 outline-none"
}
const useCard = (section:Section,dispatch:Dispatch) => {
    const update = () => dispatch(currentUpdate({action:"update",section}))
    const dlt = () => dispatch(currentUpdate({action:"delete",section}))
    return [update,dlt] as const
}

const Card: FC<{ section: Section }> = ({ section }) => {
    const dispatch = useDispatch();
    const [update,dlt] = useCard(section,dispatch)
    return (
        <div className={CSS.card} id={`section${section.id}`} >
            <div className="absolute top-0 right-0 px-2 py-1 text-gray-600">
                <button onClick={update}  className={CSS.icon}>
                    <FontAwesomeIcon className="mx-1" icon={faPencilAlt} />
                </button>
                <button onClick={dlt} className={CSS.icon}>
                    <FontAwesomeIcon className="mx-1" icon={faTrash} />
                </button>
            </div>
            <div className="text-lg text-gray-600  flex py-2">{section.title}</div>
            <Body section={section}  />
            <See section={section}  />
        </div>
    );
};
export default Card;
