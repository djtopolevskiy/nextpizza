import React from "react"

import { Input } from "@/components/ui/input"
import { RangeSlider } from "../ui/range-slider"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox"
import { Title } from "./title"

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={30000}
						defaultValue={0}
					/>
					<Input type='number' min={100} max={30000} placeholder='30000' />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Ингридиенти'
				limit={6}
				defaultItems={[
					{
						text: "Сырный соус",
						value: "1",
					},
					{
						text: "Моццарелла",
						value: "2",
					},
					{
						text: "Чеснок",
						value: "3",
					},
					{
						text: "Солённые огурчики",
						value: "4",
					},
					{
						text: "Красный лук",
						value: "5",
					},
					{
						text: "Томаты",
						value: "6",
					},
				]}
				items={[
					{
						text: "Сырный соус1",
						value: "1",
					},
					{
						text: "Моццарелла1",
						value: "2",
					},
					{
						text: "Чеснок1",
						value: "3",
					},
					{
						text: "Солённые огурчики1",
						value: "4",
					},
					{
						text: "Красный лук1",
						value: "5",
					},
					{
						text: "Томаты1",
						value: "6",
					},
					{
						text: "Сырный соус11",
						value: "1",
					},
					{
						text: "Моццарелла11",
						value: "2",
					},
					{
						text: "Чеснок11",
						value: "3",
					},
					{
						text: "Солённые огурчики11",
						value: "4",
					},
					{
						text: "Красный лук11",
						value: "5",
					},
					{
						text: "Томаты11",
						value: "6",
					},
				]}
			/>
		</div>
	)
}