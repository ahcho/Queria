export const fetchUser = (userId) => {
    return $.ajax ({
        method: "GET",
        url: `/api/users/${userId}`
    })
}

export const fetchAllUsers = () => {
    
    return $.ajax ({
        method: "GET",
        url: `api/users`
    })
}

export const deleteUser = (userId) => {
    return $.ajax ({
        method: "DELETE",
        url: `/api/users/${user.id}`
    })
}

export const editUser = (formData, userId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}