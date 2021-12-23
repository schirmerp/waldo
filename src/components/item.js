import React, { Component } from "react";
import styles from "./item.css"
import PopInfo from "./info";
import FoundInfo from "./found";



export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFound : false,
            myName : null,
            isActive : false,
            ref: new React.createRef()
        }

        this.handleClick = this.handleClick.bind(this)
    }

    
   



    handleClick(e){
        const props = props
        if(this.state.isFound === true){
            console.log('youve already found me')
             
        }else{
        this.setState(state => ({
           isFound :  !state.isFound,
           myName : e.target.alt,
           isActive : !state.isActive
        }))
        }
        //console.log(e)
        //console.log(e.target.alt)
        console.log(this.state.ref)

    }

    


    render() {
        const {className, src, alt, onClick} = this.props
        const {isFound, myName, isActive, ref} = this.state
        const match = match
    return(
        <div id={!isActive ? "yes" : styles.no} ref={ref} id={!isFound ? 'notFound' : 'yesFound'}className={className} onClick={this.handleClick}>
            <img id ="info" src={src} alt={alt} data-info={isActive? 'datayes': 'datano'} onClick={onClick}/>
            <PopInfo className={!isFound ? styles.info : styles.infoactive}  info={"HoleSheet You Found " + myName + "!"}/>
        </div>
        )   
    }
}

/*
data = imgList.map(i=> {
    return(
    {    
    name: i.name, 
    isSelected : i.isSelected
    }
)})
*/