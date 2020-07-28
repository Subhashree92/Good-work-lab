import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Information from './data-json';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'42vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.address.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
          <div id="clickdiv"style={{position:'relative',left:'10vh',cursor:'pointer'}}>
            <span style={styleInfo}>{data.id}</span><br/>
            <span style={styleInfo}>{data.name}</span><br/>
            <span style={styleInfo}>{data.address}</span><br/>
            <span style={styleInfo}>{data.pincode}</span><br/>
            <hr class="solid"></hr>
          </div>
      </div>
      )
    })

    return (
      <div >
        
      <input type="text" placeholder="search user by ID ,address,name " style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      <div id="" style={{overflow:'scroll', height:'400px',width:'350px'}}>
      {items}
      
      </div>
      </div>
    )
  }
}

export default App;