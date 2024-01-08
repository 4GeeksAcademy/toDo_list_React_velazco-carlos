import React, { useState } from "react";




const Home = () => {

	const [add, setAdd] = useState("");
	const [list, setList] = useState(JSON.parse(localStorage.getItem("myList")) || []);
	const [hoverIndex, setHoverIndex] = useState("");
	const [remainingItems, setRemainingItems] = useState(list.length);

	
	function keyIntro(e) {
		
		// e.preventDefault();
		// console.log(e.keyCode);
		let aux = []
		if (e.keyCode === 13) {
			aux = list.concat(add);
			setList(list.concat(add));
			setAdd("");
			setRemainingItems(aux.length);
			
			localStorage.setItem('myList', JSON.stringify(aux));
		}

	};

	function removeItem(index) {
		const updatedList = [...list];
		updatedList.splice(index, 1);
		setList(updatedList);
		localStorage.removeItem("myList");
		localStorage.setItem('myList', JSON.stringify(updatedList));
		setRemainingItems(updatedList.length);


	}





	return (
		<div className="text-center container mt-5 text-bg-secondary p-3">

			<div className="mb-3 ">
				<h1>TODOS</h1>

				<input type="text" className="form-control  " value={add} placeholder="add a element" onChange={(e) => setAdd(e.target.value)} onKeyDown={keyIntro} />

			</div>

			<div>
				<ul className="list-group ">
					{list.length > 0? list.map((item, index) =>
						<li
							className="d-flex justify-content-between list-group-item text-bg-secondary"
							key={index}
							onMouseEnter={() => setHoverIndex(index)}
							onMouseLeave={() => setHoverIndex(null)}
						>
							{item}
							{hoverIndex === index && (
								<button onClick={() => removeItem(index)}>X</button>
							)}
						</li>
					) : "no hay tareas"}
				</ul>
				<p>{remainingItems} items remaining</p>
			</div>

		</div>
	);

};

export default Home;
