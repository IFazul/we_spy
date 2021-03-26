import React from 'react';

const Form = ({setInputLink , setLinks , links , inputLink}) => {
    const inputLinkHandler = (e) => {
        setInputLink(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLinks([
            ...links,
            {text : inputLink , completed : false , id : Math.random() * 10}
        ])
        setInputLink("")
    }

    return (
        <div>
            <form>
                <input value = { inputLink } 
                type="text" 
                className="link-input" 
                onChange={inputLinkHandler}/>
                
                <button type="submit" className="link-button" onClick={submitHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}

export default Form;