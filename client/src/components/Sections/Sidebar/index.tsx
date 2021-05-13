import { RootState } from "@/store";
import { faTimes, faBars, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
enum CSS {
    navbar = "z-20 text-left h-screen text-lg font-medium truncate bg-gray-800 whitespace-nowrap fixed top-12 left-0 flex flex-col pl-4 pb-4 pt-2   text-gray-400"
}
const useNavbar = (extend: boolean) => {
    let icon = extend ? faTimes : faBars
    return [icon] as const
}
const Navbar: FC = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const parent = useSelector((state: RootState) => state.section.parent);
    let extend = true
    const [icon] = useNavbar(extend)
    return (
        <div className={`${CSS.navbar} w-px220`}>
            <div>
                <FontAwesomeIcon className="mx-1 hover:text-white" icon={icon} />
            </div>
            {id && <Parent extend={extend} parent={parent} />}
            <hr />
            <div className="max-h-screen pt-2 overflow-y-auto divide-y divide-gray-600">
                {parent.sections.map((section, index) => <Child key={index} section={section} extend={extend}  index={index} />)}
            </div>
        </div>
    )
}
export default Navbar