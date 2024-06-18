import React, { useState } from 'react'
import { question } from './Data/FaqQuestion'


export default  function Faqs() {
    let [currentId, setcurrentId] = useState(false)

    let items = question.map((itemsData,i)=>{

        let itemDetails = {
            itemsData, 
            currentId,
            setcurrentId
        }

        return (
            <Faqitems itemDetails={itemDetails} key={i}/>
        )
    })


    return (
        <div>
            <h1>FAQ's</h1>
            <div className="faqouter">
                {items}
            </div>
        </div>
    )
}
function Faqitems({itemDetails}) {
    let {itemsData, currentId, setcurrentId}=itemDetails
    return (
        <div className="faqitems">
            <h2 onClick={()=>{setcurrentId(itemsData.id)}}>{itemsData.question}</h2>
            <p className={currentId==itemsData.id ? 'activeAns' : ''}>{itemDetails.itemsData.answer}</p>
        </div>
    )
}
