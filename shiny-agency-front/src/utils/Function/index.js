/**
 * Encode URI data (t=2&k=2...)
 * @param {{key:string | number, value: string | number}} data
 * @return string
 */
export const encodeQueryData = (data) => {
    const chunks = [];
    for (let key in data) {
        chunks.push([`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`]);
    }
    return chunks.join("&");
};
