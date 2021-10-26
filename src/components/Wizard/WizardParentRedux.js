import React, { useState, useEffect } from "react";
import { Step, WizardForm } from "./WizardForm";
import { Link } from "react-router-dom";
import axios from "axios";
import WizardResults from "./WizardResults";
import { WizardLoader } from "./WizardLoader";
import { Event } from "../Tracking/index";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, setDogs } from "../../store/actions/dogAction";
import { login } from "../../store/actions/loginAction";

import "./Wizard.css";

const WizardParent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ dogs: [] });
  const [step, setStep] = useState(0);
  const [match, setMatch] = useState(false);
  const [dogsShown, setDogsShown] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState([]);

  const filteredDogsArray = [
    {
      boende: {
        centralt: false,
        lägenhet: false,
        villaområde: false,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615b4a8af47b2c002828e12a",
      hundnamn: "Poppy",
      beskrivning:
        "Poppy är en liten vacker collieblandras flicka som är väldigt intelligent, nyfiken och har lätt för att lära. Hon har lite grundträning och kan vissa baskommandon, tex att sitta, och är rumsren. Poppy är en liten ängel att ta med på bilturer och kikar snällt ut genom fönstret. Hon är fin i sin kontakt och kommer överens med andra hundar.\n\nPoppy skulle älska att få komma till ett aktivt hem som tar henne med ut på promenader, kanske vandringar och ger henne lite kluriga övningar däremellan. Skulle hon få en hundkompis att leka med skulle hennes lycka vara gjord. Hon behöver bo i ett lugnare område, helst landet.",
      bild: "https://matchingpaws.se/static/media/poppy.ccc2c386.jpeg",
      ras: "Collieblandning",
      alder: "3",
      kastrerad: "ja",
      kontaktnamn: "Yvette Berg Colhoun",
      email: "",
      lank: "https://hundarutanhem.se/hundar/poppy-0842/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "båda",
      storlek: "mellan",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: true,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b4c6df47b2c002828e12b",
      hundnamn: "Echo",
      beskrivning:
        "Det här är lilla Echo med det charmiga underbettet. Han kom till sheltret i Polen 2020 tillsammans med sin kompis Freaka efter att deras ägare insjuknat. Freaka fick ett hem i augusti 2021 och nu söker Echo en familj som ger honom tid, en massa kärlek och gärna en trevlig hundkompis som hjälp att våga öppna upp sig och få uppleva härliga koppelpromenader och annat.\n\nVi tror att Echo skulle må allra bäst om det redan finns en klok och stabil hund i hans nya familj som kan bli hans nya trygghet och förebild nu när han inte längre har Freaka.",
      bild: "https://matchingpaws.se/static/media/echo.6bc463e0.jpeg",
      ras: "Blandras",
      alder: "9",
      kastrerad: "ja",
      kontaktnamn: "Yvette Berg Colhoun",
      email: "",
      lank: "https://hundarutanhem.se/hundar/echo-0607/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "tikar",
      ledarskap: "mjukt",
      storlek: "liten",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b4d6ff47b2c002828e12c",
      hundnamn: "Vito",
      beskrivning:
        "Fina Vito kom till ett shelter i Polen under 2017 och längtar nu efter en fin och trygg tillvaro i ett kärleksfullt hem. Han beskrivs som en lugn och försiktig kille som behöver lära känna dig för att våga sig fram. Erbjuder man honom godis, kan det hela gå lite snabbare. Han är osäker och behöver tid på sig för att känna sig trygg i en ny omgivning och för att våga lita på nya människor, men han låter sig hanteras och rädslan har aldrig slagit över i aggressivitet.\n\nHan söker efter ett tryggt hem och den tid, tålamod och kärlek han så innerligt behöver.",
      bild: "https://matchingpaws.se/static/media/vito.4ab6f13b.jpeg",
      ras: "Blandras",
      alder: "9",
      kastrerad: "ja",
      kontaktnamn: "Yvette Berg Colhoun",
      email: "",
      lank: "https://hundarutanhem.se/hundar/vito-0606/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "mellan",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615b4e3ef47b2c002828e12d",
      hundnamn: "Itaka",
      beskrivning:
        "Vackra Itaka hittades på gatan och har bott på sheltret sen förra året. Hon är en glad, vänlig och människoälskande tjej som uppskattar klappar och närhet. Itaka är inte nervös av sig och stressar inte i onödan. Hon låter sig hanteras utan problem och kan gå i koppel.",
      bild: "https://matchingpaws.se/static/media/itaka.2079b3be.jpeg",
      ras: "Schäferblandning",
      alder: "9",
      kastrerad: "nej",
      kontaktnamn: "Carina Olsson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/itaka-0605/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "hanar",
      ledarskap: "båda",
      storlek: "mellan",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: true,
        kontoret: true,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615b4f2ef47b2c002828e12e",
      hundnamn: "Kofik",
      beskrivning:
        "Kofik har suttit på shelter sedan 2018 då han hittades med ett stort sår på höften. Såret läkte fint och han har inga men av det och om han behandlats illa av människor så har inte det heller satt några spår då Kofik fullkomligt älskar mänskligt sällskap. Klappar, närhet och gos gör honom glad. Han är en positiv herre och när han är glad kan man nästan se honom le! Eftersom han är en äldre senior så behöver han inte mycket mer än att ha en egen gräsmatta att skrutta omkring på och att bli ompysslad av någon han tycker om.",
      bild: "https://matchingpaws.se/static/media/kofik.01d3cb67.jpeg",
      ras: "Blandras",
      alder: "13",
      kastrerad: "ja",
      kontaktnamn: "Yvette Berg Colhoun",
      email: "",
      lank: "https://hundarutanhem.se/hundar/kofik-0550/",
      hunderfarenhet: "ganska",
      fysik: "låg",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "mellan",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: true,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b508df47b2c002828e12f",
      hundnamn: "Rysio",
      beskrivning:
        "Rysio är en hund av mindre storlek och söker en familj som har tiden, kärleken och tålamodet som han behöver. Man vet inget om hans bakgrund men gissningsvis har han haft väldigt liten kontakt med människor eller behandlats illa. Främmande människor skrämmer honom, men han har vågat öppna upp sig för skötarna på sheltret, låter sig klappas försiktigt och visar allt mer att han uppskattar deras sällskap. Rysio är rar men kan bita ifrån om något gör ont på honom vid hantering och ska därför endast placeras i ett hem med vuxna. Han kommer väldigt bra överens med andra hundar och skulle säkert uppskatta en hundkompis i sin nya familj.",
      bild: "https://matchingpaws.se/static/media/rysio.d5f0129d.jpeg",
      ras: "Blandras",
      alder: "10",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/rysio-0530/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "båda",
      ledarskap: "båda",
      storlek: "liten",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: false,
        jakt: false,
        sportkompis: true,
        sök: false,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: true,
        integritet: false,
        drar: true,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b5273f47b2c002828e130",
      hundnamn: "Stormy",
      beskrivning:
        "Stormy är en typiskt härlig tjej av bullras karaktär. En mycket vacker hund med en mjuk och ömsint sida men också stark, kan hoppa och grabba tag i saker med munnen om hon blir ivrig eller frustrerad och hon älskar att leka. \n\nStormy är en tyst tjej som sällan skäller, Hon kan lämnas själv kortare stunder. Hon svarar också fint på den träning rescuet har påbörjat med henne. Just nu pågår koppelträning, detta behöver hon jobba en del på. Hon älskar att vara lös och utforska sina omgivningar på egen hand.",
      bild: "https://matchingpaws.se/static/media/stormy.5b2b2b41.jpeg",
      ras: "Old English Bulldog-blandning",
      alder: "0,5",
      kastrerad: "ja",
      kontaktnamn: "Helen Friberg",
      email: "",
      lank: "https://hundarutanhem.se/hundar/stormy-0698/",
      hunderfarenhet: "mycket",
      fysik: "hög",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "hanar",
      ledarskap: "tydligt",
      storlek: "mellan",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b5411f47b2c002828e131",
      hundnamn: "Czaber",
      beskrivning:
        "Cząber hittades på gatan med ett skadat öga som gjorde fruktansvärt ont. Sheltret opererade bort ögat och nu är har han inte ont längre. Efter operationen blev han en mycket gladare hund. Cząber beskrivs som en trevlig, lugn och känslig herre. Sheltret skriver att han tycker att okända människor kan vara läskiga men hunden vi träffat var enormt social och tillgiven.",
      bild: "https://matchingpaws.se/static/media/czaber.d3def0d6.jpeg",
      ras: "Blandras",
      alder: "11",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/czaber0451/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "nej",
      ledarskap: "mjukt",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: true,
        ensam: false,
        skällig: false,
        resursförsvar: true,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b5561f47b2c002828e132",
      hundnamn: "Lejk",
      beskrivning:
        "Rara underbara Łejk är en stor, lugn och stillsam herre som inte hetsar upp sig i onödan utan istället betraktar en med sina fina och lite sorgsna ögon. Han beskrivs som osäker i nya miljöer och reserverad mot främlingar, men det sista var inget vi upplevde när vi träffade honom på sheltret. Han kom genast fram till oss, stoppade sitt stora huvud i våra händer och tryckte sig nära för att få kärlek och klappar. Den här killen är en sån där personlighet som är svår att glömma. \n\nŁejk vill äta sin mat i fred och inte bli störd när han sover, därför ska han komma till en familj utan små barn. ",
      bild: "https://matchingpaws.se/static/media/lejk.e29bb0df.jpeg",
      ras: "Blandras",
      alder: "11",
      kastrerad: "ja",
      kontaktnamn: "Yvette Berg Colhoun",
      email: "",
      lank: "https://hundarutanhem.se/hundar/lejk-0319/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "tikar",
      ledarskap: "mjukt",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: true,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: true,
        sjukdom: false,
        ingen: false,
      },
      _id: "615b5638f47b2c002828e133",
      hundnamn: "Nero",
      beskrivning:
        "Nero är en fin äldre hund som söker efter sitt för-alltid-hem, där han kan få all den kärlek och uppmärksamhet som han förtjänar. Nero söker ett hem där han är det enda djuret, han vill inte umgås med andra djur. Han ska inte heller bo med barn. Denna kille beskrivs som en fin hund som inte stressar upp sig så lätt. Han söker ett hem som är beredd på att träna tillit och hantering som tex kloklipp.",
      bild: "https://matchingpaws.se/static/media/nero.def3f98b.jpeg",
      ras: "Blandras",
      alder: "8",
      kastrerad: "ja",
      kontaktnamn: "Carina Olsson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/nero-21-0301/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "nej",
      ledarskap: "mjukt",
      storlek: "mellan",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615c252cf7c6f700289376a4",
      hundnamn: "Ruairi",
      beskrivning:
        "Ruairi var i dåligt skick och hade inte haft det bra då han hittades. Han hade fått gå hungrig och inte fått uppleva hur det är att ha tillgång till mat och känna sig trygg. Som tur var blev Ruairi upphittad och har haft det bra i sitt jourhem på Irland där han fått växa och känna sig trygg, leka med hundkompisar och ha tillgång till leksaker och annat skoj.\n\nDen som adopterar Ruairi kommer få en jättefin vän och som älskar att gosa och vara nära. Som den vinthundsblandning han är så gillar han att ta det lugnt inne men behöver få springa av sig utomhus regelbundet.",
      bild: "https://matchingpaws.se/static/media/ruairi.01af18b9.jpeg",
      ras: "Lurcher",
      alder: "0,5",
      kastrerad: "nej",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/ruairi-21-0856/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "ja",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615c2629f7c6f700289376a5",
      hundnamn: "Kevin",
      beskrivning:
        "Kevin är en sprallig och glad liten kille som är som valpar är mest! Han har haft tur att han fick komma till ett rescue på Irland och just nu bor han i ett jourhem tillsammans med flera hund- och människokompisar. Han är vad vi tror en spanielblandning och han fungerar bra med andra hundar och vi tror han skulle passa att bo som ensamhund eller tillsammans med andra och han vill komma till ett hem där han får aktivering och vara ute mycket.",
      bild: "https://matchingpaws.se/static/media/kevin.da17e0b3.jpeg",
      ras: "Spanielblandning",
      alder: "0,5",
      kastrerad: "nej",
      kontaktnamn: "Lina Lyckelin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/kevin-21-0858/",
      hunderfarenhet: "lite",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "lugnt",
      katt: "ja",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "mellan",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615c2d2bf7c6f700289376a6",
      hundnamn: "Byczek",
      beskrivning:
        "Byczek är en ung hund som naturen välsignade med ett par rejäla och charmiga radar-öron. Han är lite försiktig och behöver tid att landa i en ny miljö. Han är relativt lättstressad och ska därför bo i ett lugnare område, i ett hem utan barn, hundar eller andra djur.\n\nDet kan lite tid för Byczek att bli helt trygg med människorna omkring, därför behöver det nya hemmet ha tålamod och vara beredd på att ge honom det utrymme han behöver. När han väl har värmt upp kommer han bli någons trogna följeslagare livet ut. Han kan gå i koppel.\n\n",
      bild: "https://matchingpaws.se/static/media/byczek.4edb968f.jpeg",
      ras: "Blandras",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/byczek-0685/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "nej",
      ledarskap: "mjukt",
      storlek: "mellan",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: true,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615c2f0af7c6f700289376a7",
      hundnamn: "Sol",
      beskrivning:
        "Försiktiga Sol är en fin hund med en del integritet. Han kom till ett shelter i Polen under hösten 2019 och vi vet inte hur han levde innan dess. Han är osäker i nya miljöer och tycker inte om när det är stökigt och rörigt omkring honom. Sol är lite rädd för människor, speciellt främmande, men han jobbar på det och det är något som den nya familjen måste fortsätta jobba med.\n\nSol söker ett hem som är beredd på att träna tillit och hantering som tex kloklipp. Om man tränger honom för mycket eller gör något som gör ont så kan han bli rädd och försvara sig, därför söker han ett hundvant hem utan små barn.\nVi hoppas att han kommer känna sig mer bekväm när han får en bra relation till sin människa men detta är något hans hem kan behöva jobba på.\n\nHan kommer bra överens med andra hundar och kan dela hem med en snäll och trygg hund.\n\nAtt gå i koppel är en till sak som denna kille behöver lära sig då han inte verkar vara van vid det sen tidigare. Sol låter sig hanteras varsamt men även hanteringsträning kommer hans nya familj behöva hjälpa och stötta honom med. Vi söker därför ett lugnt och hundvant hem till fina Sol",
      bild: "https://matchingpaws.se/static/media/sol.9c165789.jpeg",
      ras: "Blandras",
      alder: "3",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/sol-21-0195/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "lugnt",
      katt: "nej",
      hund: "båda",
      ledarskap: "tydligt",
      storlek: "liten",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615c38cdf7c6f700289376aa",
      hundnamn: "Leo",
      beskrivning:
        "Leo är en liten terrierblandras som kom till Sverige från Polen i juni 2021. Tyvärr funkade han inte ihop med barnen i familjen och därför söker han nu ett nytt, lugnt hem utan barn.\nHan befinner sig just nu i jourhem i norra Stockholm, som säger följande om honom:\nLeo är en ung terrier med allt vad det innebär. Smart, lättlärd och väldigt fysisk; han vill gärna springa med leksaker, jaga boll och leka dragkamp. Helst allt på en gång. Som en sann terrier har han också integritet. Jag försöker vänja honom vid lite mer mental aktivering för att bygga fokus, dock är Leos tålamod sådär, som det ju generellt är med unghundar – om någonting inte funkar direkt så tycker han att det är lika bra att gå vidare med livet och hämta sig en sko eller annat.\n\nHan tycker mycket om att tugga på saker och tror nog att de flesta problem går att lösa om man tuggar på det, framför allt om det finns godis inuti. Leo behöver ett hem som förstår sig på terriers och kan se till att han får både sina mentala och fysiska behov uppfyllda. Han är en hund som vill jobba och få utlopp för sina naturliga instinkter att jaga, nosa, gräva och tugga. Att enbart gå promenader eller springa i trädgården och jaga boll funkar inte för Leo. Eftersom han ibland kan ha svårt att slappna av behöver det nya hemmet ha rutiner för vila/aktivering för att underlätta för Leo. När han väl har varvat ner vill han gärna hoppa upp i soffan och gosa med sin människa, eller ta en tupplur med favoritleksaken. \n\nLeo kan vara reaktiv mot människor han inte känner och tycker även att hundmöten är jobbiga. Vi söker därför i första hand ett lugnt hem med få människo- och hundmöten. Bo i stan passar inte Leo. Leo är en osäker ung grabb som behöver lugn, trygghet och vägledning för att kunna öka sitt självförtroende.",
      bild: "https://matchingpaws.se/static/media/leo.db3d8de6.jpeg",
      ras: "Terrierblandras",
      alder: "0,9",
      kastrerad: "",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/defis-0418/",
      hunderfarenhet: "mycket",
      fysik: "",
      allergi: "nej",
      barn: "ja",
      energi: "lugnt",
      katt: "nej",
      hund: "nej",
      ledarskap: "tydligt",
      storlek: "liten",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: false,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: false,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: true,
        integritet: true,
        drar: true,
        ensam: true,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f5044c6626300288d7980",
      hundnamn: "Max",
      beskrivning:
        "Möt Max! Ett härligt energiknippe som den huskymix han är! Han bor just nu på ett pensionat i Sverige, men längtar efter sitt egna hem!\nMax älskar löp- eller cykelturer och ett hem intresserad av dragträning skulle vara hans dröm! Han är en smart kille som är lyhörd och lyssnar bra, men han är inte en hund som ha för mycket närhet. Kramar klarar han sig utan!\n\nPå pensionatet har han träffat både barn och andra hundar. Han är inte så intresserad av barn och då han har integritet vill han bo i ett hem utan barn eller med äldre tonåringar. Katter är han väldigt intresserad av och jagar gärna så hans hem bör inte ha katt.\n\nMax första hem i Sverige berättar:\n“Max är en stark, energisk och väldigt glad hund! Han gillar att vara ute och gå på långa promenader och gärna springa och leka fritt. Han söker gärna upp kontakten och säger till när han vill bli klappad eller kliad, bakom öronen gillar han bäst. Enklare kommandon klarar han av och lyssnar när man säger åt honom. I Max har du en trogen och lojal kompis som bara vill vara nära och leka.\n\nMax är kan vara envis med en egen vilja, och behöver motiveras för att göra saker han tycker är onödiga. Det är oklart vad Max har gått igenom tidigare men han har svårt att bli lämnad även kortare stunder så någon som har tålamod och är villig att jobba med honom och hur han ska vara social med olika möten hade varit väldigt nyttigt för honom. Han passar inte ihop med mindre barn, katter eller mindre hundar. Han kan fungera ihop med tikar.",
      bild: "https://matchingpaws.se/static/media/max.daf07fa8.jpeg",
      ras: "akita/huskyblandning",
      alder: "3",
      kastrerad: "ja",
      kontaktnamn: "Mari Andersson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/max-1157/",
      hunderfarenhet: "ganska",
      fysik: "hög",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "tikar",
      ledarskap: "båda",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: false,
        villaområde: false,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: true,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f53d6c6626300288d7982",
      hundnamn: "Michael",
      beskrivning:
        "Michael är en härlig och levnadsglad ung hund som räddades som valp av ett rescue på Irland tillsammans med sina syskon.\n\nMichael bor idag i ett jourhem i Sverige och är en väldigt härlig hund – men han trivs inte i en tätbebyggd miljö. Han är en helt fantastisk hund på alla sätt och vis men han är en tonåring med brokigt förflutet och behöver ett hem som förstår sig på honom och som kan stötta honom, guida honom och älska honom även om det blir jobbigt ibland.\n\nInomhus är Michael “som vilken hund som helst”. Han älskar gos, leker mer än gärna, lägger huvudet i knäet och ber egentligen aldrig om mer än bara lite kärlek tillbaka.\nLivet utomhus är där han behöver extra stöttning. Där är det fortfarande mycket som kan skrämmas; tex trafik är väldigt jobbigt. Han behöver sin ägares stöd och lugn, pepp blandat med förståelsen av att dagsformen kan påverka hur mycket man vågar. Får han det så tror vi att det kommer att släppa, lite i taget.\n\nMichael tycker att förändringar är jobbiga, han behöver en tid då han får gå utan alltför många intryck och att man låter honom landa i lugn och ro – samtidigt som han har ett behov av att få göra av med energi. Därför vill vi att hans nya hem finns i ett lugnt område, utan trafik precis utanför. Allra helst skulle han bo på landet där han har har en egen, inhägnad gård där han kan springa och leka och få utlopp för sin energi. Han delar gärna sitt hem med en stabil tik i samma storlek.",
      bild: "https://matchingpaws.se/static/media/michael.776d9ec0.jpeg",
      ras: "Blandras",
      alder: "1",
      kastrerad: "ja",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/michael-20-0987/",
      hunderfarenhet: "mycket",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "lugnt",
      katt: "nej",
      hund: "tikar",
      ledarskap: "mjukt",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: true,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: true,
        kontoret: true,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615f54bcc6626300288d7983",
      hundnamn: "Dominique",
      beskrivning:
        "Dominique har blivit övergiven efter en karriär som racinghund och har hittills i sitt liv bara bott på kennel. Hon är nu i ett rescue på Irland och väntar på sin familj och sitt nya hem! Det är en vacker greyhounds tjej som mäter ungefär 79 cm till huvudet och väger ca 27 kg.\n\nLetar du efter en mjuk och rolig tjej kanske Dominique kan vara något!?  Hon kan vara lite blyg inledningsvis men hon är väldigt trevlig och vänligt sinnad mot alla, både människor och andra hundar. Hon gillar att leka med leksaker och hundar. En annan favoritaktivitet är förstås, som den vinthund hon är, att springa runt i paddocken på rescuet, på bilderna kan ni se henne tillsammans med sin kompis Mattias (Dominique har rött halsband). Dominique kan lämnas själv men det behöver hon vänjas i lagom takt med i sitt nya hem.\n\nDominique kan vistas där det finns trafik men vi tror att hon skulle trivas bäst i ett lite lugnare område. Hon behöver också möjlighet att röra på sig på promenader och emellanåt få springa lös i ett större inhägnat område.\n\nÄr det hos dig Dominique skall få känna på hur det är att bli ompysslad, få kärlek och ha en (eller flera) varma och mysiga sovplatser att kura ner sig i?",
      bild: "https://matchingpaws.se/static/media/dominique.a4b9ab7f.jpeg",
      ras: "Greyhound",
      alder: "3",
      kastrerad: "ja",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/dominique-21-0656/",
      hunderfarenhet: "lite",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "ja",
      hund: "båda",
      ledarskap: "båda",
      storlek: "stor",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: true,
        hoppar: false,
        integritet: false,
        drar: true,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f55e1c6626300288d7984",
      hundnamn: "Iris",
      beskrivning:
        "Iris är en glad och väldigt snäll tjej som räddades från ett dog pound på Irland. Hon har bott i Sverige i några månader och letar nu efter sitt alldeles egna för alltid-hem.\n\nIris älskar sällskap av människor och gillar att gå ut på promenader. Hon går fint i koppel men kan bli exalterad vid hundmöten, så det är något hon behöver träna vidare på. Hon är dock väldigt lättlärd så med vägledning och tålamod kommer hon att lära sig detta också.\n\nHon är väldigt intresserad av vilt och ser även katter och småhundar som potentiella byten, och ska därmed inte umgås med småhundar.\nHon har ett par lekkompisar av större storlek men vill helst bo som ensam hund. Det är en stor fördel om hennes nya hem har vana av vinthundar sedan tidigare.\n\nHon har inga problem med att slappna av och är väldens raraste och mysigaste hund som mer än gärna kelar och bjuder på många pussar! Liksom många andra vinthundar tycker hon om att ha det mjukt och skönt och ligger gärna och myser i en soffa men har samtidigt behov att få springa av sig på ett inhägnat område med jämna mellanrum.\n\nHon mäter ca 75 cm till toppen av sitt huvud och väger ca 19 kg.",
      bild: "https://matchingpaws.se/static/media/iris.349a8a66.jpeg",
      ras: "Lurcher",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://matchingpaws.se/static/media/iris.349a8a66.jpeg",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "båda",
      katt: "nej",
      hund: "nej",
      ledarskap: "båda",
      storlek: "stor",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: false,
        villaområde: false,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: false,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615f56d6c6626300288d7985",
      hundnamn: "Archie",
      beskrivning:
        "Säg hej till härliga Archie! Archie lämnades in till ett rescue på Irland av hans ägare då han blivit för stor och enligt ägaren återkommande hoppade och välte ägarens fru när de var ute. Archie har inte visat någon tendens till att hoppa och välta någon på rescuet.\n\nArchie beskrivs som en kärleksfull och tillgiven kille som älskar att vara runt människor. Han fungerar bra med de hundar han har träffat och tackar inte nej till någon form av aktivering. Denna kille älskar långa härliga promenader på landet och andra roliga aktiviteter som passar den aktiva kille som han är.\n\nArchie söker en aktiv familj som vill ha en härlig fyrbent kompis med på sina äventyr och som är beredda på att fortsätta träna Archie i allt en unghund behöver kunna för ett bra och tryggt liv. Archies drömhem finns på landet där han kan få massor med aktivering och kanske sällskap av hundkompis i samma storlek. Eventuella barn i familjen bör vara äldre. Vi vet inte hur Archie är med katt.\n\nArchie mäter 81 cm till toppen av sitt huvud och väger ca 24 kg.\n\n \n\nHar ni ett kärleksfullt och aktivt hem till denna stjärna där han kan få den mentala och fysiska aktivering han behöver för att må bra? Skicka in er intresseanmälan idag så Archie får komma hem!",
      bild: "https://matchingpaws.se/static/media/archie.0e9a7412.jpeg",
      ras: "Lurcher",
      alder: "1",
      kastrerad: "ja",
      kontaktnamn: "Anna-Maria Svedberg",
      email: "",
      lank: "https://hundarutanhem.se/hundar/archie-0568/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: true,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: true,
        kontoret: true,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615f57abc6626300288d7986",
      hundnamn: "Mattias",
      beskrivning:
        "Säg hej till fina Mattias! Mattias har tidigare använts inom racing, och när han inte presterade enligt önskemål lämnas han in till rescue – något som är väldigt vanligt bland greyhounds på Irland.\n\nMattias beskrivs som en vänlig och lekfull kille. Det bästa han vet är sällskap av en eller flera hundkompisar, långa promenader och sköna sovstunder. Han älskar när det är hans tur att få uppmärksamhet av de som arbetar på rescuet. Han går fint i kopplet och är en riktigt trevlig grabb. \n\nSom den greyhound han är vill Mattias gärna sträcka ut sina ben i ett inhängnat område regelbundet och ha en varm och mysig soffa att sova i.\n\nMattias mäter 83 cm till toppen av sitt huvud och väger 32 kg.",
      bild: "https://matchingpaws.se/static/media/mattias.6f86c610.jpeg",
      ras: "Greyhound",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/mattias-0447/",
      hunderfarenhet: "lite",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "båda",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: true,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: true,
        kontoret: true,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: false,
        hundsport: true,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615f585dc6626300288d7987",
      hundnamn: "Shay",
      beskrivning:
        "Säg hej till vackra Shay! Shay lämnades in till rescuet då han inte längre dög till att springa ute på racingbanorna.  Denna kille beskrivs som en vänlig jätte som aldrig tackar nej till mysstunder. Han fungerar bra ihop med de hundar han har träffat och ska inte bo med katt.\n\nShay längtar efter att få komma till en familj som har en skön soffa där han kan få gosa i och som vill ta med honom på härliga promenader. Som den greyhound han är behöver han regelbundet få springa av sig ordentligt ute på någon större inhägnad yta.\n\nShay väger 39 kg och mäter 91 cm till toppen av sitt huvud.\n\nHar du ett kärleksfullt hem till denna kille där han kan få den mentala och fysiska aktivering han behöver för att må bra? ",
      bild: "https://matchingpaws.se/static/media/shay.04097231.jpeg",
      ras: "Greyhound",
      alder: "3",
      kastrerad: "ja",
      kontaktnamn: "Camilla Ljungberg",
      email: "",
      lank: "https://hundarutanhem.se/hundar/shay-0434/",
      hunderfarenhet: "lite",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "båda",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: false,
        villaområde: false,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "615f5938c6626300288d7988",
      hundnamn: "Lady Grey",
      beskrivning:
        "Lady Grey hittades ensam och övergiven strövandes på gatorna och togs till ett av Irlands pounds men som tur var räddades hon av Drogheda Animal Rescue.  Man misstänker att hon haft ett svårt och tufft liv, kanske bott ständigt utomhus och varit bunden. Hon har hittills bott i en kennel där har hon mycket yta att springa på och har daglig kontakt med andra hundar och människor. Hon har aldrig visat någon aggressivitet utan är väluppfostrad och vänlig i sin personlighet.\n\nLady Grey älskar att vara med människor och är lycklig om hon bara får vara vid din sida hela dagarna. Hon lägger ingen större uppmärksamhet på och verkar inte speciellt intresserad av att lära känna andra hundar. Däremot söker vi ett hem som inte har katt eller andra mindre pälsdjur, då hon gärna blir för intresserad av dem.\n\nLady Grey är en elegant och nätt lurcher tjej  (ca 22 kg och 90 cm upp till huvudet. Hon är tyst, vänlig och lättsam att ha å göra med. Hon går fint i koppel och kommer helst att vara vid din sida i alla väder. Hon har inte varit lös på offentliga ytor. Vinthundar brukar ofta ha stark jaktinstinkt och det är inte alltid att rekommendera att de får vara lösa. Däremot behöver Lady Grey, som den vinthund hon är, möjlighet att få springa av sig i inhägnade områden med jämna mellanrum mellan promenaderna.\n\nLady Grey kan bo i ett lugnare område, allra helst på landet. Det är viktigt att hon får bo i ett hus, ej lägenhet, där hon har en större, inhägnad tomt att rusa av sig på.\n\nLady Grey kan börja tugga på saker om hon har långtråkigt men om hon får ett liv med motion och mental stimulans kan man träna bort den ovanan. På nätterna tuggar hon aldrig på saker, då sover hon gott!",
      bild: "https://matchingpaws.se/static/media/ladygrey.dfac1204.jpeg",
      ras: "Lurcher",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Madelaine Henriksson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/lady-grey-21-0401/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "tydligt",
      storlek: "stor",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: true,
        kontoret: true,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f5a36c6626300288d7989",
      hundnamn: "Mambo",
      beskrivning:
        "Säg hej till Mambo! Mambo befinner sig sedan 1 september i ett jourhem i Polen. Vi vet inte så mycket om hans bakgrund då han kommer från ett annat rescue i Polen.\n\nMambo beskrivs som en livlig och aktiv liten kille som föredrar att vara med andra hundar än med människor. Mambo är lite rädd för okända människor, något som jourhemmet jobbar med. Mambos nya familj behöver ha förståelse och kunna ge honom den tiden och tryggheten han behöver för att blomma ut. I och med detta tror vi att denna fina kille skulle må bäst i ett lugnare hem, utan livliga barn, där han kan få en chans att landa. Mambo blir stressad vid hantering i dagsläget, detta är något som hans nya familj behöver hjälpa honom med och fortsätta träna på.\n\nMambo mäter 40 cm till toppen av sitt huvud och väger 5 kg.",
      bild: "https://matchingpaws.se/static/media/mambo.b27fc674.jpeg",
      ras: "Blandras",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/mambo-0776/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "nej",
      energi: "lugnt",
      katt: "ja",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "liten",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: true,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f5b34c6626300288d798a",
      hundnamn: "Carmen",
      beskrivning:
        "Carmen är en liten, 5 kg, jättebedårande tjej som hittades ute på ett fält tillsammans med sina syskon i slutet av augusti. Hon beskrivs som snäll och tycker om när någon hon känner klappar henne med mjuka och lugna rörelser. Carmen kan gå ganska bra i koppel. Men den lilla tjejen är också skygg och jourhemmet arbetar för att stärka henne i olika situationer. Hon har bara varit i jourhemmet sedan slutet av augusti men har redan börjat bli lite tryggare. Det är viktigt att Carmens nya familj fortsätter stärka hennes självförtroende.\n\nVi tror att hon skulle trivas bäst i ett hem i ett lugnare område och utan barn eftersom hon har tendens att stressa upp sig. Finns det lugna och hundvana äldre tonåringar som vet att Carmen måste ta allt i sin takt kan det eventuellt också fungera. Carmen skulle säkert uppskatta och må bra av en trygg och stabil hundkompis i liknande storlek som också kan vara hennes stöd. Men det viktigaste är att hon får hitta sin familj!",
      bild: "https://matchingpaws.se/static/media/carmen.b06e34a0.jpeg",
      ras: "Blandras",
      alder: "2",
      kastrerad: "ja",
      kontaktnamn: "Hanna Höglander Sahlin",
      email: "",
      lank: "https://hundarutanhem.se/hundar/carmen-0784/",
      hunderfarenhet: "ganska",
      fysik: "låg",
      allergi: "ja",
      barn: "nej",
      energi: "lugnt",
      katt: "ja",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "liten",
      kön: "tik",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: true,
        sök: true,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: true,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: false,
      },
      _id: "615f5c8ac6626300288d798b",
      hundnamn: "Sickan",
      beskrivning:
        "Sickan är en otroligt lugn och snäll kille som alltid vill vara nära. Oavsett om du lagar mat i köket eller borsta tänderna i badrummet så hänger han med.\nHan älskar gos lika mycket som mat och är helt otrolig i koppel, drar varken vid möte med människor eller hundar (om du inte kommer för nära för då kommer lite exalterat gnäll om att få hälsa).\nHan älskar att gå lugnt och lukta på precis allt omgivningen erbjuder men taggar gärna igång om du börjar springa och leka tillsammans med honom.\nDet märks att han i tidigare hem fått ligga i sängen och gosa. Låter du honom så kommer han säkerligen hoppa upp, breda ut sig och göra sig redo för lite morgonmys.\nSickan har inga problem med att åka bil.\nFår ni gäster så hälsar han glatt genom att vinka på svansen och sniffa ivrigt.\nHans tidigare hem har berättat att han reagerar starkt på vilt och katter. Men med oss har han bara stelnat till och sedan fortsatt gå bredvid oss när vi bett om uppmärksamhet. Detta kan bero på att vi inte kommit särskilt nära djuren, han är ju trots allt en Greyhoundblandning.\nVi tror att Sickan skulle passa absolut bäst i en familj där han inte lämnas ensam. En familj som älskar gos lika mycket som att vara ute på långpromenader och utomhusaktiviteter.\nAlltifrån svampplockning till discgolf är uppskattat och förgyller Sickans dagar.”\n\nSickan är vital för sin ålder men bör inte gå för mycket i trappor eller jaga bollar som sliter på kroppen. Sickan är bra med barn men skulle inte trivas i en stökig barnfamilj, han vill ha lugn och ro i hemmet och få all uppmärksamhet. Sickan äter veterinärfoder för njurarna vilket han vill fortsätta med.\n\nHan mäter 68 cm i mankhöjd och väger 38 kg.\n",
      bild: "https://matchingpaws.se/static/media/sickan.26932548.jpeg",
      ras: "Greyhound mix",
      alder: "11",
      kastrerad: "ja",
      kontaktnamn: "Stina Johnsson",
      email: "",
      lank: "https://hundarutanhem.se/hundar/sickan-21-0461/",
      hunderfarenhet: "ganska",
      fysik: "normal",
      allergi: "nej",
      barn: "ja",
      energi: "båda",
      katt: "nej",
      hund: "båda",
      ledarskap: "båda",
      storlek: "stor",
      kön: "hane",
      __v: 0,
    },
    {
      boende: {
        centralt: false,
        lägenhet: true,
        villaområde: true,
        landet: true,
      },
      hundpassning: {
        hunddagis: false,
        kontoret: true,
        ensam: true,
        hemma: false,
      },
      aktivitet: {
        sällskap: true,
        jakt: false,
        sportkompis: false,
        sök: false,
        hundsport: false,
        vakt: false,
        inget: false,
      },
      problematik: {
        hundaggressivitet: false,
        hoppar: false,
        integritet: false,
        drar: false,
        ensam: false,
        skällig: false,
        resursförsvar: false,
        sjukdom: false,
        ingen: true,
      },
      _id: "61644b732205d80028a4889c",
      hundnamn: "Tess",
      beskrivning:
        "Tess är en vacker och kelig blandrasrik på 4,5 år med ursprung från Bosnien. Hon söker ett nytt hem på grund av sjukdom i familjen. Tess framtida matte eller husse behöver ha ett mjukt ledarskap och bo en miljö i ett lugnt område. Tess är en mysig, vänlig och lugn hund som går bra ihop med andra hundar men inte med katt.",
      bild: "https://matchingpaws.se/static/media/Tess.6371aff9.jpg",
      ras: "Blandras",
      alder: "4,5",
      kastrerad: "ja",
      kontaktnamn: "Mikael",
      email: " anmh02@gmail.com",
      lank: "",
      hunderfarenhet: "lite",
      fysik: "låg",
      allergi: "ja",
      barn: "nej",
      energi: "lugnt",
      katt: "nej",
      hund: "båda",
      ledarskap: "mjukt",
      storlek: "liten",
      kön: "tik",
      __v: 0,
    },
  ];

  // Redux
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

  const fetchedDogs = useSelector((state) => state.filteredDogs);

  const getFetchedDogs = () => {
    dispatch(getDogs());
  };

  const handleFilteredDogs = () => {
    dispatch(setDogs(filteredDogs));
  };

  console.log("fetchedDogs", fetchedDogs);
  console.log("filteredDogs", filteredDogs);

  //End Redux

  const [state, setState] = useState({
    hunderfarenhet: "",
    fysik: "",
    allergi: "",
    barn: "",
    boende: {
      centralt: false,
      lägenhet: false,
      villaområde: false,
      landet: false,
    },
    hundpassning: {
      hunddagis: false,
      kontoret: false,
      ensam: false,
      hemma: false,
    },
    energi: "",
    problematik: {
      hundaggressivitet: false,
      hoppar: false,
      integritet: false,
      drar: false,
      ensam: false,
      skällig: false,
      resursförsvar: false,
      sjukdom: false,
      ingen: false,
    },
    aktivitet: {
      sällskap: false,
      jakt: false,
      sportkompis: false,
      sök: false,
      hundsport: false,
      vakt: false,
      inget: false,
    },
    katt: "",
    hund: "",
    ledarskap: "",
    storlek: "",
  });

  //   test
  const [data2, setData2] = useState(0);

  useEffect(() => {
    setData2(JSON.parse(window.localStorage.getItem("data2")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("data2", data2);
  }, [data2]);

  const increaseCount = () => {
    return setData2(data2 + 1);
  };
  const decreaseCount = () => {
    return setData2(data2 - 1);
  };

  //   test end

  const handleStep = (step) => {
    setStep(step);
  };

  const handleRedoQuiz = () => {
    window.location.reload();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleChangeAktivitet = (event) => {
    setState({
      ...state,
      aktivitet: {
        ...state.aktivitet,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleChangeProblematik = (event) => {
    setState({
      ...state,
      problematik: {
        ...state.problematik,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleChangeBoendeCentralt = (event) => {
    setState({
      ...state,
      boende: {
        ...state.boende,
        centralt: true,
        lägenhet: false,
        villaområde: false,
        landet: false,
      },
    });
  };

  const handleChangeBoendeLägenhet = (event) => {
    setState({
      ...state,
      boende: {
        ...state.boende,
        centralt: false,
        lägenhet: true,
        villaområde: false,
        landet: false,
      },
    });
  };

  const handleChangeBoendeVillaområde = (event) => {
    setState({
      ...state,
      boende: {
        ...state.boende,
        centralt: false,
        lägenhet: false,
        villaområde: true,
        landet: false,
      },
    });
  };

  const handleChangeBoendeLandet = (event) => {
    setState({
      ...state,
      boende: {
        ...state.boende,
        centralt: false,
        lägenhet: false,
        villaområde: false,
        landet: true,
      },
    });
  };

  const handleChangeHundpassningHunddagis = (event) => {
    setState({
      ...state,
      hundpassning: {
        ...state.hundpassning,
        hunddagis: true,
        kontoret: false,
        ensam: false,
        hemma: false,
      },
    });
  };

  const handleChangeHundpassningKontoret = (event) => {
    setState({
      ...state,
      hundpassning: {
        ...state.hundpassning,
        hunddagis: false,
        kontoret: true,
        ensam: false,
        hemma: false,
      },
    });
  };

  const handleChangeHundpassningEnsam = (event) => {
    setState({
      ...state,
      hundpassning: {
        ...state.hundpassning,
        hunddagis: false,
        kontoret: false,
        ensam: true,
        hemma: false,
      },
    });
  };

  const handleChangeHundpassningHemma = (event) => {
    setState({
      ...state,
      hundpassning: {
        ...state.hundpassning,
        hunddagis: false,
        kontoret: false,
        ensam: false,
        hemma: true,
      },
    });
  };

  const filterDogs = () => {
    setMatch(true);
    setDogsShown(true);
    const ownerCapabilities = {
      mycket: ["mycket", "ganska", "lite"],
      ganska: ["ganska", "lite"],
      lite: ["lite"],
    };
    const ownerPhysics = {
      hög: ["hög", "normal", "låg"],
      normal: ["normal", "låg"],
      låg: ["låg"],
    };
    const ownerAllergy = {
      ja: ["nej", "ja"],
      nej: ["ja"],
    };
    const ownerChildren = {
      ja: ["ja"],
      nej: ["ja", "nej"],
    };
    const ownerEnergy = {
      fartfyllt: ["fartfyllt", "båda"],
      lugnt: ["lugnt", "båda"],
    };
    const ownerCatsInHome = {
      ja: ["ja"],
      nej: ["nej", "ja"],
    };
    const ownerDogsInHome = {
      nej: ["nej", "båda", "tikar", "hanar"],
      båda: ["båda"],
      tikar: ["tikar", "båda"],
      hanar: ["hanar", "båda"],
    };
    const ownerLedarskap = {
      mjukt: ["mjukt", "båda"],
      tydligt: ["tydligt", "båda"],
    };
    const ownerSizes = {
      liten: ["liten"],
      mellan: ["mellan", "liten"],
      stor: ["stor", "mellan", "liten"],
    };

    const inabilities = Object.entries(state.problematik)
      .filter((capability) => !capability[1] && capability[0] !== "ingen")
      .map((capability) => capability[0]);
    const ownerLiving = Object.entries(state.boende).filter(([key, value]) =>
      Boolean(value)
    )[0][0];
    const ownerHundpassning = Object.entries(
      state.hundpassning
    ).filter(([key, value]) => Boolean(value))[0][0];
    const ownerAktivitet = Object.entries(
      state.aktivitet
    ).filter(([key, value]) => Boolean(value))[0][0];

    const copyDogs = [...data];
    const filterOnErfarenhet = copyDogs.filter(
      (dog) =>
        ownerCapabilities[state.hunderfarenhet].indexOf(dog.hunderfarenhet) > -1
    );
    const filterOnFysik = filterOnErfarenhet.filter(
      (dog) => ownerPhysics[state.fysik].indexOf(dog.fysik) > -1
    );
    const filterOnAllergi = filterOnFysik.filter(
      (dog) => ownerAllergy[state.allergi].indexOf(dog.allergi) > -1
    );
    const filterOnBarn = filterOnAllergi.filter(
      (dog) => ownerChildren[state.barn].indexOf(dog.barn) > -1
    );
    const filterOnEnergi = filterOnBarn.filter(
      (dog) => ownerEnergy[state.energi].indexOf(dog.energi) > -1
    );
    const filterOnKatt = filterOnEnergi.filter(
      (dog) => ownerCatsInHome[state.katt].indexOf(dog.katt) > -1
    );
    const filterOnHund = filterOnKatt.filter(
      (dog) => ownerDogsInHome[state.hund].indexOf(dog.hund) > -1
    );
    const filterOnLedarskap = filterOnHund.filter(
      (dog) => ownerLedarskap[state.ledarskap].indexOf(dog.ledarskap) > -1
    );
    const filterOnStorlek = filterOnLedarskap.filter(
      (dog) => ownerSizes[state.storlek].indexOf(dog.storlek) > -1
    );
    const filterOnBoende = filterOnStorlek.filter(
      (dog) => dog.boende[ownerLiving]
    );
    const filterOnHundpassning = filterOnBoende.filter(
      (dog) => dog.hundpassning[ownerHundpassning]
    );
    const filterAktivitet = filterOnHundpassning.filter(
      (dog) => dog.aktivitet[ownerAktivitet]
    );
    const filterProblematik = filterAktivitet.filter((dog) => {
      return (
        inabilities.filter((ability) => dog.problematik[ability]).length === 0
      );
    });

    setData(filterProblematik);
    setFilteredDogs(filterProblematik);
    // handleFilteredDogs();
    Event("QUIZ", "Avslutade quizet", "QUIZ-avslutat");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://matchingpaws-api.herokuapp.com/dogs");

      setData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleFilteredDogs();
  }, [filterDogs]);

  // Den här funktionen sätter parametern till true
  const handleChangeStorlek = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  //   useEffect(() => {
  //     setData(JSON.parse(window.localStorage.getItem("data")));
  //   }, [data]);

  //   useEffect(() => {
  //     window.localStorage.setItem("data", data);
  //   }, [data]);

  // console.log("state", state);
  // console.log("data", data);
  // console.log("localStorage", window.localStorage);

  return (
    <div className="wizardContainer" id="/matchingpaws/quiz">
      <WizardForm step={step} onChange={handleStep} state={state}>
        <Step title="Erfarenhet" description="Erfarenhet">
          <button onClick={getFetchedDogs}>Fetch</button>

          <h1> Count {data2} </h1>
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
          <p className="stepTitle">
            Vilket alternativ beskriver bäst din tidigare hunderfarenhet?
          </p>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="mycket"
              name="hunderfarenhet"
              value="mycket"
              checked={state.hunderfarenhet === "mycket"}
              onChange={handleChange}
            />
            <span className="border"></span>
            <label className="radioLabelWizard" htmlFor="mycket">
              Jag har haft fullt ansvar för en hund tidigare
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="ganska"
              name="hunderfarenhet"
              value="ganska"
              checked={state.hunderfarenhet === "ganska"}
              onChange={handleChange}
            />
            <span className="border"></span>
            <label className="radioLabelWizard" htmlFor="ganska">
              Jag har inte haft hund själv, men har hjälpt vänner och familj med
              deras hundar
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="lite"
              name="hunderfarenhet"
              value="lite"
              checked={state.hunderfarenhet === "lite"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="lite">
              Jag har ingen tidigare hunderfarenhet
            </label>
          </div>
        </Step>

        <Step title="Fysik" description="Fysik">
          <p className="stepTitle">
            Vilket alternativ beskriver bäst din fysiska förmåga?
          </p>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="hög"
              name="fysik"
              value="hög"
              checked={state.fysik === "hög"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="hög">
              Jag är stark och kan hålla emot även tyngre starka hundar om det
              behövs
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="normal"
              name="fysik"
              value="normal"
              checked={state.fysik === "normal"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="normal">
              Jag skulle beskriva min fysiska förmåga som normal
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="låg"
              name="fysik"
              value="låg"
              checked={state.fysik === "låg"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="låg">
              Jag har vissa fysiska begränsningar som gör att jag inte är
              lämplig som ägare till starkare hundar
            </label>
          </div>
        </Step>

        <Step title="Allergi" description="Allergi">
          <p className="stepTitle">Kan du bo med en hund som fäller päls?</p>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="allergiJa"
              name="allergi"
              value="ja"
              checked={state.allergi === "ja"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="allergiJa">
              Ja
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="allergiNej"
              name="allergi"
              value="nej"
              checked={state.allergi === "nej"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="allergiNej">
              Nej
            </label>
          </div>
        </Step>

        <Step title="Barn" description="Barn">
          <p className="stepTitle">Kommer hunden träffa barn dagligen?</p>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="ja"
              name="barn"
              value="ja"
              checked={state.barn === "ja"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="ja">
              Ja
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="nej"
              name="barn"
              value="nej"
              checked={state.barn === "nej"}
              onChange={handleChange}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="nej">
              Nej
            </label>
          </div>
        </Step>

        <Step title="Boende" description="Boende">
          <p className="stepTitle">Hur bor du idag?</p>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="centralt"
              name="centralt"
              value="centralt"
              checked={state.boende.centralt}
              onChange={handleChangeBoendeCentralt}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="centralt">
              Lägenhet centralt i område med mycket människor och trafik
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="lägenhet"
              name="lägenhet"
              value="lägenhet"
              checked={state.boende.lägenhet}
              onChange={handleChangeBoendeLägenhet}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="lägenhet">
              Lägenhet i lugnt lägenhetsområde
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="villaområde"
              name="villaområde"
              value="villaområde"
              checked={state.boende.villaområde}
              onChange={handleChangeBoendeVillaområde}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="villaområde">
              Hus eller radhus i villaområde
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="landet"
              name="landet"
              value="landet"
              checked={state.boende.landet}
              onChange={handleChangeBoendeLandet}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="landet">
              Enskilt hus eller gård på landet
            </label>
          </div>
        </Step>

        <Step title="Hundpassning" description="Hundpassning">
          <p className="stepTitle stepTitleNoMargin">
            Hur planerar du att få ihop vardagen med din hund?
          </p>
          <span>Utgå från vardagen efter pandemin</span>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="hunddagis"
              name="hunddagis"
              value="hunddagis"
              checked={state.hundpassning.hunddagis}
              onChange={handleChangeHundpassningHunddagis}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="hunddagis">
              Hunden kommer gå på hunddagis
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="kontoret"
              name="kontoret"
              value="kontoret"
              checked={state.hundpassning.kontoret}
              onChange={handleChangeHundpassningKontoret}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="kontoret">
              Hunden kan följa med mig till arbetet på dagarna
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="ensam"
              name="ensam"
              value="ensam"
              checked={state.hundpassning.ensam}
              onChange={handleChangeHundpassningEnsam}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="ensam">
              Hunden kommer behöva vara hemma ensam max 4 timmar per dag
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="radio"
              type="radio"
              id="hemma"
              name="hemma"
              value="hemma"
              checked={state.hundpassning.hemma}
              onChange={handleChangeHundpassningHemma}
            />
            <div className="border"></div>
            <label className="radioLabelWizard" htmlFor="hemma">
              Hunden kommer kunna vara hemma med mig eller annan närstående om
              dagarna
            </label>
          </div>
        </Step>

        <Step title="Energi" description="Energi">
          <p className="stepTitle">
            Vilken beskrivning passar bäst in på energin i ditt hem?
          </p>
          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="fartfyllt"
                name="energi"
                value="fartfyllt"
                checked={state.energi === "fartfyllt"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="fartfyllt">
                I mitt hem är det fart och fläkt, mycket aktiviteter och besök
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="lugnt"
                name="energi"
                value="lugnt"
                checked={state.energi === "lugnt"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="lugnt">
                I mitt hem är det lugnt, tryggt och sansat
              </label>
            </div>
          </div>
        </Step>

        <Step title="Katt" description="Katt">
          <p className="stepTitle">Finns det katt i hemmet?</p>
          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="ja"
                name="katt"
                value="ja"
                checked={state.katt === "ja"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="ja">
                Ja
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="nej"
                name="katt"
                value="nej"
                checked={state.katt === "nej"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="nej">
                Nej
              </label>
            </div>
          </div>
        </Step>

        <Step title="Hund" description="Hund">
          <p className="stepTitle">Finns det hund i hemmet?</p>
          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="tikar"
                name="hund"
                value="tikar"
                checked={state.hund === "tikar"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="tikar">
                Ja, en eller flera tikar
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="hanar"
                name="hund"
                value="hanar"
                checked={state.hund === "hanar"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="hanar">
                Ja, en eller flera hanar
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="båda"
                name="hund"
                value="båda"
                checked={state.hund === "båda"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="båda">
                Både tikar och hanar
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="nej"
                name="hund"
                value="nej"
                checked={state.hund === "nej"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="nej">
                Nej
              </label>
            </div>
          </div>
        </Step>

        <Step title="Ledarskap" description="Ledarskap">
          <p className="stepTitle">
            Vilket av följande alternativ beskriver bäst din person och syn på
            hunduppfostran?
          </p>
          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="mjukt"
                name="ledarskap"
                value="mjukt"
                checked={state.ledarskap === "mjukt"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="mjukt">
                Jag är mjuk och kärleksfull i mitt umgänge med hundar
              </label>
            </div>
            <div className="inputContainer">
              <input
                className="radio"
                type="radio"
                id="tydligt"
                name="ledarskap"
                value="tydligt"
                checked={state.ledarskap === "tydligt"}
                onChange={handleChange}
              />
              <div className="border"></div>
              <label className="radioLabelWizard" htmlFor="tydligt">
                Jag är rak, tydlig och konsekvent i min hunduppfostran
              </label>
            </div>
          </div>
        </Step>

        <Step title="Storlek" description="Storlek">
          <div>
            <p className="stepTitle">
              Vilken storlek på hund har du möjlighet att ta hand om?
            </p>
            <div className="inputWrapper">
              <div className="inputContainer">
                <input
                  className="radio"
                  type="checkbox"
                  id="liten"
                  name="storlek"
                  value="liten"
                  checked={state.storlek === "liten"}
                  onChange={handleChange}
                />
                <div className="border"></div>
                <label className="radioLabelWizard" htmlFor="liten">
                  Enbart liten hund (mindre än 45 cm mankhöjd)
                </label>
              </div>
              <div className="inputContainer">
                <input
                  className="radio"
                  type="checkbox"
                  id="mellan"
                  name="storlek"
                  value="mellan"
                  checked={state.storlek === "mellan"}
                  onChange={handleChange}
                />
                <div className="border"></div>
                <label className="radioLabelWizard" htmlFor="mellan">
                  Liten till mellanstor hund (ca 45-55 cm mankhöjd)
                </label>
              </div>
              <div className="inputContainer">
                <input
                  className="radio"
                  type="checkbox"
                  id="stor"
                  name="storlek"
                  value="stor"
                  checked={state.storlek === "stor"}
                  onChange={handleChange}
                />
                <div className="border"></div>
                <label className="radioLabelWizard" htmlFor="stor">
                  Liten till stor hund (över 55 cm mankhöjd)
                </label>
              </div>
            </div>
          </div>
        </Step>

        <Step title="Aktiviteter" description="Aktiviteter">
          <div>
            <p className="stepTitle">
              Vilken typ av aktiviteter vill och planerar du att göra med din
              hund?
            </p>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="sportkompis"
                  name="sportkompis"
                  value="sportkompis"
                  checked={state.aktivitet.sportkompis}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="sportkompis">
                Joggingturer, cykelturer och vandringar
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="hundsport"
                  name="hundsport"
                  value="hundsport"
                  checked={state.aktivitet.hundsport}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="hundsport">
                Hundsporter såsom agility, rallylydnad med mera
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="sök"
                  name="sök"
                  value="sök"
                  checked={state.aktivitet.sök}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="sök">
                Sök och nosework
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="jakt"
                  name="jakt"
                  value="jakt"
                  checked={state.aktivitet.jakt}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="jakt">
                Jakt
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="vakt"
                  name="vakt"
                  value="vakt"
                  checked={state.aktivitet.vakt}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="vakt">
                Vakt
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="sällskap"
                  name="sällskap"
                  value="sällskap"
                  checked={state.aktivitet.sällskap}
                  onChange={handleChangeAktivitet}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="sällskap">
                Hunden kommer primärt vara sällskapshund och ges stimulans via
                promenader, aktivitetsövningar och massa gos
              </label>
            </div>
          </div>
        </Step>

        <Step title="Problematik" description="Problematik">
          <div>
            <p className="stepTitle">
              Vilka av nedanstående utmaningar hos en hund är du villig och
              kompentent nog att arbeta med?
            </p>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="hundaggressivitet"
                  name="hundaggressivitet"
                  value="hundaggressivitet"
                  checked={state.problematik.hundaggressivitet}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label
                className="checkbox-label-title"
                htmlFor="hundaggressivitet"
              >
                Utfall mot andra hundar
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="hoppar"
                  name="hoppar"
                  value="hoppar"
                  checked={state.problematik.hoppar}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="hoppar">
                Hoppar mot folk när den hälsar
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="integritet"
                  name="integritet"
                  value="integritet"
                  checked={state.problematik.integritet}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="integritet">
                Hög integritet
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="drar"
                  name="drar"
                  value="drar"
                  checked={state.problematik.drar}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="drar">
                Drar i kopplet
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="ensam"
                  name="ensam"
                  value="ensam"
                  checked={state.problematik.ensam}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="ensam">
                Kan inte vara ensam hemma
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="skällig"
                  name="skällig"
                  value="skällig"
                  checked={state.problematik.skällig}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="skällig">
                Skällig
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="resursförsvar"
                  name="resursförsvar"
                  value="resursförsvar"
                  checked={state.problematik.resursförsvar}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="resursförsvar">
                Resursförsvar
              </label>
            </div>
            <div className="inputContainerCheckbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="sjukdom"
                  name="sjukdom"
                  value="sjukdom"
                  checked={state.problematik.sjukdom}
                  onChange={handleChangeProblematik}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label-title" htmlFor="sjukdom">
                Sjukdomstillstånd som kräver regelbunden veterinärvård
              </label>
            </div>
          </div>
        </Step>

        <Step>
          <div className="resultStep">
            {!match && (
              <div className="resultButtonWrapper">
                <WizardLoader />
                <button
                  className="button wizardResultButton"
                  onClick={filterDogs}
                >
                  Visa resultat
                </button>
              </div>
            )}
            <div className="resultContainer">
              {/* Vid matchning */}
              {match && data.length && (
                <>
                  <h3>Du har blivit matchad!</h3>
                  <p>
                    Enligt våra algoritmer skulle du passa bäst med nedanstående
                    hundar. Läs på om hunden du matchats med och kontakta deras
                    nuvarande ägare om du seriöst är intresserad av att adoptera
                    deras hund.
                  </p>
                  <Link
                    to={{
                      pathname: "/resultat",
                      data: {
                        filteredDogs: this.filteredDogs,
                      },
                    }}
                  >
                    Visa resultat
                  </Link>
                  {/* <div id="dogResult" className="dogResult">
                    <WizardResults
                      state={state}
                      data={data}
                      fetchedDogs={fetchedDogs}
                    />
                  </div> */}
                </>
              )}
              {/* Ingen matchning */}
              {match && !data.length && (
                <>
                  <h3>
                    Just nu finns det tyvärr ingen hund som matchar med dig.
                  </h3>
                  <p>
                    Men ge inte upp! Vi på Matching Paws får löpande in hundar
                    som behöver omplaceras och snart kanske det kommer in en
                    hund som passar just dig.
                  </p>
                  <p>
                    Vi rekommenderar därför dig att gå in regelbundet på
                    hemsidan och göra om testet för att se om om det kommit ny
                    hundar som du matchar med eller om dina omständigheter har
                    ändrats.
                  </p>
                </>
              )}
              {dogsShown && (
                <div className="wizardButtonWrapper">
                  <Link to="/adoptera">
                    <button onClick={handleRedoQuiz} className="button">
                      Gör om quizet
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Step>
      </WizardForm>
    </div>
  );
};

export default WizardParent;
