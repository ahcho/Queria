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

export const createQuestion = (question) => {
    return $.ajax({
        method: "POST",
        url: '/api/questions',
        data: { question }
    })
};

export const updateQuestion = (question) => {
      
    return $.ajax({
        method: "PATCH",
        url: `/api/questions/${question.question_id}`,
        data: { question }
    })
};
//url: `/api/questions/${question.id}`,

export const deleteQuestion = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/questions/${id}`,
    })
};

   ///in profile page show all question by a logged in user
export const fetchUserQuestions = () => {
    return $.ajax({
        method: 'GET',
        url: `api/user/questions`
    })

}