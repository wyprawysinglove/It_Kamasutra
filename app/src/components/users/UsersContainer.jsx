import React from 'react'
import { connect } from 'react-redux'
import Users from './Users.js'
import axios from 'axios'
import Preloader from '../common/preloader/Preloader'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/UsersReducer.js'


class UsersContainer extends React.Component{

    // constructor(props){
    //     super(props)
        
    // }
    componentDidMount(){
        //debugger
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
           // debugger
            this.props.toggleIsFetching(false)
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
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        
        return <>
            {this.props.isFetching?<Preloader></Preloader>:null}
            
            <Users
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            ></Users>
        </>
    }
}


let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

// let mapDispatchToProps=(dispatch)=>{
//     return{
//         follow: (userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(currentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount)=>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching)=>{
//             dispatch(toggleFetchingAC(isFetching))
//         },
//     }
// }

// follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching
export default connect(mapStateToProps, 
    {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
    })(UsersContainer)