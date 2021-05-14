import { parentSection } from "@/store/section/types";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const Parent: FC<{ extend: boolean, parent: parentSection }> = ({ extend, parent }) => {
    const history = useHistory();
    const id = parent.sectionId ? parent.sectionId : ""
    const seeParent = () => history.push("/lectures/" + id);
    return (
        <div className="text-xl space-x-5 py-1 flex">
            <div onClick={seeParent} className="text-xl hover:text-white space-x-5 py-1 flex">
                <FontAwesomeIcon className="mx-1 " icon={faArrowAltCircleLeft} />
            </div>
            {extend && <div>{parent.title}</div>}
        </div>
    )
}
export default Parent