import { displayUpdate } from "@/store/section/actions";
import { Section } from "@/store/section/types"
import { FC } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
type props = { section: Section, extend: boolean, index: number }
const useChild = (section: Section) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const see = () => {
        if (section.type === "section") {
            let elm = document.getElementById(`section${section.id}`); // element you are scrolling to
            dispatch(displayUpdate(section.id ? section.id : -1))
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
    return see

}
const Child: FC<props> = ({ section, extend, index }) => {
    const see = useChild(section)
    return (
        <div onClick={see} className="py-4 hover:text-white cursor-pointer">
            {index + 1}{extend && `.${section.title}`}
        </div>)
}
export default Child