import classes from "./styles.module.css";

export default function App() {
	return (
		<main className={classes.MainContainer}>
			<div className={classes.ProductCard}>
				<img
					className={classes.ProductImage}
					src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11846944/2020/8/6/448009c3-ea40-462c-bde1-8b23b6ff25041596710361858-HRX-by-Hrithik-Roshan-Men-Jackets-1201596710359343-1.jpg"
					alt="HRX by Hrithik Roshan"
				/>
				<h3 className={classes.Brand}>HRX by Hrithik Roshan</h3>
				<h3 className={classes.ProductName}>Solid Sporty Jacket</h3>
				<div className={classes.PriceWrapper}>
					<p className={classes.ActualPrice}>Rs. 1799</p>
					<p className={classes.MRP}>Rs. 3999</p>
					<p className={classes.Discount}>(55% OFF)</p>
				</div>
			</div>
		</main>
	);
}
