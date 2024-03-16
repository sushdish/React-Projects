import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData)
    const myStyle = {color : "red"};  //if we want to add color to the text follow this
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {
        const {id, name, category, image, description} = curElem;
        return (
            <>
            <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle" style={myStyle}>{name}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} />
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div> 
        </> 
        );
    })};
    </section>
    </>
  );
};

export default MenuCard
