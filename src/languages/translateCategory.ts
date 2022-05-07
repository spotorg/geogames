import languages from "./langs";

const translateCategory = (category: string, language: string) => {
    let activeLang = null;

    if(language === "EN"){
        return category;
    }

    if(language === "LV"){
        activeLang = languages.latvian
    }

    if(!activeLang){
        return category;
    }

    switch(category){
        case "De-icing": return activeLang.categories.deIcing;
        case "Dog walking": return activeLang.categories.dogWalking;
        case "Lawn mowing": return activeLang.categories.lawnMowing;
    }
}

export default translateCategory;