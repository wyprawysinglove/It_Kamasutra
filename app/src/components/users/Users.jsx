import React from 'react'
import styles from './users.module.css'

const Users=(props)=>{
    if (props.users.length===0){
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
                followed: true,
                fullName: 'Dmitry',
                status: `I'm a boss`,
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
                followed: true,
                fullName: 'Sasha',
                status: `I'm a worker`,
                location: { city: 'Moskow', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU',
                followed: false,
                fullName: 'Andrew',
                status: `I'm a teamleader`,
                location: { city: 'Kiev', country: 'Ukraine' }
            }
        ])
    }
    
    return <div>
        {
            props.users.map((u)=>{
                return(
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}></img>
                            </div>
                            <div>
                                {!u.followed?<button onClick={()=>{props.follow(u.id)}}>Follow</button>:<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })
        }
    </div>
}

export default Users