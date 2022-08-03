import React from "react";

function MyPage() {
  return (
    <div className="all-cards">
      <h1>My Saved Recipes</h1>
      <div className="card">
        <img src="../images/screwdriver.webp" alt="A screwdriver, the drink not the tool"></img>
        <div className="card-container">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
        </div>
      </div>
      <div className="card">
        <img src="../images/screwdriver.webp" alt="A screwdriver, the drink not the tool"></img>
        <div className="card-container">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
        </div>
      </div>
      <div className="card">
        <img src="../images/screwdriver.wep" alt="A screwdriver, the drink not the tool" ></img>
        <div className="card-container">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
        </div>
      </div>
    </div>
    
  );
};

export default MyPage;
