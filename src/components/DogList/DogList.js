import React from 'react';
//import {useDispatch, useSelector} from 'react-redux';
//import Dog from '../Dog/DogPage';
//import { fetchDogs } from '../../store/actions/dogAction';
import dogsJson from '../../dogsJson.json';
import DogBox from '../DogBox/DogBox';

const DogList = () => {
  //const [filteredDogs, setFilteredDogs] = useState([]);
  // const dogs = useSelector(state => state.dogs);
  // const dispatch = useDispatch();
  
  // const getDogs = () => {
  //   dispatch(fetchDogs())
  // };

  // const getDogImage = () => {
  //   dispatch(fetchRandomDogImage())
  // };

  // const filterDogs = () => {
  //   const copyDogs = [...dogs];
  //   const filtered = copyDogs.filter(dog => dog.startsWith('e'))
  //   setFilteredDogs(filtered)
  // }

  // useEffect(() => {
  //   setFilteredDogs(dogs)
  // }, [dogs]);

  // let allDogs = dogsJson.dogs;

  // const filterAge = () => {
  //   const copyDogs = [...allDogs]
  //   const filterOnAge = dogsJson.dogs.filter(dog => dog.age > 2);
  //   setFilteredDogs(filterOnAge);
  // }

  // console.log('allDogs', allDogs);

  // const arr2 = dogsJson.dogs.filter(dog => dog.children === true);
  // console.log('arr2', arr2);

  //const ageAndGender = d => d.age > 37 && d.gender === 'female';

  //const arr3 = dogsJson.dogs.filter(ageAndGender);
  //console.log('arr3', arr3);

  return (
    <div className="siteWrapper">
      {/* <button className="button" onClick={getDogs}>Alla hundar</button>
      <button className="button" onClick={filterDogs}>Se mina matchningar</button>
      <Dog dogs={filteredDogs}/> */}

      {dogsJson.dogs.map(dog =>
        <DogBox
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

export default DogList;