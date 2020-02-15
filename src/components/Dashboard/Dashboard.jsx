import React from 'react';
import styled from 'styled-components';
import Map from './Map/Map';

const StyledDiv = styled.div`
    font-size: 2rem;
`;

const Dashboard = props => {
    return (
          <div className="ui grid">
            <div className="ui row">
            <div className="thirteen wide column" style={{padding: 0}}>
              <Map position={[59.436691, 10.594773]}/>
            </div>
            <div className="ui inverted vertical labeled ui overlay right visible sidebar menu three wide column" style={{padding: 0}}>
              <a className="item">
                ID: 1
              </a>
              <a className="item">
                ID: 2
              </a>
              <a className="item">
                ID: 3
              </a>
            </div>
            </div>
          </div>
      
    );
};

export default Dashboard;