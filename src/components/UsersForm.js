import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faLock, faBirthdayCake } from "@fortawesome/free-solid-svg-icons"


const defaultValues = {first_name:"", last_name:"", email:"", birthday:"", password:""}

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const { register, handleSubmit, reset } = useForm();
	

	useEffect(() =>{
		if (userSelected){
			console.log(userSelected)
				reset(userSelected)
		} else{
			reset(defaultValues);
		}
	},[userSelected, reset])

    const submit = (user) =>{
        //console.log(user)
		
		if(userSelected){
			axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
				.then(() => getUsers())
				deselectUser();
			} else{
			axios.post("https://users-crud1.herokuapp.com/users/", user)
			.then(() => getUsers())
			
		}
		reset(defaultValues)
    }

    return (
		<div className='form'>
			<h1>New User</h1>
        	<form onSubmit={handleSubmit(submit)}>
				<div className='user'>
					<FontAwesomeIcon icon={faUser}/>
					<div info-user> 
						<input type='text' placeholder='first name' id='name-input' {...register("first_name")} />
						<input type='text' placeholder='last name' id='lastname-input' {...register("last_name")} /> 
					</div>
				</div>
        	    
				<div className='mail'>
					<FontAwesomeIcon icon={faEnvelope}/>
					{/*<label htmlFor='email-input'></label>*/}
					<input type='email' placeholder='email' id='email-input' {...register("email")} />
					
				</div>
				
				<div className='lock'>
					<FontAwesomeIcon icon={faLock}/>
					{/*<label htmlFor='password-input'></label>*/}
					<input type="password" placeholder='password' id='password-input' {...register("password")} />
				</div>
        	    
				<div className='birthday'>
				<FontAwesomeIcon icon={faBirthdayCake}/>
					{/*<label htmlFor='birthday'></label>*/}
					<input type='date' id='birthday' {...register("birthday")} />
				</div>
        	    <button type="submit">upload</button>
				{
					userSelected && <button className='hiden-button' onClick={()=>deselectUser}>cancel</button> 
				}
				
			</form>
		</div>
    )
}

export default UsersForm
