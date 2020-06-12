import React,{useEffect,useRef,useState} from 'react'
import Header from '../../kai-ui/src/components/Header/Header'
import SoftKey from '../../kai-ui/src/components/SoftKey/SoftKey'
import TextInput from './components/TextInput'
import './styles/InputPreferenceType.css'

export default function InputPrefernceType() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [isfocused, setisfocused] = useState(0);

    useEffect(()=>{
        inputRef1.current.focus();
        setisfocused(0);
    },[])
    
    const inputItems=[inputRef1,inputRef2];  
    
    const onFocusChange=(index)=>{
        //console.log(index);
    }

    const onChange=(event)=>{
        //if any api call to be made
    }

    const handleKeyDown=(event)=>{
        if(event.key==="Enter"){
            inputRef2.current.focus();
            setisfocused(1);
        }
        else if(event.key==="ArrowUp"){
            inputRef1.current.focus();
            setisfocused(0);
        }
        else if(event.key==="ArrowDown"){
            inputRef2.current.focus();
            setisfocused(1);
        }
    }
    

    return (
        <div>
            <Header text="Phone"></Header>
            {inputItems.map((item,index)=>{
                return <div class="typeIconOuter">
                {isfocused===index?<img src={require('./assets/focused.svg')}/>:<img src={require('./assets/unFocused.svg')}/>}              
                <TextInput label="" ref={item} index={index} onFocusChange={onFocusChange} onChange={onChange} handleKeyDown={handleKeyDown} focusColor="#FFFFFF"/>
                </div>
            })}
             <SoftKey leftText="Back" centerText="Done" rightText="Options" backgroundColor="#FFFFFF"/>
        </div>
    )
}
