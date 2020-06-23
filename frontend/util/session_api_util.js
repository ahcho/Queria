export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
);

export const login = (user) => { 
    debugger 
    return (
        $.ajax({
            method: 'POST',
            url: '/api/session',
            data: { user }
        })
)
}

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)