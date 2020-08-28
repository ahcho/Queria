export const fetchAnswers = (questionId) => {
       
    return $.ajax({
        method: "GET",
        url: `/api/question/${questionId}/answers`
    })
}
   
//call to get answer by a logged in user
export const fetchUserAllAnswers = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/answers`
    })
}



export const createAnswer = (formData) => {
    

    return $.ajax({
        method: "POST",
        url: `/api/answers`,
        data: formData,
        contentType: false,
        processData: false,
  });
};
// export const createAnswer = (answer) => {
//     return $.ajax({
//         method: "POST",
//         url:   `/api/answers`,
//         data: { answer }
//     })
// }

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
