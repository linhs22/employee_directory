import React from "./node_modules/react";
import Wrapper from "../wrapper/wrapper";
import EmployeeCard from "../employeeCard/employeeCard"
import API from "../../utils/API";
import Moment from './node_modules/react-moment';
import Header from "../header/header"


class body extends React.Component {

  state = {
    peoples: [],
    search: "",
    results: [],
    filter: ""
  };

  handleInputChange = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
    console.log(this.state.search.length);

    if (this.state.search.length === 1) {
      this.setState({
        peoples: this.state.results
      })
    }
    else {
      let newPeoples = this.state.peoples.filter(peoples => {
        console.log(value, peoples.name.first);

        return peoples.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || peoples.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1

      })
      this.setState({
        peoples: newPeoples
      })
    }

  }

 


  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({ peoples: res.data.results , results: res.data.results})
      })
      .catch(err => console.log(err));
  }

  removeEmployee(id) {
    let newPeoples = this.state.peoples.filter(person => person.id.value !== id);
    console.log(id);
    this.setState({
      peoples: newPeoples
    })
  }

  render() {
    return (


      <div>
        <Wrapper>
          <Header />
          <span className="input-group">SEARCH: <input type="text" onChange={this.handleInputChange} className="form-control" name="search" value={this.state.search} placeholder="By Name"/> </span>
          <hr />
          {

            this.state.peoples.map(peoples => {
              return (

                <div className="container" key={peoples.id.value}>
                  <table className="table table-striped">
                    <tbody>
                      <EmployeeCard
                        key={peoples.id.value}
                        firstname={peoples.name.first}
                        name={peoples.name.first + " " + peoples.name.last}
                        image={peoples.picture.thumbnail}
                        email={peoples.email}
                        DOB={<Moment format="MM/DD/YYYY">{peoples.dob.date}</Moment>}
                        id={peoples.id.value}
                        removeEmployee={() => this.removeEmployee(peoples.id.value)}
                      />
                    </tbody>
                  </table>
                </div>
              )
            })
          }
        </Wrapper>
      </div>
    )
  }
}
export default body;