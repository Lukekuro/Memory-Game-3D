import { useState, useEffect } from "react";
import { ContentModal } from '../content/contentmodal';

export const Modal = ({ type, trial }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (type) {
            setIsOpen(true);
        }
    }, [type]);

    return (
        <>
            {isOpen && (
                <ContentModal closemodal={closeModal} trial={trial}/>
            )}
        </>
    );
};
