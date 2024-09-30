import React from 'react'

function PokemonCard({id, name, img, types}) {
    const idStr = id.toString().padStart(4,'0')
  return (
    <div className="card">
        <h2>#{idStr} {name}</h2>
        <img src={img} alt={name} />
        <div className="typeContainer">
        <div className={"type " + types[0]}>
            {types[0]}
        </div>
        {types.length>1&&
            <div className={"type " + types[1]}>
                {types[1]}
            </div>
        }
        </div>
       
    </div>
  )
}

export default PokemonCard