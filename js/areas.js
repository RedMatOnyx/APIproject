
import { getParam,} from "./utils.mjs";

const area = getParam("area");

//capitalize first letter of the area so Denver, Houston, Phoenix look good
const str = area;
const modStr = str[0].toUpperCase() + str.slice(1);

// str.charAt(0).toUpperCase() + str.slice(1); alternative method

document.querySelector(".areaTitle").innerHTML = modStr;

function giveArea(){
    return area;
}