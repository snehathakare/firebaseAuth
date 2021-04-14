import React from 'react'
import app from '../firebase.js'
import {Button} from 'react-bootstrap'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={() => app.auth().signOut()}>Sign out</Button>
        </div>
    )
}

export default Home
