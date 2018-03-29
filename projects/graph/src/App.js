import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 700;
 const canvasHeight = 480;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    
    // Clear it

    ctx.strokeStyle= "#FF0000"
    ctx.fillStyle='lightgray';
    ctx.fillRect(0,0, canvasWidth, canvasHeight);

      console.log("updating canvas");
      console.log(this.props.graph.vertexes);
      //draw the 
      ctx.moveTo()

    ctx.fillStyle="white";

    //to draw graph
    ctx.moveTo(50,50);
    ctx.lineTo(100,100);
    ctx.stroke();

    //get the pen back to where circle goes
    ctx.moveTo(60,50);
    ctx.arc(50,50,10,0,2*Math.PI,true);
    ctx.fill();
    ctx.stroke();
    //do begin path before every circle
    ctx.beginPath();

    ctx.font="10px Arial";
    ctx.strokeStyle="black";
    ctx.strokeText("1", 50, 50);
    ctx.stroke();

    //to draw a line to next location
  

    
    //Draw an another circle

    ctx.moveTo(110,100);
    ctx.arc(100,100,10,0,2*Math.PI,true);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();

    ctx.font="10px Arial";
    ctx.strokeStyle="black";
    ctx.strokeText("2", 100, 100);
    ctx.stroke();


   // ctx.fillStyle = 'gray';
    //ctx.fillRect(0, 0, canvasWidth, canvasHeight);
   // ctx.fillStyle = 'red';
    //ctx.fillRect(10, 10, 20, 20);

    //ctx.moveTo(25,299);
    //ctx.lineTo(400,300);
    //ctx.moveTo(425,299);
    //ctx.lineTo(30,200);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.arc(95, 50, 40, 0, 2*Math.PI);
    //ctx.stroke();

    //var grd = ctx.createLinearGradient(0,0,200,0);
    //grd.addColorStop(0, "red");
    //grd.addColorStop(0, "white");

    //fill with gradient
    //ctx.fillStyle=grd;
   // ctx.fillRect(10,10,150,80);



   // for(var i =0; i<100; i++)
   // {
    //  ctx.moveTo(2* i, 20);
     // ctx.lineTo(3*i, 250);

     // ctx.strokeStyle="rgb(0,0,255)";
     // ctx.stroke();
   // }
    
    //ctx.moveTo(0,400);

   // for(var j =0; j<100; j++)
    //{
    //  ctx.lineTo(i,Math.cos(j));
   // }
   // ctx.stroke();
    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
    
  }
    
  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas>;
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
    this.state.graph.debugCreateTestData();
    this.state.graph.bfs(this.state.graph.vertexes[]);
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
