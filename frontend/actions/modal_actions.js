export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// where I should check ?????
export const openModal = (modal, questionId) => {
    
    return {
        type: OPEN_MODAL,
        questionId: questionId,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};