import React from 'react';

export default function About(props) {
    return (
        <div className='container' style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}}>
                             Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time required to read.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed`} type="button" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}}>
                            TextUtils is a free character counter tool that provides instant charater count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable of writing text with word/ charater limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'? '#042742':'white'}}>
                            This word counter software works in any web browser such as Crome, Firefox, Safari, Opera, etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button type="button" onClick={toggleSytle} className="btn btn-primary">{btntext}</button>
                </div> */}
            </div>
        </div>
    )
}
