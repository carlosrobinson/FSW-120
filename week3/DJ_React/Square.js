import React from "react"
import PropTypes from "prop-types"

function Square(props) {
        const styles = {
            backgroundColor: props.boxColor
        }

       
        
    return(
        <div id= "first-square" style={styles} >
            
        </div>
    )
}
Square.propTypes = {
    boxColor: PropTypes.string
}

export default Square