import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import NavbarBlack from "../../Navbar/NavbarBlack";
import AddDogs from "../../AddDogs/AddDogs";
import AllDogsList from "../../DogList/AllDogsList";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/actions/loginAction";
import { getDogs } from "../../../store/actions/dogAction";
import "./Admin.css";

const Admin = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.inLoggedUser);
  const fetchedDogs = useSelector((state) => state.dogs);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const updateState = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submitUser = () => {
    dispatch(login(user.username, user.password));
  };

  const getFetchedDogs = () => {
    dispatch(getDogs());
  };

  // const logout = () => {
  //     dispatch(logout())
  // }

  window.scrollTo(0, 0);
  const alma = require("../../../images/Alma.png");
  const kiros = require("../../../images/Kiros.jpg");
  const kiros2 = require("../../../images/Kiros2.jpg");
  const frodo = require("../../../images/Frodo.png");
  const daisy = require("../../../images/hundarutanhem/daisy.jpeg");
  const sheeba = require("../../../images/hundarutanhem/sheeba.jpeg");
  const rocky = require("../../../images/hundarutanhem/rocky.jpeg");
  const sam = require("../../../images/hundarutanhem/sam.jpeg");
  const rupert = require("../../../images/hundarutanhem/rupert.jpeg");
  const alexa = require("../../../images/hundarutanhem/alexa.jpeg");
  const aries = require("../../../images/hundarutanhem/aries.jpeg");
  const vixey = require("../../../images/hundarutanhem/vixey.jpeg");
  const kobe = require("../../../images/hundarutanhem/kobe.jpeg");
  const swallow = require("../../../images/hundarutanhem/swallow.jpeg");
  const smiler = require("../../../images/hundarutanhem/smiler.jpeg");
  const bumblebee = require("../../../images/hundarutanhem/bumblebee.jpeg");
  const milo = require("../../../images/hundarutanhem/milo.jpeg");
  const luna = require("../../../images/hundarutanhem/luna.jpeg");
  const katie = require("../../../images/hundarutanhem/katie.jpeg");
  const xanti = require("../../../images/hundarutanhem/xanti.jpeg");
  const susana = require("../../../images/hundarutanhem/susana.jpeg");
  const sally = require("../../../images/hundarutanhem/sally.png");
  const dollar = require("../../../images/hundarutanhem/dollar.jpeg");
  const jacek = require("../../../images/hundarutanhem/jacek.jpeg");
  const poker = require("../../../images/hundarutanhem/poker.jpeg");
  const gypsy = require("../../../images/hundarutanhem/gypsy.jpeg");
  const dino = require("../../../images/hundarutanhem/dino.jpeg");
  const poppy = require("../../../images/hundarutanhem/poppy.jpeg");
  const echo = require("../../../images/hundarutanhem/echo.jpeg");
  const vito = require("../../../images/hundarutanhem/vito.jpeg");
  const itaka = require("../../../images/hundarutanhem/itaka.jpeg");
  const kofik = require("../../../images/hundarutanhem/kofik.jpeg");
  const rysio = require("../../../images/hundarutanhem/rysio.jpeg");
  const stormy = require("../../../images/hundarutanhem/stormy.jpeg");
  const czaber = require("../../../images/hundarutanhem/czaber.jpeg");
  const lejk = require("../../../images/hundarutanhem/lejk.jpeg");
  const nero = require("../../../images/hundarutanhem/nero.jpeg");
  const astro = require("../../../images/hundarutanhem/astro.jpeg");
  const budgie = require("../../../images/hundarutanhem/budgie.jpeg");
  const bombaj = require("../../../images/hundarutanhem/bombaj.jpeg");
  const seatibiza = require("../../../images/hundarutanhem/seatibiza.jpeg");
  const fred = require("../../../images/hundarutanhem/fred.jpeg");
  const spike = require("../../../images/hundarutanhem/spike.jpeg");
  const izzie = require("../../../images/hundarutanhem/izzie.jpeg");
  const stark = require("../../../images/hundarutanhem/stark.jpeg");
  const ronin = require("../../../images/hundarutanhem/ronin.jpeg");
  const peppa = require("../../../images/hundarutanhem/peppa.jpeg");
  const kyah = require("../../../images/hundarutanhem/kyah.jpeg");
  const shady = require("../../../images/hundarutanhem/shady.jpeg");
  const max = require("../../../images/hundarutanhem/max.jpeg");
  const chris = require("../../../images/hundarutanhem/chris.jpeg");
  const michael = require("../../../images/hundarutanhem/michael.jpeg");
  const dominique = require("../../../images/hundarutanhem/dominique.jpeg");
  const iris = require("../../../images/hundarutanhem/iris.jpeg");
  const archie = require("../../../images/hundarutanhem/archie.jpeg");
  const mattias = require("../../../images/hundarutanhem/mattias.jpeg");
  const woods = require("../../../images/hundarutanhem/woods.jpeg");
  const olly = require("../../../images/hundarutanhem/olly.jpeg");
  const shay = require("../../../images/hundarutanhem/shay.jpeg");
  const ladygrey = require("../../../images/hundarutanhem/ladygrey.jpeg");
  const tuptus = require("../../../images/hundarutanhem/tuptus.jpeg");
  const mambo = require("../../../images/hundarutanhem/mambo.jpeg");
  const carmen = require("../../../images/hundarutanhem/carmen.jpeg");
  const byczek = require("../../../images/hundarutanhem/byczek.jpeg");
  const leo = require("../../../images/hundarutanhem/leo.jpeg");
  const sol = require("../../../images/hundarutanhem/sol.jpeg");
  const ruairi = require("../../../images/hundarutanhem/ruairi.jpeg");
  const daisy2 = require("../../../images/hundarutanhem/daisy2.jpeg");
  const kevin = require("../../../images/hundarutanhem/kevin.jpeg");
  const derek = require("../../../images/hundarutanhem/derek.jpeg");
  const archie2 = require("../../../images/hundarutanhem/archie2.jpeg");
  const sickan = require("../../../images/hundarutanhem/sickan.jpeg");
  const tess = require("../../../images/Tess.jpg");
  const boston = require("../../../images/Boston.png");

  return (
    <>
      {!loggedInUser.isLoggedIn ? (
        <>
          <NavbarBlack color="black" />
          <div className="contentWrapper centerWrapper loginWrapper">
            <button onClick={getFetchedDogs}>Fetch</button>
            <input
              className="loginInput"
              onChange={updateState}
              name="username"
              type="text"
              placeholder="Användarnamn"
            />
            <input
              className="loginInput"
              onChange={updateState}
              name="password"
              type="password"
              placeholder="Lösenord"
            />
            <button className="button" onClick={submitUser}>
              Logga in
            </button>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="heroNavy">
            <h2 style={{ margin: "0" }}>Admin</h2>
          </div>
          <div className="contentWrapper">
            <div>
              <h2>Publicera en hund</h2>
              <AddDogs />
            </div>
            <div>
              <h2>Bilder</h2>
              <br />
              <div className="dogContainer">
                <div className="dogImageContainer">
                  <h5>Alma</h5>
                  <div className="dogImageWrapper">
                    <img src={alma.default} alt="Alma" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Kiros</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={kiros2.default}
                      alt="Kiros"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Frodo</h5>
                  <div className="dogImageWrapper">
                    <img src={frodo.default} alt="Kiros" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Daisy</h5>
                  <div className="dogImageWrapper">
                    <img src={daisy.default} alt="Daisy" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Sheeba</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={sheeba.default}
                      alt="Sheeba"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Rocky</h5>
                  <div className="dogImageWrapper">
                    <img src={rocky.default} alt="rocky" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Sam</h5>
                  <div className="dogImageWrapper">
                    <img src={sam.default} alt="sam" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Rupert</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={rupert.default}
                      alt="rupert"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Alexa</h5>
                  <div className="dogImageWrapper">
                    <img src={alexa.default} alt="alexa" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Aries</h5>
                  <div className="dogImageWrapper">
                    <img src={aries.default} alt="aries" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Vixey</h5>
                  <div className="dogImageWrapper">
                    <img src={vixey.default} alt="vixey" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Kobe</h5>
                  <div className="dogImageWrapper">
                    <img src={kobe.default} alt="kobe" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Swallow</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={swallow.default}
                      alt="swallow"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Smiler</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={smiler.default}
                      alt="smiler"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Bumble bee</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={bumblebee.default}
                      alt="bumblebee"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Milo</h5>
                  <div className="dogImageWrapper">
                    <img src={milo.default} alt="milo" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Luna</h5>
                  <div className="dogImageWrapper">
                    <img src={luna.default} alt="luna" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Katie</h5>
                  <div className="dogImageWrapper">
                    <img src={katie.default} alt="katie" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Xanti</h5>
                  <div className="dogImageWrapper">
                    <img src={xanti.default} alt="xanti" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Susana</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={susana.default}
                      alt="susana"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Sally</h5>
                  <div className="dogImageWrapper">
                    <img src={sally.default} alt="sally" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Dollar</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={dollar.default}
                      alt="dollar"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Jacek</h5>
                  <div className="dogImageWrapper">
                    <img src={jacek.default} alt="jacek" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Poker</h5>
                  <div className="dogImageWrapper">
                    <img src={poker.default} alt="poker" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Gypsy</h5>
                  <div className="dogImageWrapper">
                    <img src={gypsy.default} alt="gypsy" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Dino</h5>
                  <div className="dogImageWrapper">
                    <img src={dino.default} alt="dino" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Poppy</h5>
                  <div className="dogImageWrapper">
                    <img src={poppy.default} alt="poppy" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Echo</h5>
                  <div className="dogImageWrapper">
                    <img src={echo.default} alt="echo" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Vito</h5>
                  <div className="dogImageWrapper">
                    <img src={vito.default} alt="vito" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Itaka</h5>
                  <div className="dogImageWrapper">
                    <img src={itaka.default} alt="itaka" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Kofik</h5>
                  <div className="dogImageWrapper">
                    <img src={kofik.default} alt="kofik" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Rysio</h5>
                  <div className="dogImageWrapper">
                    <img src={rysio.default} alt="rysio" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Stormy</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={stormy.default}
                      alt="stormy"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Czaber</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={czaber.default}
                      alt="czaber"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Lejk</h5>
                  <div className="dogImageWrapper">
                    <img src={lejk.default} alt="lejk" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Nero</h5>
                  <div className="dogImageWrapper">
                    <img src={nero.default} alt="nero" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Astro</h5>
                  <div className="dogImageWrapper">
                    <img src={astro.default} alt="astro" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Budgie</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={budgie.default}
                      alt="budgie"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Bombaj</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={bombaj.default}
                      alt="bombaj"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Seat & Ibiza</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={seatibiza.default}
                      alt="seatibiza"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Fred</h5>
                  <div className="dogImageWrapper">
                    <img src={fred.default} alt="fred" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Spike</h5>
                  <div className="dogImageWrapper">
                    <img src={spike.default} alt="spike" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Izzie</h5>
                  <div className="dogImageWrapper">
                    <img src={izzie.default} alt="izzie" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Stark</h5>
                  <div className="dogImageWrapper">
                    <img src={stark.default} alt="stark" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Ronin</h5>
                  <div className="dogImageWrapper">
                    <img src={ronin.default} alt="ronin" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Peppa</h5>
                  <div className="dogImageWrapper">
                    <img src={peppa.default} alt="peppa" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Kyah</h5>
                  <div className="dogImageWrapper">
                    <img src={kyah.default} alt="kyah" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Shady</h5>
                  <div className="dogImageWrapper">
                    <img src={shady.default} alt="shady" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Max</h5>
                  <div className="dogImageWrapper">
                    <img src={max.default} alt="max" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Chris</h5>
                  <div className="dogImageWrapper">
                    <img src={chris.default} alt="chris" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Michael</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={michael.default}
                      alt="michael"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Dominique</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={dominique.default}
                      alt="dominique"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Iris</h5>
                  <div className="dogImageWrapper">
                    <img src={iris.default} alt="iris" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Archie</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={archie.default}
                      alt="archie"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Mattias</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={mattias.default}
                      alt="mattias"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Shay</h5>
                  <div className="dogImageWrapper">
                    <img src={shay.default} alt="shay" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Lady Grey</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={ladygrey.default}
                      alt="ladygrey"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Tuptus</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={tuptus.default}
                      alt="tuptus"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Mambo</h5>
                  <div className="dogImageWrapper">
                    <img src={mambo.default} alt="mambo" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Carmen</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={carmen.default}
                      alt="carmen"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Byczek</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={byczek.default}
                      alt="byczek"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Leo</h5>
                  <div className="dogImageWrapper">
                    <img src={leo.default} alt="leo" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Sol</h5>
                  <div className="dogImageWrapper">
                    <img src={sol.default} alt="sol" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Ruairi</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={ruairi.default}
                      alt="ruairi"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Daisy</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={daisy2.default}
                      alt="daisy2"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Kevin</h5>
                  <div className="dogImageWrapper">
                    <img src={kevin.default} alt="kevin" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Derek</h5>
                  <div className="dogImageWrapper">
                    <img src={derek.default} alt="derek" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Archie</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={archie2.default}
                      alt="archie2"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Sickan</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={sickan.default}
                      alt="sickan"
                      className="dogImage"
                    />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Tess</h5>
                  <div className="dogImageWrapper">
                    <img src={tess.default} alt="tess" className="dogImage" />
                  </div>
                </div>
                <div className="dogImageContainer">
                  <h5>Boston</h5>
                  <div className="dogImageWrapper">
                    <img
                      src={boston.default}
                      alt="boston"
                      className="dogImage"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Hundar</h2>
              <h5>Alla hundar i Matchings Paws databas</h5>
              <AllDogsList />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
