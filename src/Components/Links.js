import React from 'react';
import LinksList from './LinksList'

const Links = ({links , setLinks}) => {
    return (
        <div className="link-container">
            <ul className="link-list">
                {links.map(link => (
                    <LinksList 
                    links = {links}
                    key = {link.id} 
                    text={link.text}
                    link = {link}
                    setLinks = {setLinks}/>
                ))}
            </ul>
        </div>
    )
}

export default Links;