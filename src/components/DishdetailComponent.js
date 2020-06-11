import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    renderComment(dish){
      let options = { year: 'numeric', month: 'short', day: 'numeric' };
      if (this.props.selectedDish) {

        var disha = this.props.selectedDish.comments.map(function(dishy){
          if(dishy != null)
            return (
              <div>
                <ul className='list-unstyled'>
                  <li key={dishy.id} className="m-2">{dishy.comment}</li>
                  <li> -- {dishy.author}, {new Date(dishy.date).toLocaleDateString("en-US", options)}
                  </li>
                </ul>
              </div>
            );
          else
            return (
              <div></div>
            );
        });
      }
      return(
      <div>{disha}</div>
      );
    }

  renderDish(dish){
          if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
          else
            return(
                <div></div>
            );
}

    render() {
      

        return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
          </div> 

          <div className="col-12 col-md-5 m-1">
           <h4>Comments</h4>
          {this.renderComment()}
          </div>
          </div> 
        );
    }
}

export default DishDetail;