import { RootState } from "@/store";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
import { extendUpdate } from "@/actions/section";
enum CSS {
    navbar = "z-20 text-left h-screen text-lg font-medium truncate bg-gray-800 whitespace-nowrap fixed top-12 left-0 flex flex-col pl-4 pb-4 pt-2   text-gray-400"
}
const useExtend = (extend: boolean) => {
    const dispatch = useDispatch();
    let icon = extend ? faTimes : faBars
    let width = extend ? 'w-px220' : 'w-14'
    const update = () => dispatch(extendUpdate())
    return [icon, width, update] as const
}
const Navbar: FC = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const [parent, extend] = useSelector((state: RootState) => {
        const { parent, extend } = state.section
        return [parent, extend] as const
    });
    const [icon, width, update] = useExtend(extend)
    return (
        <div className={`${CSS.navbar} ${width}`}>
            <div onClick={update}>
                <FontAwesomeIcon className="mx-1 hover:text-white" icon={icon} />
            </div>
            {id && <Parent extend={extend} parent={parent} />}
            <hr />
            <div className="max-h-screen pt-2 overflow-y-auto divide-y divide-gray-600">
                {parent.sections.map((section, index) => <Child key={index} section={section} extend={extend} index={index} />)}
            </div>
        </div>
    )
}
export default Navbar