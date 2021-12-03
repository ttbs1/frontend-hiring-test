
import { useParams } from "react-router-dom";

export function Call(props) {
    let { id } = useParams();
    console.log(props);

    return (
        <div>{id}</div>
    )
}