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
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{padding: "5px 10px 5px 10px"}}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id={category.id} onClick={this.clicked} />
                                    <label className="custom-control-label" htmlFor={category.id}>{category.name}</label>
                                </div>
                                <div >
                                    <span className="fa fa-edit" style={{ paddingRight: "5px" }} />
                                    <span className="fa fa-trash" style={{ paddingRight: "5px" }} />
                                </div>
                            </li>
                            /*<li key={category.id} className="list-group-item" style={{ display: "flex", justifyContent: "space-between", padding:"5 10 5 10"}}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id={category.id} onClick={this.clicked} />
                                    <label className="custom-control-label" htmlFor={category.id}>{category.name}</label>
                                </div>
                                <div>
                                    <span className="fa fa-edit" style={{ paddingRight: "5px" }}></span>
                                    <span className="fa fa-trash" style={{ paddingLeft: "5px" }}></span>
                                </div>
                            </li>*/
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
        setCategories: setCategoriesData
    };
};

export default connect(mapStateToProps, mapActionToProps())(SideMenu);