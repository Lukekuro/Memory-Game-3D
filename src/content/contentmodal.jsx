export const ContentModal = ({closemodal, trial}) => {
    return (
        <div className="modal">
            <div className="container">
                <div onClick={closemodal} className="modal__overlay"></div>
                <div className="modal__inner">
                    <div className="modal__content">
                        <h2>Congratulations! You paired all the cards!</h2>
                        <span>You made {trial} moves</span>
                        <span onClick={closemodal} className="modal__close js-modal-close"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
