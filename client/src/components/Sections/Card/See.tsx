import { displayUpdate } from "@/actions/section";
import { RootState } from "@/store";
import { Section } from "@/types/section";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


enum CSS {
    button = `text-blue-500 border-blue-700 focus:border-blue-900 focus:outline-none border-2 
    mt-6 inline-block whitespace-nowrap w-40 shadow-md  hover:shadow-xl rounded-lg`,
}
const useSee = (section: Section) => {
    const displayId = useSelector((state: RootState) => state.section.displayId);
    const dispatch = useDispatch();
    const history = useHistory();
    let display = displayId === section.id;
    let view
    if (section.type === "page") {
        view = "Discover more";
    } else {
        view = display ? "View less" : "View more";
    }
    let icon = display ? faArrowLeft : faArrowRight
    let newdisplayId = section.id && !display ? section.id : -1
    const see = () => {
        if (section.type === "section") {
            let elm = document.getElementById(`section${section.id}`); // element you are scrolling to
            dispatch(displayUpdate(newdisplayId))
            var offset = 100; // sticky nav height
            window.scroll({
                top: elm ? elm.offsetTop - offset : offset,
                left: 0,
                behavior: "smooth",
            });
        } else {
            history.push("/lectures/" + section.id)
            window.scrollTo(0, 0);
        }
    }
    return [view, icon, see] as const
}
const See: FC<{ section: Section }> = ({ section }) => {
    const [view, icon, see] = useSee(section)
    return (
        <button onClick={see} className={CSS.button}>
            <span className="px-2">{view}</span>
            <FontAwesomeIcon className="mx-1" icon={icon} />
        </button>)
}

export default See