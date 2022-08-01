import React,{useState} from 'react'

const Box = ({title,value}) =>{

    const titlestyle = {
        fontSize:"50px",
        color:"white",
    }    

    const valuestyle = {
        fontSize:"100px",
        color:"rgba(225,225,225,0.8)",
        textShadow:"0 0 10px skyblue 0 0 20px white",
    }
    var [date,setDate] = useState(new Date().toLocaleString())
    
    setInterval(()=>{
        setDate(new Date().toLocaleString())
    },1000)

    return(
        <div className="Box">
            <h2 style={titlestyle}>Temperature</h2>
            <h2 style={valuestyle}>{Math.floor(value)}&deg;C</h2>
            <h1 style={{color:"white"}}>{date}</h1>
        </div>
    )
}

export default Box