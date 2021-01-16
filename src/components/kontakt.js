import React from 'react'
import mail from '../images/mail.png'

const Kontakt=()=>{


    return(
        <div className="kontakt">
            <div className="suma">
            <h1>Kontaktirajte nas</h1>
            </div>
            <div className="mail">
                <img src={mail} alt=""/>
                <form>
                    <input type="text" placeholder="Ime"/>
                    <input type="text" placeholder="Prezime"/>
                    <input type="text" placeholder="email"/>
                    <input className="pitanje" type="text" placeholder="Vaše pitanje?"/>
                    <button type="submit">Pošalji poruku</button>
                </form>
            </div>
        </div>
    )
}
export default Kontakt;