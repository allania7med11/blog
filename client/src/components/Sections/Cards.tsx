import { readSections } from "@/store/section/actions";
import { RootState } from "@/store";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Cards: FC = () => {
    const { id } = useParams<{id:string|undefined}>();
    const list = useSelector((state: RootState) => state.section.parent.sections);
    const dispatch = useDispatch();
    useEffect(() => {
        let sectionId = id? Number(id): undefined
        dispatch(readSections(sectionId));
    }, [dispatch,id]);
    return (
        <div className="flex flex-col pb-64"  >
            {list.map((section, key) => <Card section={section} key={key} />)}
        </div>
    )
}
export default Cards


