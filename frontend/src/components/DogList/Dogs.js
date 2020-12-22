import React, {useState, useEffect} from 'react';
//import {useDispatch, useSelector} from 'react-redux';
import dogsJson from '../../dogsJson.json';
import DogBox from '../DogBox/DogBox';
import axios from 'axios';

  // const [filter, setFilter] = useState('');
  // const [filteredDogs, setFilteredDogs] = useState([]);
  // const [catFilteredDogs, setCatFilteredDogs] = useState([]);

  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value)
  //   console.log(event.target.value)
  // }

  // const filterAge = () => {
  //   const filterOnAge = dogsJson.dogs.filter(dog => dog.age > 4);
  //   setAll(filterOnAge);
  // }
  
  // const filterCatCompatible = () => {
  //   const filterOnCat = dogsJson.dogs.filter(dog => dog.cat === true);
  //   setCatFilteredDogs(filterOnCat);
  // }

  // console.log(filteredDogs);
  // console.log(catFilteredDogs);

  // LIST

const Dogs = () => {
  //const allDogs = dogsJson.dogs;
  const [dogs, setDogs] = useState(dogsJson.dogs);
  const [data, setData] = useState({ animals: [{}]});
  const [filter, setFilter] = useState('');

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://matching-paws.herokuapp.com/animals',
  //   );
 
  //   setData(result.data);
  // });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://matching-paws.herokuapp.com/animals',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  console.log(data);

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // const [filteredDogs, setFilteredDogs] = useState('');
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const allDogs = [
  //   "Siri",
  //   "Alexa",
  //   "Google",
  //   "Facebook",
  //   "Twitter",
  //   "Linkedin",
  //   "Sinkedin"
  // ];


  // const handleChange = event => {
  //   setFilteredDogs(event.target.value)
  // };

  // console.log(filteredDogs);
  
  // useEffect(() => {
  //   const results = allDogs.filter(person =>
  //     person.toLowerCase().includes(filteredDogs)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  // ---

  // let resEle = document.querySelector("result");
  //  let checkEle = document.querySelectorAll("check");
  //  let arr = [22, 10, 50, 30, 90, 33, 80, 75, 33, 99, 150, 105];
  //  let resArr = arr;

  //  function filterArr() {
  //     checkEle.forEach((item, index) => {
  //        if (item.checked && index == 0) {
  //           resArr = resArr.filter((num) => num > 50);
  //           resEle.innerHTML = resArr;
  //        }
  //        else if (item.checked && index == 1) {
  //           resArr = resArr.filter((num) => num % 5 == 0);
  //           resEle.innerHTML = resArr;
  //        }
  //        else if (item.checked && index == 2)
  //        resArr = resArr.filter((num) => num % 3 == 0);
  //        resEle.innerHTML = resArr;
  //     });
  //  }
  //console.log(resArr);
  
  // const foo = [
  //   { 'id': 1, 'price': 200, 'type': 1 },
  //   { 'id': 2, 'price': 200, 'type': 2 }
  //  ];
   
  // const filteredData = foo.filter(item => item.type === 2);
  // console.log(filteredData);

  // function filter(filteredData){
  //   let newArr = []
  //     if(filteredData.type === 2){
  //       newArr.push(filteredData)
  //     }
  //   return newArr;
  // }

  // const people = [
  //   {
  //     name: 'James',
  //     age: 31,
  //   },
  //   {
  //     name: 'John',
  //     age: 45,
  //   },
  //   {
  //     name: 'Paul',
  //     age: 65,
  //   },
  //   {
  //     name: 'Ringo',
  //     age: 49,
  //   },
  //   {
  //     name: 'George',
  //     age: 34,
  //   }
  // ];

  //const [data, setData] = useState(people);
  //console.log(data)

  // const filterPeople = (data) => {
  //   const filteredPeople = people.filter(person => person.age < 60)
  //   setData(filteredPeople);
  // }

  // filter function

  return (
    <div className="dogs-wrapper">
        {/* {data && data.animals && data.animals.map(item => (
            <p>{item.name}</p>
        ))}
      <button onClick={handleFilterChange} value="size">Filter size</button> */}
      {/* <button onClick={this.handleFilterChange} value="Web">Web design</button> */}
      {/* {data.filter(person => person.age < 60).map(filteredPerson => (
        <p>
          {filteredPerson.name}
        </p>
      ))} */}
      {/* <div className="sample">[22,10,50,30,90,33,80,75,33,99,150,105]</div>
      <div className="result"></div>
      <br />
      <input type="checkbox" className="check" onclick={filterArr} />Number should be greater than 50<br />
      <input type="checkbox" className="check" onclick={filterArr} />Number should divide by 5<br />
      <input type="checkbox" className="check" onclick={filterArr} />Number should divide by 3<br />
      <h3>tick the above checkbox to apply filter to the array above</h3> */}
      {/* LIST */}
      {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> */}
      {/* <input
        type="checkbox"
        value="Siri"
        onChange={handleChange}
      />Siri
      <input
        type="checkbox"
        value="Google"
        onChange={handleChange}
      />Google
      <input
        type="checkbox"
        value="Alexa"
        onChange={handleChange}
      />Alexa
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      {/* <div className="filterButtons">
        <button onClick={handleFilterChange} value="">Alla</button>
        <button onClick={filterAge} value="Age">Äldre hundar</button>
        <button onClick={filterCatCompatible} value="Cat">Kan bo med katt</button>
      </div> */}
      <div id="dogs" style={{padding: "60px 10px 0 10px"}}>
        <h4 style={{margin: "0", fontSize: "24px", textAlign: "center"}}>Enligt våra algoritmer skulle du passa bäst ihop med:</h4>
      </div>
      {dogs.map(dog =>
        <DogBox
          key={dog.id}
          name={dog.name}
          image={dog.image}
          breed={dog.breed}
          age={dog.age}
          cat={dog.cat}
          children={dog.children}
          longWalks={dog.longWalks}
          id={dog.id} />)}
    </div>
  )
};

export default Dogs;