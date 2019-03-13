import React from 'react';
import { Stage, Layer, Text, Rect, Transformer } from 'react-konva';
import Stars from "../components/StarsComponent";

class MainPage extends React.Component{

  render(){
    const width = (typeof window !== 'undefined') ? window.innerWidth :0;
    const height = (typeof window !== 'undefined') ? window.innerHeight : 0;

    return (
      <Stage width={width} height={height} ref={node => this.stage = node} onMouseDown={this.handleOnMouseDown}>
        <Layer ref={node => this.layer = node}>
          <Text text={"hello there"} />
          <Rect
            x={20}
            y={20}
            width={100}
            height={100}
            fill={"red"}
            name={'rect1'}
            type={'rect'}
            draggable={true}
          />

          <Rect
            x={300}
            y={300}
            width={100}
            height={100}
            fill={"blue"}
            name={'box1'}
            type={'rect'}
            draggable={true}
          />

          {<Stars />}

          <Transformer
            ref={node => {
              this.transformer = node;
            }}
          />
        </Layer>
      </Stage>
    )
  }

  handleOnMouseDown = (e) => {
    if(e.target === this.stage){
      this.transformer.detach();
    }

    if (e.target.attrs.type === 'rect' ||
       e.target.attrs.type === 'group_star') {
      this.transformer.attachTo(e.target);
      this.layer.draw();
    }else if(e.target.attrs.type === 'star'){
      this.transformer.attachTo(e.target.parent);
      this.layer.draw();
    }

    this.transformer.getLayer().batchDraw();

    console.log('click tap');
  };
}

export default MainPage;