import classes from "./styles.module.css";

import ClothingCard from "./ProductCard/ProductCard";
import {
	isStringEmpty as checkIfStringEmpty,
	logger
} from "./utils/CommonMethods";

export default function App() {
	if (checkIfStringEmpty("abc")) {
		// code block
	}
	return (
		<main className={classes.MainContainer}>
			<ClothingCard
				thumbnail={
					"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11846944/2020/8/6/448009c3-ea40-462c-bde1-8b23b6ff25041596710361858-HRX-by-Hrithik-Roshan-Men-Jackets-1201596710359343-1.jpg"
				}
				brand={"HRX by Hrithik Roshan"}
				title={"Solid Sporty Jacket"}
				mrp={3999}
				discount={55}
			/>
			<ClothingCard
				thumbnail={
					"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12446056/2021/9/9/d5a1d37a-a720-46d4-a296-feb7f89426e91631181327161FlyingMachineMenOliveGreenSolidBomberJacket1.jpg"
				}
				brand={"Flying Machine"}
				title={"Solid Bomber Jacket"}
				mrp={4799}
				discount={40}
			/>
			<ClothingCard
				thumbnail={
					"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6832195/2021/10/11/64e71ea7-a108-43c1-b76e-8a4865b5a8951633942231951-WROGN-Men-Charcoal-Grey-Solid-Bomber-Jacket-7191633942231240-1.jpg"
				}
				brand={"WROGN"}
				title={"Solid Bomber Jacket"}
				mrp={2799}
				discount={45}
			/>
			<ClothingCard
				thumbnail={
					"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6832081/2018/9/24/1a7fdf66-0187-42cd-bfe2-f49a9db28e7f1537791064966-WROGN-Men-Jackets-681537791063227-1.jpg"
				}
				brand={"WROGN"}
				title={"Solid Biker Jacket"}
				mrp={4399}
				discount={40}
			/>
		</main>
	);
}
