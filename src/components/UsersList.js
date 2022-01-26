import React from 'react'
import "../styles/styles.css"
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPencilAlt, faBirthdayCake } from "@fortawesome/free-solid-svg-icons"


const UsersList = ({users, changeUser, getUsers}) => {
    //console.log(user)

    
    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}` )
            .then(() => getUsers()) 
    }

    return (

            <div className='userList'>
                {
                users.map((user)=>(

                    <ul key={user.id}> 
                        <div className='user-info'>
                            <li><h3>{user.first_name} {user.last_name}</h3></li>
                            <li>{user.email}</li>
                            <li><FontAwesomeIcon icon={faBirthdayCake}/>{user.birthday}</li>
                        </div>

                        <div className='buttons'>
                            <button onClick={() => deleteUser(user.id)} ><FontAwesomeIcon icon={faTrash}/></button>
                            <button className='edit' onClick={() => changeUser(user) }><FontAwesomeIcon icon={faPencilAlt}/></button>
                        </div>
                    </ul>    
                    ))
                }
            </div>
    )
}

export default UsersList
