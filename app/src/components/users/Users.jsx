import axios from 'axios'
import React from 'react'
import styles from './users.module.css'
//import * as axios from 'axios'
import userPhoto from './../../assets/images/user.jpg'

class Users extends React.Component{

    constructor(props){
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            // console.log(response)
            // debugger
            this.props.setUsers(response.data.items)
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

    render(){
        return <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
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