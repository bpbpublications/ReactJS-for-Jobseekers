import React from 'react';
import classes from './Homepage.module.css';

class Homepage extends React.Component {
    render() {
        return(
            <div className={classes.MainContainer}>
                <section className={classes.First} onClick={() => this.props.updateLikes(1)}>Increment + 1</section>
                <section className={classes.Second} onClick={() => this.props.updateLikes(20)}>Increment + 20</section>
                <section className={classes.Third} onClick={() => this.props.updateLikes(-1)}>Decrement - 1</section>
                <section className={classes.Fourth} onClick={() => this.props.updateLikes(-10)}>Decrement - 10</section>
            </div>
        );
    }
}

export default Homepage;