
const follow = 'follow'
const unfollow = 'unfollow'
const set_users = 'set_users'

let initialState = {
     users: [
    //     {
    //         id: 1,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
    //         followed: true,
    //         fullName: 'Dmitry',
    //         status: `I'm a boss`,
    //         location: { city: 'Minsk', country: 'Belarus' }
    //     },
    //     {
    //         id: 2,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
    //         followed: true,
    //         fullName: 'Sasha',
    //         status: `I'm a worker`,
    //         location: { city: 'Moskow', country: 'Russia' }
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
    //         followed: false,
    //         fullName: 'Andrew',
    //         status: `I'm a teamleader`,
    //         location: { city: 'Kiev', country: 'Ukraine' }
    //     }
     ]
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case set_users:
            return { ...state, users: [...state.users, ...action.users] }

        default: return state;
    }
}

export const followAC = (userId) => ({ type: follow, userId })
export const unfollowAC = (userId) => ({ type: unfollow, userId })
export const setUsersAC = (users) => ({ type: set_users, users })

export default UsersReducer