import React from 'react';
import { connect } from 'react-redux';

import { setCategoriesData } from '../actions';

class SideMenu extends React.Component {

    componentDidMount = () => {
        this.props.setCategories();
    };

    clicked = (e) => {
        console.log(e.target.checked);
    };

    render() {
        if (!this.props.categories) {
            return <div >Loading</div>;
        }
        return (
            <div >
                <div className="card">
                    <div >
                        <div className="card-header">
                            Categories
                            <button
                                className="btn btn-info btn-sm fa fa-plus"
                                style={{ float: "right" }}
                                data-toggle="modal"
                                data-target="#create-category"
                            ></button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.categories.map((category) => {
                            return (
                                <li className="list-group-item" key={category.id}>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={category.id} onClick={this.clicked} />
                                        <label className="custom-control-label" htmlFor={category.id}>{category.name}</label>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
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
        setCategories: setCategoriesData
    };
};

export default connect(mapStateToProps, mapActionToProps())(SideMenu);