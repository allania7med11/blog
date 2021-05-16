import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { FC, useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import CSS from "@/assets/css/editor.module.scss"
import htmlToDraft from 'html-to-draftjs';
import uploadImageCallBack from '@/store/section/utils';
type props = { html: string, onChange: (html: string) => void }
const EditorInput: FC<props> = ({ html, onChange }) => {
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
    );
    const initial = EditorState.createWithContent(contentState);
    const [editor, setEditor] = useState(initial);
    const onEditorStateChange = (editorState: EditorState) => {
        setEditor(editorState);
        onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    };
    return (<div>
        <Editor
            editorState={editor}
            wrapperClassName={CSS.wrapper}
            editorClassName={CSS.editor}
            toolbarClassName={CSS.toolbar}
            onEditorStateChange={onEditorStateChange}
            toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
            }}
        />
    </div>)
}

export default EditorInput;