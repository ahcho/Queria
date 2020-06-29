export const fetchAnswers = (questionId) => {
    return $.ajax({
        method: "GET",
        url: `/api/questions/${questionId}/answers`
    })
}
///api/questions/:question_id/answers(.:format)   
//call to get answer by a logged in user
export const fetchUserAllAnswers = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/user/answers/${userId}`
    })
}

export const createAnswer = (answer) => {
    return $.ajax({
        method: "POST",
        url:   `/api/answers`,
        data: { answer }
    })
}

export const updateAnswer = (answer) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/answers/${answer.id}`,
        data: { answer }
    })
}

export const deleteAnswer = (answerId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/answers/${answerId}`
    })
}
// export const fetchQuestion = (id) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/questions/${id}`
//     })
// };