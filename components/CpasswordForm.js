import React from "react";
import { ErrorMessage, useField } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const CpasswordForm = (props) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<div className='relative'>
				<input
					{...field}
					{...props}
					className={`rounded-md border w-full py-3 md:px-5 px-3 text-sm border-input-border placeholder:text-input-grey outline-0 ${
						meta.touched && meta.error ? "border-red-500" : null
					}`}
				/>
				{props.showCPassword ? (
					<FaEyeSlash
						className='absolute right-3 bottom-4 cursor-pointer'
						onClick={props.toggleCPassword}
					/>
				) : (
					<FaEye
						className='absolute right-3 bottom-4 cursor-pointer'
						onClick={props.toggleCPassword}
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

export default CpasswordForm;
