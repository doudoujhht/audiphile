import { error } from "@sveltejs/kit";
import data from "../../../data.json"

export function load({ params }) {
    let result = data.filter((item) => item.category === params.categoryName)
    console.log(params)
    if (result.length == 0) {
        throw error(404);
    }
    return {result};
}