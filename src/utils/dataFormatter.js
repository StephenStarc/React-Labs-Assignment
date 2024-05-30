
export default function dataFormatter(timestampString ) {
    const timestampNumber = Number(timestampString);

    const date = new Date(timestampNumber);

    const formattedDate = date.toLocaleString();

    return formattedDate
}
