import { useState, useEffect } from "react";
import axios from "axios";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
    const navigate = useNavigate
    const [players, setPlayers] = useState ([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchPlayer() {

        try {

            const {data} = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/IvoryWatkins/players/`);
            
            setPlayers(data.data.players);

            } catch (err) {console.error(err);}
        }

        fetchPlayer()
    }, []);

    console.log(players);

    function searchHandler(e) {
        console.log('e.target.value', e.target.value)
        setSearch(e.target.value)
    }

    let filteredPlayers = players
    if (search !== '') {
        filteredPlayers.map((player) => {
            const lowerCasePlayerName = player.name.toLowerCase()
            const lowerCaseSearch = search.toLowerCase()
            return lowerCasePlayerName.includes(lowerCaseSearch)
        })
    }

    if(players.length === 0) {
        return <h1>Loading Puppies...</h1>
    }

    return(
        <main>
            <input name='search' value={search} onChange={searchHandler} />
            {
                filteredPlayers.map((player)=> {
                    return <article key={player.id}>
                        <h2 onClick={() => navigate(`/players/${player.id}`)}>
                            <img src={player.imageUrl} />
                            {player.name}
                        </h2>
                    </article>
                })
            }
        
        </main>
    )
}

export default AllPlayers