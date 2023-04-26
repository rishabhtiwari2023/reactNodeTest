import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://localhost:3000/table")
			.then((res) =>
       res.json())
			.then((json) => 
      {
        console.log(json)
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;
console.log(items)
		return (
			
		<div className = "App">
			<h1> Fetch data from an api in react </h1><h6>i focus on logic not design bcoz time </h6><div className = "App1" ><table> <th><td>have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</td></th>{
        
				items[1].map((item) => (
					<tr><td> <span>{item.first_name}{item.id}</span></td></tr>				
					
          ))
		  
		  }</table>
		 <table><th><td>last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</td></th>
		  {items[2].map((item) => (				
			 <tr><td> <span>{item.first_name}{item.id}</span></td></tr>
 ))}
 </table><table><th><td>income lower than $5 USD and have a car of brand “BMW” or “Mercedes</td></th>
		  {items[3].map((item) => (				
			 <tr><td> <span>{item.first_name}{item.id}</span></td></tr>
 ))}
 </table>
 <table><th><td>Top 10 cities</td></th>
 {items[4].map((item) => (				
			 <tr><td> <span>{item}{item.id}</span></td></tr>
 ))}
 </table>
 </div><table><th><td>phone above 10000</td></th>
		  {items[0].map((item) => (				
			 <tr><td> <span>{item.first_name}{item.id}</span></td></tr>
 ))}
 </table>
		</div>
	);
}
}

export default App;
