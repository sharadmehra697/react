import React from 'react';
import { Media } from 'reactstrap';


function RenderLeader(props){

	return(
		<div className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media object src={props.leaderId.image} alt={props.leaderId.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{props.leaderId.name}</Media>
                <p>{props.leaderId.designation}</p>
                <p>{props.leaderId.description}</p>
              </Media>
            </Media>
          </div>
              );
}

export default RenderLeader;