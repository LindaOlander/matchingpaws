import React from 'react';

const Quiz = () => {
    return (
        <>
            <div style={{height: "100vh", backgroundColor: "rgb(8, 29, 41)", padding: "0 10px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}}>
                <h1 style={{color: "#222222", margin: "0"}}>Hitta din bästa vän</h1>
                <p>Låt våra algoritmer identifiera lämpliga matchingar till dig</p>
                <a href="#question1"><button className="button" style={{textAlign: "center"}}>Starta</button></a>
            </div>
            {/* Fråga 1 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question1">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 1a*/}
                            <input type="radio" name="1" id="1a" value="1a" />
                            <label htmlFor="1a">Jag anser mig kunnig inom hundar och har erfarenhet från att hantera många olika typer av hundar och personlighet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 1b*/}
                            <input type="radio" name="1" id="1b" value="1b" />
                            <label htmlFor="1b">Jag har haft fullt ansvar för en hund tidigare</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 1c*/}
                            <input type="radio" name="1" id="1c" value="1c" />
                            <label htmlFor="1c">Jag har inte haft hund själv, men har hjälpt vänner och familj med deras hundar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 1d*/}
                            <input type="radio" name="1" id="1d" value="1d" />
                            <label htmlFor="1d">Jag har ingen tidigare hunderfarenhet</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "30px"}}>
                        <a href="#question2"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
                </div>
            {/* Fråga 2 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question2">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilket alternativ beskriver bäst din fysiska förmåga?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 2a*/}
                            <input type="radio" name="2" id="2a" value="2a" />
                            <label htmlFor="2a">Jag är stark och kan hålla emot även tyngre starka hundar om det behövs</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 2b*/}
                            <input type="radio" name="2" id="2b" value="2b" />
                            <label htmlFor="2b">Jag skulle beskriva min fysiska förmåga som normal</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 2c*/}
                            <input type="radio" name="2" id="2c" value="2c" />
                            <label htmlFor="2c">Jag har vissa fysiska begränsningar som gör att jag inte är lämplig som ägare till starkare hundar</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question1"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question3"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 3 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question3">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Jag...</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 3a*/}
                            <input type="radio" name="3" id="3a" value="3a" />
                            <label htmlFor="3a">Kan bo med en hund som fäller päls</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 3b*/}
                            <input type="radio" name="3" id="3b" value="3b" />
                            <label htmlFor="3b">Kan <b>inte</b> bo med en hund som fäller päls</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question2"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question4"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 4 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question4">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vissa av hundarna som omplaceras via oss kan tycka att barn är lite läskiga. Hur mycket skulle en hund som flyttar in hos dig träffa barn?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 4a*/}
                            <input type="radio" name="4" id="4a" value="4a" />
                            <label htmlFor="4a">Vardagligen i hemmet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 4b*/}
                            <input type="radio" name="4" id="4b" value="4b" />
                            <label htmlFor="4b">Då och då när besökare kommer över</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 4c*/}
                            <input type="radio" name="4" id="4c" value="4c" />
                            <label htmlFor="4c">Ytterst sällan eller aldrig</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 4d*/}
                            <input type="radio" name="4" id="4d" value="4d" />
                            <label htmlFor="4d">Till en början inte alls men i framtiden vill jag ha barn som jag önskar att min hund kan leva med</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question3"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question5"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 5 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question5">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Hur bor du idag?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 5a*/}
                            <input type="radio" name="5" id="5a" value="5a" />
                            <label htmlFor="5a">I lägenhet i stadsmiljö</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 5c*/}
                            <input type="radio" name="5" id="5c" value="5c" />
                            <label htmlFor="5c">I lägenhet på landet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 5b*/}
                            <input type="radio" name="5" id="5b" value="5b" />
                            <label htmlFor="5b">I villa/radhus på landet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 5d*/}
                            <input type="radio" name="5" id="5d" value="5d" />
                            <label htmlFor="5d">Villa/radhus i stadsmiljö</label>
                        </div>
                        <p><i>* Stadsmiljö = en miljö med grannar och trafik</i></p>
                        <p><i>* Landet = en miljö med få grannar och lite trafik </i></p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question4"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question6"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 6 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question6">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Hur planerar du att få ihop vardagen med din hund?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 6a*/}
                            <input type="radio" name="6" id="6a" value="6a" />
                            <label htmlFor="6a">Hunden kommer att gå på hunddagis</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 6b*/}
                            <input type="radio" name="6" id="6b" value="6b" />
                            <label htmlFor="6b">Hunden kommer följa med till arbetet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 6c*/}
                            <input type="radio" name="6" id="6c" value="6c" />
                            <label htmlFor="6c">Hunden kommer få vara ensam hemma ett par timmar om dagen</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 6d*/}
                            <input type="radio" name="6" id="6d" value="6d" />
                            <label htmlFor="6d">Hunden kommer kunna vara hemma med mig eller annan närstående om dagarna</label>
                        </div>
                        <p><i>* Obs - Utgå från vardagen efter pandemin</i></p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question5"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question7"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 7 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question7">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilken typ av aktiviteter planerar du att göra med din hund?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7a*/}
                            <input type="checkbox" name="7" id="7a" value="7a" />
                            <label htmlFor="7a">Primärt gå som sällskapshund och få stimulans via promenader, aktivitetsövningar och gos</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7b*/}
                            <input type="checkbox" name="7" id="7b" value="7b" />
                            <label htmlFor="7b">Användas i jakt</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7c*/}
                            <input type="checkbox" name="7" id="7c" value="7c" />
                            <label htmlFor="7c">Aktiveras som sportkompis</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7d*/}
                            <input type="checkbox" name="7" id="7d" value="7d" />
                            <label htmlFor="7d">Aktiveras inom sök</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7e*/}
                            <input type="checkbox" name="7" id="7e" value="7e" />
                            <label htmlFor="7e">Aktiveras inom hundsporter, t.ex. agility</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 7f*/}
                            <input type="checkbox" name="7" id="7f" value="7f" />
                            <label htmlFor="7f">Användas som vakthund</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question6"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question8"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 8 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question8">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilken beskrivning passar bäst in på energin i ditt hem?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* 8a*/}
                            <input type="radio" name="8" id="8a" value="8a" />
                            <label htmlFor="8a">I mitt hem är det full fart och fläkt. Mycket besökare och saker som händer hela tiden</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 8b*/}
                            <input type="radio" name="8" id="8b" value="8b" />
                            <label htmlFor="8b">I mitt hem är det lugnt, tryggt och sansat</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question7"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question9"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 9 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question9">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilka av nedanstående utmaningar känner du att du som ägare är villig och kompentent nog att arbeta med?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9a*/}
                            <input type="checkbox" name="9" id="9a" value="9a" />
                            <label htmlFor="9a">Hundaggresivitet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9b*/}
                            <input type="checkbox" name="9" id="9b" value="9b" />
                            <label htmlFor="9b">Hoppar på folk när den hälsar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9c*/}
                            <input type="checkbox" name="9" id="9c" value="9c" />
                            <label htmlFor="9c">Hög intigritet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9d*/}
                            <input type="checkbox" name="9" id="9d" value="9d" />
                            <label htmlFor="9d">Drar i kopplet</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9e*/}
                            <input type="checkbox" name="9" id="9e" value="9e" />
                            <label htmlFor="9e">Kan inte vara ensam hemma</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9f*/}
                            <input type="checkbox" name="9" id="9f" value="9f" />
                            <label htmlFor="9f">Resursförsvar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9g*/}
                            <input type="checkbox" name="9" id="9g" value="9f" />
                            <label htmlFor="9f">Skällig</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* Svar 9h*/}
                            <input type="checkbox" name="9" id="9h" value="9f" />
                            <label htmlFor="9f">Sjukdomstillstånd som kräver regelbunden veterinärvård</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question8"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question10"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 10 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question10">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Finns det katt i hemmet?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* 10a*/}
                            <input type="radio" name="10" id="10a" value="10a" />
                            <label htmlFor="10a">Nej</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 10b*/}
                            <input type="radio" name="10" id="10b" value="10b" />
                            <label htmlFor="10b">Ja</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question9"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question11"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 11 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question11">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Finns det hund i hemmet?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* 11a*/}
                            <input type="checkbox" name="11" id="11a" value="11a" />
                            <label htmlFor="11a">Ja - En eller flera tikar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 11b*/}
                            <input type="checkbox" name="11" id="11b" value="11b" />
                            <label htmlFor="11b">Ja - En eller flera hanar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 11b*/}
                            <input type="radio" name="11" id="11c" value="11c" />
                            <label htmlFor="11c">Nej</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question10"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question12"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 12 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question12">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilket av följande alternativ beskriver bäst din person och syn på hunduppfostran?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* 12a*/}
                            <input type="radio" name="12" id="12a" value="12a" />
                            <label htmlFor="12a">Jag är väldigt mjuk och kärleksfull i mitt umgänge med hundar</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 12b*/}
                            <input type="radio" name="12" id="12b" value="12b" />
                            <label htmlFor="12b">Jag är rak och tydlig men bestämd i min hunduppfostran</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
                        <a href="#question11"><button className="button-small-secondary">Tillbaka</button></a>
                        <a href="#question13"><button className="button-small-primary">Fortsätt</button></a>
                    </div>
                </div>
            </div>
            {/* Fråga 13 */}
            <div style={{height: "90vh", padding: "5vh 20px", display: "flex", justifyContent: "center", alignItems: "center", background: "url(https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60)"}} id="question13">
                <div style={{border: "1px solid black", height: "65vh", minWidth: "255px", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgb(8, 29, 41)", color: "#ffffff"}}>
                    <div>
                        <p style={{fontWeight: "bold", marginTop: "0"}}>Vilken storlek på hund har du möjlighet att ta hand om?</p>
                        <div style={{padding: "10px 0"}}>
                            {/* 13a*/}
                            <input type="checkbox" name="13" id="13a" value="13a" />
                            <label htmlFor="13a">Liten hund (>45 cm mankhöjd)</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 13b*/}
                            <input type="checkbox" name="13" id="13b" value="13b" />
                            <label htmlFor="13b">Mellan stor hund (45-55 cm mankhöjd)</label>
                        </div>
                        <div style={{padding: "10px 0"}}>
                            {/* 13c*/}
                            <input type="checkbox" name="13" id="13c" value="13c" />
                            <label htmlFor="13c">Stor hund (55 cm+ mankhöjd)</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignSelf: "center", marginTop: "30px"}}>
                        <a href="#dogs"><button className="button-highlighted">Se mina matchningar!</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz;