import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return <div>Songs List</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
// pass in the component as the 2nd function called in connect()()
//// 
//// function connect(){
////     return function someFunction(){
////         return 'YO'
////     }
//// }=====>connect()()