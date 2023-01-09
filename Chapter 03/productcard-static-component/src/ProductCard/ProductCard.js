import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
	const calcPrice = () => Math.floor(props.mrp * (1 - props.discount / 100));
	return (
		<div className={classes.ProductCard}>
			<img
				className={classes.ProductImage}
				src={props.thumbnail}
				alt={props.title}
			/>
			<h3 className={classes.Brand}>{props.brand}</h3>
			<h3 className={classes.ProductName}>{props.title}</h3>
			<div className={classes.PriceWrapper}>
				<p className={classes.ActualPrice}>{`Rs. ${calcPrice()}`}</p>
				<p className={classes.MRP}>{`Rs. ${props.mrp}`}</p>
				<p className={classes.Discount}>{`(${props.discount}% OFF)`}</p>
			</div>
		</div>
	);
};

export default ProductCard;
