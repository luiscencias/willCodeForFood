import React from 'react';

import {useScrollToTopOnMount} from "../../helpers";

class Shop extends React.Component {
    render(){
        return (
            <div>
                hello
            </div>
        )
    }
};

export default () => {
    useScrollToTopOnMount();

    return <Shop />;
};