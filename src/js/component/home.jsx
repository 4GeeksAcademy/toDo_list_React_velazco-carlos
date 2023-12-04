import React, { useState } from "react";




const Home = () => {

	const [add, setAdd] = useState("");
	const [list, setList] = useState([]);
	const [hoverIndex, setHoverIndex] = useState("");
	function keyIntro(e) {

		// e.preventDefault();
		// console.log(e.keyCode);
		if (e.keyCode === 13) {
			setList(list.concat(add))
			setAdd("")

		}

	};

	function removeItem(index) {
		const updatedList = [...list];
		updatedList.splice(index, 1);
		setList(updatedList);
	}





	return (
		<div className="text-center container mt-5">

			<div className="mb-3 ">

				<input type="text" className="form-control" value={add} placeholder="add a element" onChange={(e) => setAdd(e.target.value)} onKeyDown={keyIntro} />

			</div>

			<div>
				<ul>
					{list.map((item, index) =>
						<li
							className="d-flex justify-content-between"
							key={index}
							onMouseEnter={() => setHoverIndex(index)}
							onMouseLeave={() => setHoverIndex(null)}
						>
							{item}
							{hoverIndex === index && (
								<button onClick={() => removeItem(index)}>X</button>
							)}
						</li>
					)}
				</ul>
			</div>

		</div>
	);

};

export default Home;
