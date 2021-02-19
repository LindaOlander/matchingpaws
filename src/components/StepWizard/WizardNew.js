import React from 'react';
import axios from 'axios';
import DogBox from "../DogBox/DogBox";

class WizardNew extends React.Component {
    state = {
        data: [],
        step: 1,
        //   teamName: "",
        erfarenhet: {
            mycket: false,
            ganska: false,
        },
        aktiviteter: {
            jakt: false,
            sportkompis: false,
        },
        problematik: {
            hoppar: false,
            ingen: false,
        }
    };

    fetchUsersWithAxios = () => {
        this.setState({...this.state});
        axios.get('https://matchingpaws-api.herokuapp.com/dogs')
            .then(response => {
                this.setState({data: response.data})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            });
    };

    componentDidMount() {
        this.fetchUsersWithAxios();
    }
  
    handleChange = input => e => {
      const { target } = e;
      if (input === "erfarenhet") {
        this.setState(prev => ({
          erfarenhet: {
            ...prev.erfarenhet,
            [target.name]: target.checked
          }
        }));
      } else {
        this.setState({ [input]: target.checked });
      }
    };

    handleChangeAktiviteter = input => e => {
      const { target } = e;
      if (input === "aktiviteter") {
        this.setState(prev => ({
          aktiviteter: {
            ...prev.aktiviteter,
            [target.name]: target.checked
          }
        }));
      } else {
        this.setState({ [input]: target.checked });
      }
    };

    handleChangeProblematik = input => e => {
      const { target } = e;
      if (input === "problematik") {
        this.setState(prev => ({
          problematik: {
            ...prev.problematik,
            [target.name]: target.checked
          }
        }));
      } else {
        this.setState({ [input]: target.checked });
      }
    };

    filterDogs = () => {
            const copyDogs = [...this.state.data];
            console.log('copyDogs', copyDogs)
            const filterOnAktivititet = copyDogs.filter(dog => dog.aktivitet.jakt === this.state.aktiviteter.jakt)
            // console.log('dog.aktivitet.jakt', copyDogs.aktivitet.jakt);
            console.log('this.state.aktiviteter.jakt', this.state.aktiviteter.jakt);
            console.log('filterOnAktivititet', filterOnAktivititet);
            this.setState({data: filterOnAktivititet});
        }
      
      render() {
        console.log('state', this.state);

      return (
        <div>
          <Input handleChange={this.handleChange} handleChangeAktiviteter={this.handleChangeAktiviteter} handleChangeProblematik={this.handleChangeProblematik} />
          <button onClick={this.filterDogs}>Filtrera</button>
          {this.state.data.map(dog =>
                <DogBox
                key={dog._id}
                hundnamn={dog.hundnamn}
                alder={dog.alder}
                ras={dog.ras}
                bild={dog.bild}
                id={dog._id} />
            )}
        </div>
      );
    }
  }
  
  class Input extends React.Component {
    render() {
      const { handleChange, handleChangeAktiviteter, handleChangeProblematik } = this.props;
      return (
        <div>
        {/* Erfarenhet */}
            <form>
            <span>mycket</span>
            <input
                type="checkbox"
                name="mycket"
                id="mycket"
                onChange={handleChange("erfarenhet")}
            />
            <span>ganska</span>
            <input
                type="checkbox"
                name="ganska"
                id="ganska"
                onChange={handleChange("erfarenhet")}
            />
          </form>
        {/* Aktiviteter */}
          <form>
            <strong>Aktiviteter</strong>
            <span>jakt</span>
            <input
            type="checkbox"
              name="jakt"
              id="jakt"
              onChange={handleChangeAktiviteter("aktiviteter")}
            />
            <span>sportkompis</span>
            <input
            type="checkbox"
              name="sportkompis"
              id="sportkompis"
              onChange={handleChangeAktiviteter("aktiviteter")}
            />
          </form>
        {/* Problematik */}
          <form>
            <strong>Problematik</strong>
            <span>hoppar</span>
            <input
            type="checkbox"
              name="hoppar"
              id="hoppar"
              onChange={handleChangeProblematik("problematik")}
            />
            <span>ingen</span>
            <input
            type="checkbox"
              name="ingen"
              id="ingen"
              onChange={handleChangeProblematik("problematik")}
            />
          </form>
        </div>
      );
    }
  }

  export default WizardNew;