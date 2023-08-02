import React, {useState} from 'react'
export default function TextForm(props) {
    const handelClickUpper = () => {
        console.log('handelClickUpper called');
        setText(text.toUpperCase());
        props.showAlert("Converted to upper-case","success")
    }
    const handelClickLower = () => {
        console.log('handelClickLower called');
        setText(text.toLowerCase());
        props.showAlert("Converted to lower-case","success")
    }
    const handelOnChange = (e) => {
        console.log('handelOnChange called');
        setText(e.target.value);
    }
    const handelClickDelete = (e) => {
        console.log('handelClickDelete called');
        setText('');
        props.showAlert("Text Deleted Successfully","success")
    }
    const handelClickDummy = (e) => {
        console.log('handelClickDummy called');
        setText("What is Lorem Ipsum? Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
         props.showAlert("Dummy data added","success")
    }
    const handelClickReverse = (e) => {
        console.log('handelClickReverse called');
        setText(text.split('').reverse().join(''));
        props.showAlert("Text Reverted Successfully", "success")
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" style={props.mode==='light'?{'backgroundColor':'white','color':'black'}:{'backgroundColor':'black','color':'white'}} id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
            </div>
            <button className="btn btn-dark mx-2 my-2" onClick={handelClickDummy}>DummyData</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handelClickUpper}>UpperCase</button>
            <button disabled={text.length ===0} className="btn btn-warning mx-2 my-2" onClick={handelClickLower}>LowerCase</button>
            <button disabled={text.length ===0} className="btn btn-info mx-2 my-2" onClick={handelClickReverse}>ReverseData</button>
            <button disabled={text.length ===0} className="btn btn-danger mx-2 my-2" onClick={handelClickDelete}>Delete</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Words, {text.trim().length } Characters</p>
            <p>You can write in {0.08*(text.split(" ").length)} Minutes.</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:'Enter Something to preview it here.'}</p>
        </div>
    </>
  )
}
