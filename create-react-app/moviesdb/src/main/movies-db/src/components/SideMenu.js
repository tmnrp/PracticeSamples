import React from 'react';
import { connect } from 'react-redux';

import { setCategoriesData, setCategoryModalMode } from '../actions';

class SideMenu extends React.Component {

    componentDidMount = () => {
        this.props.setCategories();
    };

    clicked = (e) => {
        console.log(e.target.checked);
    };

    processCategory = (mode) => {
        this.props.setCategoryModalMode(mode);
        if (mode === 'Create') {

        } else {

        }
    };

    render() {
        if (!this.props.categories) {
            return <div >Loading</div>;
        }
        return (
            <div >
                <div >
                    <div className="card-header">
                        Categories
                        <div
                            className="btn btn-info btn-sm fa fa-plus"
                            style={{ float: "right" }}
                            data-toggle="modal"
                            data-target="#create-category"
                            onClick={() => this.processCategory('Create')}
                        ></div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {this.props.categories.map((category) => {
                        return (
                            <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ padding: "5px 10px 5px 10px" }}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id={category.id} onClick={this.clicked} />
                                    <label className="custom-control-label" htmlFor={category.id}>{category.name}</label>
                                </div>
                                <div >
                                    <span
                                        className="fa fa-edit"
                                        style={{ paddingRight: "5px" }}
                                        data-toggle="modal"
                                        data-target="#create-category"
                                        onClick={() => this.processCategory('Edit')}
                                    />
                                    <span
                                        className="fa fa-trash"
                                        style={{ paddingleft: "5px" }}
                                        data-toggle="modal"
                                        data-target="#create-category"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesData
    };
};

const mapActionToProps = () => {
    return {
        setCategories: setCategoriesData,
        setCategoryModalMode: setCategoryModalMode
    };
};

export default connect(mapStateToProps, mapActionToProps())(SideMenu);