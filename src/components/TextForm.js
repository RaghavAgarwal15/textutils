import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to Upper Case','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to Lower Case','success');
    }
    const handleResetClick = ()=>{
        let newText = ""
        setText(newText);
        props.showAlert('Textbox reset','success');
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value)
    }
    const [text, setText] = useState('')

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'? 'white':'#042742'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control border border-2" placeholder='Enter text here' value={text} style={{backgroundColor: props.mode==='dark'? '#13466e':'white',color: props.mode==='light'? '#042742':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0?'disabled':null} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0?'disabled':null}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0?'disabled':null}  className="btn btn-primary mx-1 my-1" onClick={handleResetClick}>Reset</button>
        </div>
        <div className="container mt-4" style={{color: props.mode==='dark'? 'white':'#042742'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s/).filter((element)=>{return element.length !== 0}).length} words, {text.length} character</p>
            <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length !== 0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the text box above to preview here'}</p>
        </div>
        </>
    )
}
