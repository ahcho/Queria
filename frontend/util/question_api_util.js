export const fetchQuestions = () => {
    return $.ajax({
        method: "GET",
        url: "/api/questions"
    })
};

export const fetchQuestion = (id) => {
     
    return $.ajax({
        method: "GET",
        url: `/api/questions/${id}`
    })
};

export const createQuestion = (formData) => {
  return $.ajax({
    method: "POST",
    url: "/api/questions",
    data: formData ,
    contentType: false,
    processData: false
  });
};

export const updateQuestion = (question) => {
      
    return $.ajax({
        method: "PATCH",
        url: `/api/questions/${question.id}`,
        data: { question }
    })
};

export const deleteQuestion = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/questions/${id}`,
    })
};

///in profile page show all question by a logged in user
// export const fetchUserQuestions = (userId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `api/users/${userId}/questions`
//     })

// }