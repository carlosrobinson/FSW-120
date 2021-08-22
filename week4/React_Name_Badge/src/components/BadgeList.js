import React from "react";
import Card from "./Card"

class BadgeList extends React.Component {

render() {
    const mappedData = this.props.badgeData.map((card, i) => {
        return <Card
                firstName={card.firstName}
                lastName={card.lastName}
                placeOfBirth={card.placeOfBirth}
                email={card.email}
                phone={card.phone}
                favFood={card.favFood}
                textBox={card.textBox}
                />

    })
    return (
        <div>
            {mappedData}
        </div>
    )
}

}
export default BadgeList;