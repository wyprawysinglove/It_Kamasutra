import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, currentPageAC, setUsersTotalCountAC } from '../../redux/UsersReducer'
//import UsersAPIComonent from './UsersAPIComonent'
import Users from './Users.js'
import axios from 'axios'


class UsersContainer extends React.Component{

    // constructor(props){
    //     super(props)
        
    // }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    // getUsers=()=>{
    //     if (this.props.users.length===0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    //             // console.log(response)
    //             // debugger
    //             this.props.setUsers(response.data.items)
    //         })
    //      }
    // }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return <Users
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            ></Users>
    }
}


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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)