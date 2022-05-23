import {useState} from "react"

const PlaylistModal = () => {

    const [playlist, setPlaylist] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);


    const inputHandler = (event) => {
        setPlaylist(event.target.value)
    }
    const buttonHandler = () => {
        setNewPlaylist((userplaylist) => {
            return [...userplaylist, playlist];
        });

        setPlaylist("");
    }
  return(
      <>
      <p> create playlist</p>
        <input 
        type="text"
        value={playlist}
        onChange={inputHandler}
        placeholder="create a playlist"
        
        />

       <button onClick={buttonHandler}> add</button>     


       {newPlaylist.map((items,id) => {
           return(
               <div key={id}> 
                    <h3> {items} </h3>
               </div>
               
           )
       })}

      </>
  )
}
export {PlaylistModal}