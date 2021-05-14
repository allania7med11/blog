import { Section } from "@/store/section/types"
import { FC } from "react"
type props = { section: Section, extend: boolean, index: number }
const Child: FC<props> = ({ section, extend, index }) => {
    return (
        <div className="py-4 hover:text-white cursor-pointer">
            {index + 1}{extend && `.${section.title}`}
        </div>)
}
export default Child