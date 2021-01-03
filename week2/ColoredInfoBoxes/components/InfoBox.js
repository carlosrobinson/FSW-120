import React from "react";
import PropTypes from "prop-types"

function InfoBox(props) {
    const styles = {
        backgroundColor: props.boxColor
    }
    InfoBox.propTypes = {
        boxColor: PropTypes.string
    }
    
    return (

        <div className= "colored-info">
            
            <h3  style= {styles}>  
                {props.info.title}
            <br/>
                {props.info.subtitle}
            <br/>
                {props.info.information}
            </h3>
            
        </div>
        
    )
    


}

    export default InfoBox