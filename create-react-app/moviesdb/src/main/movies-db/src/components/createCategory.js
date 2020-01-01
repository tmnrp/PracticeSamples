import React from 'react';
import { moviesDBAxios } from '../api/moviesDBApi';
import { connect } from 'react-redux';
import { setCategoriesData } from '../actions';

class CreateCategory extends React.Component {

    state = {
        name: ''
    };

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    saveCategory = (event) => {
        moviesDBAxios.post('/saveCategory', {
            name: this.state.name
        }).then((response) => {
            this.props.setCategoriesData();
            window.$('#create-category').modal('hide');
            this.setState({
                name: ''
            });
        }).catch((response) => {
            console.log('Error: ', response);
        });
    };

    render() {

        return (
            <div >
                <div className="modal fade" id="create-category" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.categoryModalMode}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Category</h1>
                                        <p className="lead">In ontology, the different kinds or ways of being are called categories of being;
                                            or simply categories. To investigate the categories of being is to determine the most fundamental and
                                            the broadest classes of entities. A distinction between such categories, in making the categories or
                                            applying them, is called an ontological distinction.</p>
                                    </div>
                                </div>
                                <form >
                                    <input
                                        value={this.state.name}
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Enter the name of the category"
                                        onChange={this.onNameChange}
                                    />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.saveCategory}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        categoryModalMode: state.categoryModalMode
    };
};

const mapActionToProps = () => {
    return {
        setCategoriesData: setCategoriesData
    };
};

export default connect(mapStateToProps, mapActionToProps())(CreateCategory);