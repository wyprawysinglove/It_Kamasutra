import axios from 'axios'
import React from 'react'
import styles from './users.module.css'
//import * as axios from 'axios'
import userPhoto from './../../assets/images/user.jpg'

class Users extends React.Component{

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
        let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages=[]
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        return <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        <div className={styles.pagenation}>
        {pages.map((p)=>{
            return<span className={this.props.currentPage===p && styles.selectedPage} onClick={()=>{
                // this.props.setCurrentPage(p)
                this.onPageChanged(p)
            }}>{p}</span>
        })}
        </div>
        {/* <div>
            <span>1</span>
            <span className={styles.selectedPage}>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div> */}
        {
            this.props.users.map((u)=>{
                return(
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small?u.photos.small:userPhoto} className={styles.userPhoto}></img>
                                {/* <img src={u.photoUrl} className={styles.userPhoto}></img> */}
                            </div>
                            <div>
                                {!u.followed?<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>:<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                {/* <div>{u.fullName}</div> */}
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })
        }
    </div>
    }
}


export default Users