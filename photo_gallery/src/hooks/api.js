import useFetch from "./useFetch";

const opts = {
    headers: {
        Authorization: '563492ad6f9170000100000165e5358c885d4588bc8913f437433270'
    }
}
export const useSearch = (query) =>
    useFetch(`https://api.pexels.com/v1/search?query=${query}`,opts )
