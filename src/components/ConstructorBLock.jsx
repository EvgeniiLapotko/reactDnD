import React, { Component } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import ReactDOMServer from 'react-dom/server';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagIcon from '@mui/icons-material/Tag';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import { Button, IconButton, Tooltip } from '@mui/material';

class ConstructorBLock extends Component {
  containerRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      globalFrame: undefined,
    };
  }

  get container() {
    return this.containerRef;
  }

  createContainer() {
    let height = this.containerRef.current.offsetHeight;
    let width = this.containerRef.current.offsetWidth;
    // const zoom = d3
    //   .zoom()
    //   .extent([
    //     [1, 1],
    //     [width, height],
    //   ])
    //   .scaleExtent([1, 8])
    //   .on('zoom', (e) => {
    //     container.attr('transform', 'scale(' + e.transform.k + ')');
    //   });

    const container = d3
      .select(this.container.current)
      .append('svg')
      .style('background-color', '#dfdfdf')
      .attr('viewBox', [0, 0, width, height]);

    return container;
  }

  createHtml() {
    return "<div style='display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #fda'> <span>Logo</span> <span>Edit</span> </div>";
  }

  componentDidMount() {
    const { state } = this;
    const { globalFrame } = state;
    if (!globalFrame) {
      const container = this.createContainer();
      this.setState({ globalFrame: container });
    }
  }

  removeRect = () => {
    console.log('click');
  };

  createNewFrame = () => {
    const { globalFrame } = this.state;

    let transform;
    let height = this.containerRef.current.offsetHeight;
    let width = this.containerRef.current.offsetWidth;
    const zoom = d3
      .zoom()
      .extent([
        [0.5, 0.5],
        [width, height],
      ])
      .scaleExtent([0.5, 1.5])
      .on('zoom', (e) => {
        rect.attr('transform', (transform = e.transform));
      });

    const rect = globalFrame
      .append('svg')
      .call(zoom)
      .append('foreignObject')
      .attr('x', width / 2 - 150)
      .attr('y', height / 2 - 200);

    rect
      .style('background-color', '#ffffff')
      .style('border', '1px solid grey')
      .attr('width', 300)
      .attr('height', 400);

    rect.append('xhtml:div').html(
      `<div id='qwe' style="padding: 10px; text-align: right; cursor: pointer">
        ${ReactDOMServer.renderToStaticMarkup(
          <IconButton onClick={(e) => this.removeRect()}>X</IconButton>
        )}     
      </div>`
    );

    rect
      .append('xhtml:div')
      .html(this.createHtml())
      .append('xhtml:div')
      .html((d, i, arr, state) => {
        return ReactDOMServer.renderToStaticMarkup(
          <Button color='primary' variant='contained'>
            Button
          </Button>
        );
      });
  };

  render() {
    return (
      <ConstructorContainer id='container'>
        <HeaderConstructor>
          <IconBlock>
            <div>
              <Tooltip title='Create'>
                <IconButton style={{ color: '#fff' }} onClick={this.createNewFrame}>
                  <CreateIcon fontSize='large' style={{ fill: '#ddd' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title='Frame'>
                <IconButton style={{ color: '#fff' }}>
                  <TagIcon fontSize='large' style={{ fill: '#ddd' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title='Project List'>
                <IconButton style={{ color: '#fff' }}>
                  <FormatListBulletedIcon fontSize='large' style={{ fill: '#ddd' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title='Create Component'>
                <IconButton style={{ color: '#fff' }}>
                  <GridViewIcon
                    fontSize='large'
                    style={{ fill: '#ddd', transform: 'rotate(90deg)' }}
                  />
                </IconButton>
              </Tooltip>
            </div>

            <Tooltip title='More'>
              <IconButton style={{ color: '#fff' }}>
                <MoreVertIcon fontSize='large' style={{ fill: '#ddd' }} />
              </IconButton>
            </Tooltip>
          </IconBlock>
        </HeaderConstructor>
        <ConstructorBlock ref={this.containerRef}></ConstructorBlock>
      </ConstructorContainer>
    );
  }
}

const ConstructorContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  box-sizing: border-box;
`;
const ConstructorBlock = styled.div`
  height: calc(100vh - 70px);
  overflow: scroll;
  overflow: hidden;
  svg : {
    overflow: scroll;
    overflow: hidden;
  }
`;

const HeaderConstructor = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #5c5c5c;
  border-left: 1px solid #5c5c5c;
  height: 70px;
  background-color: #2c2c2c;
`;

const IconBlock = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  padding: 0 15px;
`;

export default ConstructorBLock;
