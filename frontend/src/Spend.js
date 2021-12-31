import React,{ Component , useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class Spend extends Component{

render(){
    return(
      <div>
        <h1>YOU Spend</h1>
<div class="bloc" align-center> 
        <div class="cercl">
        <div class="c">
        <img src="mai.jpg" alt="" width="400" ></img>
        <h2 class="t">1000$
        </h2>
        </div>
        </div>
        <div class="moi">
          <button type="button" class="btn btn-outline-secondary">89$ today</button>
          <button type="button" class="btn btn-outline-secondary">80$ yesterday</button>
          <button type="button" class="btn btn-outline-secondary">19$ 27/12</button>
          <button type="button" class="btn btn-outline-secondary">29$ 28/12</button>
          <a href="#demo" data-bs-toggle="collapse">See more</a>
          <div id="demo" class="collapse">
              <div class="moi">
                 <button type="button" class="btn btn-outline-secondary">89$</button>
                 <button type="button" class="btn btn-outline-secondary">80$</button>
                 <button type="button" class="btn btn-outline-secondary">19$</button>
                 <button type="button" class="btn btn-outline-secondary">29$</button>
             </div>
          </div>  
        </div> 
      </div> 
      </div>
    )
}
}