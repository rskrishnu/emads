import React from 'react';

class Header extends React.Component{
render() {
    
    return(
            <div className="text-center text-white bg-dark">
                <h3 className='m-auto'>{this.props.dataFromParent}</h3>
            </div>
    )
}
}
export default Header;