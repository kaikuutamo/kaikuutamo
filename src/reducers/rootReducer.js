
import text from "../texts.json"

var initState = {

    texts: text.finnish,

}

const rootReducer = (state=initState, action) => { 

if (action.type === "change") {
    
    if (action.language === "fin") {

        return {
            ...state,
            texts: text.finnish
        }

    }

    if (action.language === "eng") {

        return {
            ...state,
            texts: text.english
        }
        
    }

}

return state

}

export default rootReducer;