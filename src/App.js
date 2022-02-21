import React, { Component } from 'react'
import Process from './Process'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
state = {
  items: [],
  text: ""

}

handlechange = e =>{
  this.setState({text: e.target.value})
}
handelAdd = e => {
  if(this.state.text !== ""){
    const items = [...this.state.items, this.state.text];
    this.setState({items: items, text: ""});
  }


}

handeldelete = id => {
  alert("Do you Want to delete");
  console.log("Deleted", id);
  const Olditems = [...this.state.items] 
  console.log("Old items", Olditems);
  const items = Olditems.filter((element, i) => {
    return i !== id
  })
  this.setState({items: items});

}



  render() {
    return (
      <div className="container-fluid my-5">
<div className="row">
<div className="col-sm-6 mx-auto text-white shadow-lg p-3">
<h2 className="text-center">Today's Plan</h2>
<div className="row">


<div className="col-9">


<input type="text" className="form-control" placeholder="write Plan here" value={this.state.text} onChange={this.handlechange}/>


</div>
<div className="col-2">
  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handelAdd}>Add</button>
</div>

<div className="container-fluid">
<ul className="list-unstyled row m-5 ">

{
  this.state.items.map((value, i)=>{
    return <Process key={i} id={i} value={value} sendData={this.handeldelete} />
  })
}
</ul>


</div>


</div>
</div>
</div>
      </div>
    )
  }
}
export default  App;