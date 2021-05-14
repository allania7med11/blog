import { RootState } from "@/store";
import { Section } from "@/store/section/types";
import { FC } from "react";
import { useSelector } from "react-redux";

const Body: FC<{ section: Section }> = ({ section }) => {
    const displayId = useSelector((state: RootState) => state.section.displayId);
    if (displayId !== section.id && section.description) {
        let text =
            section.description.length > 500
                ? section.description.slice(490) + "..."
                : section.description;
        return <p className="text-sm px-2 text-gray-800">{text}</p>;
    }
    return <div>{section.body}</div>
};
export default Body