import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {
   
    renderComment(dish){
      let options = { year: 'numeric', month: 'short', day: 'numeric' };
      if (this.props.dish) {

        var disha = this.props.comments.map(function(dishy){
          if(dishy != null)
            return (
              <div>
                  <li key={dishy.id} className="m-2">{dishy.comment}</li>
                  <li> -- {dishy.author}, {new Date(dishy.date).toLocaleDateString("en-US", options)}
                  </li>
              </div>
            );
          else
            return (
              <div></div>
            );
        });
      
      return(
      <div><h3>Comments</h3>
      <ul className='list-unstyled'>
      {disha}
      </ul></div>
      );
    }
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
        <div className="container">
        <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
          </div> 

          <div className="col-12 col-md-5 m-1">
          {this.renderComment()}
          </div>
          </div> 
          </div>
        );
    }
}

export default DishDetail;