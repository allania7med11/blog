import React, { FC, FormEvent, SyntheticEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faPlus,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateSections, close } from "@/store/section/actions";
import { Dispatch, UpdateInput, UseSection } from "@/store/section/types";
import modal from "@/assets/css/modal.module.scss";
import card from "@/assets/css/card.module.scss";
import form from "@/assets/css/form.module.scss"
import btn from "@/assets/css/btn.module.scss"
import { RootState } from "@/store";
/**
* this is a hook to hundle update current section and submit it to the server
*/
function useSection({ current, action, dispatch }: UseSection) {
    const [state, setState] = useState(current);
    const updateState = (newState: Object) => {
        setState({ ...state, ...newState });
    };
    const title = action === "create" ? `Create new ${current.type}` : `Update ${current.type}`
    const methods = {
        updateSection: ({ target }: UpdateInput) => updateState({ [target.name]: target.value }),
        submit: async (evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            dispatch(updateSections({ action, section: state }))
        },
    };

    return [state, title, methods] as const;
}
/**
* this is a hook to hundle open and close modal
*/
function useModal(dispatch: Dispatch) {
    const modalRef = useRef<HTMLDivElement>(null);
    const updateShow: any = (event: SyntheticEvent) => {
        if (modalRef.current && modalRef.current === event.target) {
            dispatch(close());
        }
    };
    return [modalRef, updateShow] as const;
}
const actionsInf = {
    create: {
        btn: "btn bg-primary",
        icon: faPlus,
        text: "Create",
    },
    update: {
        btn: "btn bg-warning",
        icon: faPencilAlt,
        text: "Update",
    },
    delete: {
        btn: "btn bg-danger",
        icon: faTrash,
        text: "Delete",
    },
};

const Form: FC<{ margin: string }> = ({ margin }) => {
    const { action, current } = useSelector((state: RootState) => {
        let { action, current } = state.section;
        return { action, current };
    });
    const dispatch = useDispatch();
    const [section, title, { updateSection, submit }] = useSection({
        current,
        action,
        dispatch,
    });
    const [modalRef, updateShow] = useModal(dispatch);
    const actionInf = actionsInf[action];
    return (
        <div ref={modalRef} onClick={updateShow} className={modal.modal}>
            <div className={margin}>
                <div className={`${card.card} max-w-4xl z-30`}>
                    <div onClick={() => dispatch(close())} className={card.close}>
                        <FontAwesomeIcon className="mx-1" icon={faTimes} />
                    </div>
                    <form className={form.form} onSubmit={(evt) => submit(evt)}>
                        {action === "delete" ? (
                            <p className="text-center text-2xl">
                                Are you sure you want to delete
                                <span className="font-bold"> {section.title} </span>{section.type}?
                            </p>
                        ) : (
                            <>
                                <div className={form.title}>{title}</div>
                                <label htmlFor="fname">Title:</label>
                                <input
                                    value={section.title}
                                    onChange={updateSection}
                                    type="text"
                                    id="fname"
                                    name="title"
                                    required
                                />
                                <label htmlFor="fdescription">Description:</label>
                                <input
                                    value={section.description}
                                    onChange={updateSection}
                                    type="text"
                                    id="fdescription"
                                    name="description"
                                    required
                                />
                                {
                                    section.type === 'section' && (
                                        <>
                                            <label htmlFor="fbody">Body:</label>
                                            <textarea
                                                value={section.body}
                                                onChange={updateSection}
                                                id="fbody"
                                                name="body"
                                                rows={10}
                                                required
                                            />
                                        </>
                                    )
                                }
                            </>
                        )}
                        <div className="text-center">
                            <button type="submit" className={`${btn.btn} ${actionInf.btn}`}>
                                {actionInf.text}
                                <FontAwesomeIcon className="mx-1" icon={actionInf.icon} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Form;


