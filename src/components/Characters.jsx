import React from "react";

const Characters = ( {CharacterData = []} ) => {
  return (
    <div className="row">
        {CharacterData.map((item, index) =>(
            <div key={index} className="col mb-5">
                <div className="card" style={{minWidth: "200px"}}>
                    <img src={item.image} alt={item.name} />
                    <div className="card-body"> 
                        <h5 className="card-title">{item.name}</h5>
                        <hr />
                        <p>Location: {item.location.name}</p>
                        <p>Especies: {item.species}</p>
                    </div>
                    
                </div>
            </div>
        ))}
      

      
    </div>
  );
};

export default Characters;
