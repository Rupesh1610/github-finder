import React from 'react';

const User = (props) => {
    return (

        <div className="col col-4 m-2 card" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="avatar" />
            <div className="card-body">
                <h5 className="card-title"> {props.name} </h5>
                <a href={props.account} className="btn btn-primary">More</a>
            </div>
        </div>
    );

}

export default User;

