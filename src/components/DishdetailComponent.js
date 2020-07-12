import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {
  constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state={
          isModalOpen:false,
          isDropdownOpen:false,
          rating:1,
          author:'',
          comment:'',
          touched:{
                author:false,
                comment:false
            }

        }
        
      }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });

    }

   toggleDropdown() {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    }
   toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleComment(event) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();

    }
    handleBlur = (field) => (evt) =>{
        this.setState({
            touched:{ ...this.state.touched, [field]:true }
        });
    }
    validate(author,comment){
        const errors={
            author:'',
            comment:''
        };

        if(this.state.touched.author && author.length < 3 )
            errors.author='Name Must be greater than 2 characters.';
        else if(this.state.touched.author && author.length > 10)
            errors.firstname="Name Must be 15 characters or less.";

        if(this.state.touched.comment && comment.length < 3 )
            errors.lastname='Comment Should be > 3 letters.';

        return errors;

    }

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
      const errors= this.validate(this.state.author,this.state.comment);

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
          <Button outline onClick={this.toggleModal}>Submit Comment</Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating" 
                                value={this.state.rating} onChange={this.handleInputChange}>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Input type="text" id="author" name="author"
                                        placeholder="Your Name"
                                        value={this.state.author}
                                        valid={errors.author === ''}
                                        invalid={errors.author !== ''}
                                        onBlur={this.handleBlur('author')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.author}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment" rows="5"
                                    placeholder="Comment"
                                    value={this.state.comment}
                                    valid={errors.comment === ''}
                                    invalid={errors.comment !== ''}
                                    onBlur={this.handleBlur('comment')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.comment}</FormFeedback>
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    
                    </ModalBody>
                </Modal>
          </div>
          </div> 
          </div>
          
        );
    }
}

export default DishDetail;