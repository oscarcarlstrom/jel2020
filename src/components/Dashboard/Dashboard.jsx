import React from 'react';
import styled from 'styled-components';
import Map from './Map/Map';

const StyledDiv = styled.div`
    font-size: 2rem;
`;

const Dashboard = props => {
    return (

          <div className="ui celled grid">
            <div className="thirteen wide column">
              <Map position={[59.436691, 10.594773]}/>
            </div>
              <div className="three wide column">
                <div className="ui pushable">
                  <div className="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
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
          </div>
      
    );
};

export default Dashboard;