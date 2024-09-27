export const ContentModal = ({closemodal, trial}) => {
    return (
        <div className="modal">
            <div className="container">
                <div onClick={closemodal} className="modal__overlay"></div>
                <div className="modal__inner">
                    <div className="modal__content">
                        <h2>Gratulacje! Sparowałeś wszystkie karty!</h2>
                        <span>Wykonałeś {trial} ruchy</span>
                        <span onClick={closemodal} className="modal__close js-modal-close"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
