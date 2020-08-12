import React from 'react'

function Defeat({password}) {
    return (
        <div className="defeat-screen">
            <h1>You lost the game !</h1>
            <h5>Prawdziwe hasło to {password}</h5>
            <button className="reload" onClick={() => { 
                window.location.reload();
            }}>
                Zagraj ponownie
            </button>
        </div>
    )
}

export default Defeat
