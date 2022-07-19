//import details from './details.json'
import React from 'react';
function Data({Data,onDelete}) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tbody>
                        {(
                        Data &&Data.map(user => (
                                <tr>
                                    <td>{user.userId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>

                                    <td>
                                        <button >Edit</button>
                                    
                                    </td>
                                    <td> <button onClick={()=>onDelete(user)}>Delete</button></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </tbody>
            </table>
        </div>

    )
}
export default Data;