import * as React from "react";

export const getSelectedString = (str: string, substring: string): JSX.Element => {
    const regexp = new RegExp(substring, 'gi');
    const matchAllQuestion = str.matchAll(regexp);
    const matchAllArrQuestion = Array.from(matchAllQuestion);

    const matchIndexes = matchAllArrQuestion.map(el => el.index)
    const matchIndexesFull = [...matchIndexes];
    if (substring.length > 1) {
        (matchIndexes as number[]).forEach(indexStart => {
            for (let i = indexStart + 1; i <= indexStart + substring.length - 1; i++) {
                //console.log(i)
                matchIndexesFull.push(i);
            }
        })
    }
    // console.log(matchAllArrQuestion)
    // console.log(matchIndexes)
    // console.log(matchIndexesFull);
    // console.log(" ")
    return (
        <>
            {
                str.split("").map((s, index) => {
                    return matchIndexesFull.includes(index) ? <span>{s}</span> : s
                    //return s
                })
            }
        </>
    )
}
