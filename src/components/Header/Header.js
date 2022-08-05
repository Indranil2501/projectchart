import { connect } from "react-redux";
import React from "react";

const Header = (props) {
    return {
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="col pl-0">
                        <div className="navbar-brand mx-0">D3 Charts</div>
                    </div>
                    <div className="col pr-o text-right">
                        <span>User: Indranil</span>
                    </div>
                </nav>
            </header>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {}) (Header);