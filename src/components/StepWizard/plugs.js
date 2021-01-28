import React, { Fragment } from 'react';

const Link = ({ href, children }) => (
    <a href={href} className={'alert-link'} target='_blank'>
        { children }
    </a>
);

const Plugs = () => (
    <Fragment>
    </Fragment>
);

export default Plugs;