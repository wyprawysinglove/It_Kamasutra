import React from 'react'

export const AddClass = (Component,ClassName)=>{
    return(props)=>{
        return(
            <div className={ClassName}>
                <Component></Component>
            </div>
        )
    }
}