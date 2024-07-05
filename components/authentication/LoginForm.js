import React, { useState } from "react";
import Link from "next/link";
import InputForm from "../InputForm";
import PasswordForm from "../PasswordForm";
import { Form } from "formik";

const LoginForm = () => {
	//Logic
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Form className='z-10'>
			<div className='flex flex-col mb-4'>
				<label htmlFor='text' className='text-sm mb-2 font-semibold'>
					Username
				</label>
				<InputForm
					name='username'
					type='text'
					id='text'
					placeholder='@JohnDoe'
				/>
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='password' className='text-sm mb-2 font-semibold'>
					Password
				</label>
				<div className='relative'>
					<PasswordForm
						name='password'
						type={showPassword ? "text" : "password"}
						id='password'
						placeholder='Password'
						showPassword={showPassword}
						togglePassword={togglePassword}
					/>
				</div>
			</div>
			<div className='flex justify-between items-center mb-6'>
				<div className='flex flex-row items-center justify-center'>
					<input className='mr-1' type='checkbox' />
					<span className='text-xs font-semibold'>Remember Me</span>
				</div>
				<div className='flex items-center '>
					<p className='text-xs font-medium'>No account yet?</p>
					<Link href='/signup' as='/signup'>
						<a className='text-xs font-medium text-blue-600 ml-1'>Register</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<button
					type='submit'
					className=' mb-4 w-full bg-input-border text-white px-2 py-4 rounded-md'>
					Login
				</button>
				<Link href=''>
					<a className='text-blue-600 text-sm'>Forgot password?</a>
				</Link>
			</div>
		</Form>
	);
};

export default LoginForm;
