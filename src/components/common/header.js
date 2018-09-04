import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../store/actions/authAction"
import NavBar from "./navbar"
import NavLink from "./nav-link"

const Header = (props) => {
    return (
        <NavBar title='React Shop' >
            <NavLink to='/'>Home</NavLink>
            {
                props.auth.logged ?
                    <NavLink to='/' onClick={props.logout}>Logout</NavLink>
                    :
                    <NavLink to='/login'>Login</NavLink>
            }
        </NavBar>
    );
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)