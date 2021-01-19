import React from "react"
import BadgeCard from "./BadgeCard"
class BadgList extends React.Component {


    render() {
        const mappedCards = this.props.badgeData.map((card, i) => {
            return <BadgeCard 
            key= {i}
            firstName= {card.firstName}
            lastName={card.lastName}
            placeOfBirth={card.placeOfBirth}
            email={card.email}
            phone={card.phone}
            favoriteFood={card.favoriteFood}
            textDiplay={card.textDiplay}
            />
        })
    return(
        <div >
            {mappedCards}
        </div>
    )

    }
}
export default BadgList