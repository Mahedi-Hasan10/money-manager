import React from 'react';

const Table = ({data}) => {
    return (
        <div>
            <table>
                <th>
                    <td>Title</td>
                    <td>Amount</td>
                    <td>Type</td>
                    <td>Category</td>
                    <td>date</td>
                </th>
                {
                    data?.map((d,index)=>(
                    <tr key={index}>
                        <td>{d?.title}</td>
                        <td>{d?.amount}</td>
                        <td>{d?.type}</td>
                        <td>{d?.category}</td>
                        <td>{d?.date}</td>
                    </tr>
                    ))
                }
                
            </table>
        </div>
    );
};

export default Table;