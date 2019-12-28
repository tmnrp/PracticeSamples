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
                <h6 style={{ textAlign: "center" }}>Select Categories</h6>
                <div className="card">
                    <div className="card-body">
                        {this.props.categories.map((category) => {
                            return (
                                <div key={category.id} className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id={category.id} onClick={this.clicked} />
                                    <label className="custom-control-label" htmlFor={category.id}>{category.name}</label>
                                </div>
                            );
                        })}
                    </div>
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