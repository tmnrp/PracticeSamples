import React from 'react';

class SideMenu extends React.Component {
    clicked = (e) => {
        console.log(e.target.checked);
    };
    render() {
        return (
            <div >
                <h6 style={{ textAlign: "center" }}>Select Categories</h6>
                <div className="card">
                    <div className="card-body">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" onClick={this.clicked} />
                            <label className="custom-control-label" htmlFor="customCheck1">Action</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                            <label className="custom-control-label" htmlFor="customCheck2">Drama</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default SideMenu;