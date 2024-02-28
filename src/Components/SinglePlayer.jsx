//import { useState, useEffect } from "react"
//import { useParams } from "react-router-dom"
import axios from "axios"


function SinglePlayer({player}) {

    async function deletePlayer() {
        console.log(player)

        try{

            const{ data } = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/IvoryWatkins/players/`);
            console.log('DELETING:', data)

        } catch (err) {console.error(err)}
    }
    
    return(
        <div key={SinglePlayer.id} className="player-card">
            <h3>{SinglePlayer.name}</h3>
            <button onClick={deletePlayer}>DELETE</button>
        </div>
        
    )
}
export default SinglePlayer