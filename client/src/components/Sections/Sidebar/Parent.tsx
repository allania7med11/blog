import { parentSection } from "@/store/section/types";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const Parent: FC<{ extend: boolean, parent: parentSection }> = ({ extend, parent }) => (
    <div className="text-xl space-x-5 py-1 flex">
        <div className="text-xl space-x-5 py-1 flex">
            <FontAwesomeIcon className="mx-1 " icon={faArrowAltCircleLeft} />
        </div>
        {extend && <div>{parent.title}</div>}
    </div>
)
export default Parent