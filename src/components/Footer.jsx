import react from "react";

const year = new Date().getFullYear();
function Copyright(){
    return (<footer>
        <p>Copyright © {year}</p>
    </footer>)
}
export default Copyright;