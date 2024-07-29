import {ModalBody, ModalContent, ModalFooter} from "@nextui-org/modal";
import StarterKit from '@tiptap/starter-kit'
import {useEffect} from "react";
import {EditorContent, useEditor} from "@tiptap/react";

export const CreateBoardTipModal = () => {
    const Editor = useEditor({
        extensions: [StarterKit],
        content: '<p>test</p>',
    })
    return(
        <>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <EditorContent editor={Editor} />
                        </ModalBody>
                        <ModalFooter />
                    </>
                )}
            </ModalContent>
        </>
    )
}