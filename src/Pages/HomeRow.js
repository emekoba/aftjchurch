import React from "react";
import "./HomeRow.css";

function HomeRow({ image1, image2, image3, text1, text2, text3, bottomText }) {
	return (
		<div id="home_row">
			{bottomText ? (
				<>
					<div className="home_row_type2">
						<div
							className="home_row_img"
							style={{ backgroundImage: `url(${image1})` }}
						/>

						{text1}
					</div>

					<div className="home_row_type2">
						<div
							className="home_row_img"
							style={{ backgroundImage: `url(${image2})` }}
						/>

						{text2}
					</div>

					<div className="home_row_type2">
						<div
							className="home_row_img"
							style={{ backgroundImage: `url(${image3})` }}
						/>

						{text3}
					</div>
				</>
			) : (
				<>
					<div
						className="home_row_img"
						style={{ backgroundImage: `url(${image1})` }}
					>
						{text1}
					</div>

					<div
						className="home_row_img"
						style={{ backgroundImage: `url(${image2})` }}
					>
						{text2}
					</div>

					<div
						className="home_row_img"
						style={{ backgroundImage: `url(${image3})` }}
					>
						{text3}
					</div>
				</>
			)}
		</div>
	);
}

export default HomeRow;
