export const setdefaultText = () => {
    return async (dispatch) => {
        const apiResponse = await fetch('https://reqres.in/api/users?page=' + Math.floor(Math.random() * 10))
        apiResponse.json().then(result => {
            dispatch({
                type: "APP_ACTION",
                payload: result
            })
        })

    }

}