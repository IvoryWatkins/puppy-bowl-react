import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function NewPlayerForm() {

    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('')

    const navigate = useNavigate()

    function clearForm() {
        setName('')
        setBreed('')
        setStatus('')
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const payload = {
            name,
            data: {
                price,
                color
            }
        }

        try{
            const { data } = await axios.post(`https://fsa-puppy-bowl.herokuapp.com/api/IvoryWatkins/players/`, payload)

            console.log('ADD PLAYER', data)
            navigate('/allplayers')

        } catch (err) {console.error(err)}
    }

    console.table({ name, breed, status })
    return(
        <form onSubmit={handleSubmit}>
            <label>Player Name:
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Breed:
                <input value={breed} onChange={(e) => setBreed(e.target.value)}/>
            </label>
            <label>Status:
                <input value={status} onChange={(e) => setStatus(e.target.value)}/>
            </label>

            <button type="button" onClick={clearForm}>Clear Form</button>
            <button type="submit">Add Player</button>
        </form>
    )
}

export default NewPlayerForm