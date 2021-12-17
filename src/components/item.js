import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./item.css"
import PopInfo from "./info";


export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFound : true,
            myName : null,
            isActive : true
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        const props = props
        this.setState(state => ({
           isFound :  !state.isFound,
           myName : e.target.alt,
           isActive : !state.isActive
        }))
        console.log(e)
        console.log(e.target.alt)

    }

    /*
    const [isFound, setIsFound] = useState(false)
    const [cn, setCn] = useState('info ' + styles.info)

    const handleClick = () =>{
        
            
            setCn(styles.info-active + " info-active")
        
        }
        
    

    
    useEffect(()=>{
        const e = document.getElementById('info')
        e.addEventListener('click', handleClick)

        return() => {
            e.removeEventListener('click', handleClick)
        }
    }, []) */
    /*
    useEffect(() =>{
        handlecn = () => {
            if(Item.isFound === true){
                setCn(prevState => prevState + " info-active")            
            }
        }
    }) */
    render() {
        const {className, src, alt} = this.props
        const {isFound, myName, isActive} = this.state
        const match = match
    return(
        <div id={isActive ? "yes" : styles.no} className={className} onClick={this.handleClick}>
            <img id ="info" src={src} alt={alt}/>
            <PopInfo className={isFound ? styles.info : styles.infoactive}  info={"HoleSheet You Found " + myName + "!"}/>
        </div>
        )   
    }
}