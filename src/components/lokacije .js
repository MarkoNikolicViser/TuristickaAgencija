import React from 'react'
import tara from '../images/tara.jpg'
import kop from '../images/kop.jpg'
import divcibare from '../images/divcibare.jpg'
import zlatibor from '../images/zlatibor.png'



const Lokacije=()=>{

    return(
            <div className="lokacije">
                <h1>Destinacije za odmor</h1>
               <div className="cards">
                <div className="card">
                    <h2>Divčibare</h2>
                    <div className="flx">
                    <img src={divcibare} alt=""/>
                    <p>
                    Divčibare kao značajna turistička destinacija valjevskog kraja danas
                     je u mogućnosti svim posetiocima da obezbedi sve sadržaje, koji su
                      potrebni da se lepo provedu i dožive jednu drugačiju vrstu odmora,
                       koju će dugo pamtiti. Odmor na Divčibarama možete provesti u hotelima
                        kojih u ovim krajevima ima dovoljno da prime sve turiste koji svoje
                         dane odmora žele da provedu baš ovde na Divčibarama.
                    </p>
                    </div>
                    <div className="test">
                  <h3>  <a target="blank" href="https://www.booking.com/city/rs/divcibare.sr.html">Istraži</a></h3>
                    </div>
                </div>
                <div className="card">
                    <h2>Tara</h2>
                     <div className="flx">
                    <img src={tara} alt=""/>         
                    <p>
                    Na jednom od najlepših delova Tare, na Kaluđerskim barama nalazi
                     se Vojna ustanova “Tara” u čijem su sastavu hoteli “Omorika” i
                      “Beli Bor”, depadans “Javor” i Nacionalna kuća “Jeremičak”.
                       Hotel “Omorika” sagrađen je 1977. godine, raspolaže sa 420
                        ležaja i poseduje bazen, saunu, trim kabinet, sale za stoni
                         tenis i bilijar, disko-klub i terene za razne sportove.
                          Pogodan je za letnji, zimski i kongresni turizam, kao
                           i za pripreme sportista.
                    </p>
                    </div>
                    <div className="test">
                    <h3>  <a target="blank" href="https://www.booking.com/apartments/region/rs/tara-planina.sr.html">Istraži</a></h3>
                    </div>
                </div>
                <div className="card">
                    <h2>Kopaonik</h2>
                    <div className="flx">
                    <img src={kop} alt=""/>
                    <p>
                    Danas je na Ravnom Kopaoniku veliki turistički planinski centar,
                     sa brojnim smeštajnim kapacitetima, sistemom smučarskih staza i 
                     žičara i drugom infrastrukturom. Drugi takav kompleks se razvija 
                     kod sela Brzeća na istočnoj padini, gde u hotelima, apartmanima i
                      kućama ima oko 1.000 ležaja. Planinski dom je podignut još 1935.
                 
                    </p>
                  </div>
                  <div className="test">
                  <h3>  <a target="blank" href="https://www.booking.com/city/rs/kopaonik.en.html?aid=1610684;label=kopaonik-SyATP95URALEAWpyYnEgDgS380966955287:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-294889292533:kwd-319749909332:lp1028595:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gclid=CjwKCAiAuoqABhAsEiwAdSkVVP7MH4auJ17iWRx8UUdHL0oWq2Kv-WxUBoIun8pNINtve-RMIZHnDRoC4dgQAvD_BwE">Istraži</a></h3>
                    </div>
                </div>
                <div className="card">
                    <h2>Zlatibor</h2>
                    <div className="flx">
                    <img src={zlatibor} alt=""/>
                <p>Zlatibor je područje izuzetnih prirodnih karakteristika.
                  Na jugu se prostire gotovo do Nove Varoši,
                       između reka Sušica i Uvac. Zlatibor je prostrana zatalasana visoravan
                        i područje visokih planina, borovih šuma i pašnjaka. Takođe, Zlatibor je bogat speleološkim
                          odlikama. Ovde se nalaze 98 pećina i 44 jame, kao i veliki broj vodopada
                           i izvora. Najveće pećine su Stopića pećina, Rakovička i Mumlava. Jedan 
                           od najlepših i najvećih vodopada u Srbiji nalazi se u selu Gostilju. 
                          </p>
                 </div>
                 <div className="test">
                 <h3>  <a target="blank" href="https://www.booking.com/city/rs/zlatibor.en.html?aid=1610684;label=zlatibor-LpliSLQP83ykAwfpOsGbEgS379671837011:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-294889292533:kwd-317659220793:lp1028595:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0;ws=&gclid=CjwKCAiAuoqABhAsEiwAdSkVVLRI8nWjuqWTdI9xxa-cT-7bGtDOSU2P5XWADO7A4KaPAZOCV1kSmhoCOzMQAvD_BwE">Istraži</a></h3>
                    </div>
               </div>
                </div>
            </div>
    )
}
export default Lokacije;