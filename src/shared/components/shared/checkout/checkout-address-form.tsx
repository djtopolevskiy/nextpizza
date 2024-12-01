'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormInput, FormTextarea } from '../form'
import { WhiteBlock } from '../white-block'

interface Props {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	const { control } = useFormContext()

	return (
		<WhiteBlock title='3. Адрес доставки' className={className}>
			<div className='flex flex-col gap-5'>
				<FormInput name='address' className='text-base' placeholder='Адрес' />
				{/* <Controller
					control={control}
					name='address'
					render={({ field, fieldState }) => (
						<>
							<AdressInput onChange={field.onChange} />
							{fieldState.error?.message && (
								<ErrorText text={fieldState.error.message} />
							)}
						</>
					)}
				/> */}

				<FormTextarea
					name='comment'
					className='text-base'
					placeholder='Комментарий к заказу'
					rows={5}
				/>
			</div>
		</WhiteBlock>
	)
}
