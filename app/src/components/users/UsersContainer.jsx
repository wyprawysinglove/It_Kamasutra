import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, currentPageAC, setUsersTotalCountAC } from '../../redux/UsersReducer'
import Users from './Users'

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber)=>{
            dispatch(currentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)