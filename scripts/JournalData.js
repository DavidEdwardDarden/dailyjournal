/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Fine"
    },
    {
        id: 2,
        date: "07/25/2025",
        concept: "Life in the future.",
        entry: "We talked about what life is like in the future.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "07/26/2025",
        concept: "Life in the past.",
        entry: "We talked about what life is like in the past.",
        mood: "Sad"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}