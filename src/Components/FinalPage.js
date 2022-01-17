import React, { useEffect, useState } from "react";
import Arrays from "./Arrays";
import Button from "./Button";
import EventDisplay from "./EventDisplay";
import "../App.css";

const FinalPage = () => {
	const categories = Arrays.categories;
	const subCategories = Arrays.subCategories;
	const tags = Arrays.tag_list;
	let event = 0;
	const [catInd, setCatInd] = useState(0);
	const [subInd, setSubInd] = useState(1);
	const [currentTags, setCurrentTags] = useState([]);
	const [catColorArray, setCatColorArray] = useState([1, 0, 0, 0, 0]);
	const [subColorArray, setSubColorArray] = useState([0, 1, 0]);
	let temp = [];
	for (let i = 0; i < tags.length; i++) {
		temp.push(0);
	}
	const [tagColorArray, setTagColorArray] = useState(temp);

	// const [tagArr,setTagArr]-useState()

	const catFun = (p) => {
		setCatInd(p);
		let arr = [0, 0, 0, 0, 0];
		arr[p] = 1;
		setCatColorArray(arr);
		console.log(catColorArray, "location 1");
	};
	const subFun = (p) => {
		setSubInd(p);
		let arr = [0, 0, 0];
		arr[p] = 1;
		setSubColorArray(arr);
		console.log("location 2");
	};

	const tagFun = (p) => {
		let r = 0;
		let rep = [];
		for (let i = 0; i < currentTags.length; i++) {
			if (tags[p] === currentTags[i]) r = 1;
			else rep.push(currentTags[i]);
		}
		if (r === 0) {
			rep.push(tags[p]);
		}

		let check = temp;
		for (let i = 0; i < rep.length; i++) {
			for (let j = 0; j < tags.length; j++) {
				if (rep[i] == tags[j]) check[j] = 1;
			}
		}

		setTagColorArray(check);
		if (rep.length == tags.length) setTagColorArray(temp);
		setCurrentTags(rep);
	};

	useEffect(() => {}, [catInd, subInd, currentTags]);

	return (
		<div>
			<div className='navbar'>
				{categories.map((txt, i) => {
					return (
						<Button
							padding={20}
							text={txt}
							fun={() => catFun(i)}
							color={catColorArray[i]}
						/>
					);
				})}
			</div>
			<div className='sub-navbar'>
				{subCategories.map((txt, i) => {
					return (
						<Button
							padding={10}
							text={txt}
							fun={() => subFun(i)}
							color={subColorArray[i]}
						/>
					);
				})}
			</div>
			<div className='grid-tag-card'>
				<div className='card-element'>
					<EventDisplay
						category={categories[catInd]}
						subCategory={subCategories[subInd]}
						tags={currentTags}
					/>
				</div>
				<div className='tags'>
					<h3 className='tag-text'>Tags</h3>
					{tags.map((txt, i) => {
						return (
							<Button
								padding={5}
								text={txt}
								fun={() => tagFun(i)}
								color={tagColorArray[i]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FinalPage;
