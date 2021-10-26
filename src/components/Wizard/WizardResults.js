import React from "react";
import DogBoxExtended from "../DogBoxExtended/DogBoxExtended";
import DogBox from "../DogBox/DogBox";

const WizardResults = ({ data, state, dogs, fetchedDogs }) => {
  //   console.log("state", state);
  //   console.log("data", data);

  return (
    <>
      {fetchedDogs?.map((dog) => (
        <DogBox
          key={dog._id}
          hundnamn={dog.hundnamn}
          alder={dog.alder}
          ras={dog.ras}
          bild={dog.bild}
          id={dog._id}
        />
        // <DogBoxExtended
        //   key={dog._id}
        //   hundnamn={dog.hundnamn}
        //   alder={dog.alder}
        //   ras={dog.ras}
        //   bild={dog.bild}
        //   id={dog._id}
        //   beskrivning={dog.beskrivning}
        //   kontaktnamn={dog.kontaktnamn}
        //   email={dog.email}
        //   lank={dog.lank}
        // />
      ))}
    </>
  );
};

export default WizardResults;
