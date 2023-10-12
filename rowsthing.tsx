import React from 'react'

const arrayOfEmptyStrings2: string[] = new Array(50).fill('');
const mappedRows = arrayOfEmptyStrings2.map((item) => {
    return <td className='w-2 h-2'></td>
})

const showMe = () => {
    return (
        <div>
            <table className='h-100 w-100'>
                {arrayOfEmptyStrings2.map((row) => {
                    return (
                        <tr>{mappedRows}</tr>
                    )
                })}

            </table>
        </div>
    )
}

export default showMe
