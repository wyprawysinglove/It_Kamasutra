import React from 'react'
import userPhoto from './../../assets/images/user.jpg'
import styles from './users.module.css'

let Users = (props)=>{
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)
        let pages=[]
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
    return(
        <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        <div className={styles.pagenation}>
        {pages.map((p)=>{
            return<span key={p}
            className={(props.currentPage===p && styles.selectedPage).toString()} onClick={()=>{
                // this.props.setCurrentPage(p)
                props.onPageChanged(p)
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
            props.users.map((u)=>{
                return(
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small?u.photos.small:userPhoto} className={styles.userPhoto}></img>
                                {/* <img src={u.photoUrl} className={styles.userPhoto}></img> */}
                            </div>
                            <div>
                                {!u.followed?<button onClick={()=>{props.follow(u.id)}}>Follow</button>:<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>}
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
    )
}

export default Users