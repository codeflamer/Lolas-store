import React from "react";
import { ErrorMessage, useField } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const PasswordForm = (props) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<div className="relative">
				<input
					{...field}
					{...props}
					className={`rounded-md border w-full py-3 md:px-5 px-3 text-sm border-input-border placeholder:text-input-grey outline-0 ${
						meta.touched && meta.error ? "border-red-500" : null
					}`}
				/>
				{props.showPassword ? (
					<FaEyeSlash
						className={"absolute right-4 bottom-4 cursor-pointer"}
						onClick={props.togglePassword}
					/>
				) : (
					<FaEye
						className={`absolute right-4 bottom-4 cursor-pointer`}
						onClick={props.togglePassword}
					/>
				)}
			</div>
			<ErrorMessage
				component='p'
				name={field.name}
				className='text-red-500 text-xs mt-2'
			/>
		</div>
	);
};

export default PasswordForm;
