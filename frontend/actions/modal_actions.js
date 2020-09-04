export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, questionId) => {
    
    return {
        type: OPEN_MODAL,
        questionId: questionId,
        modal
    };
};

export const closeModal = (questionId = false) => {
    return {
        type: CLOSE_MODAL,
        questionId: questionId
    };
};