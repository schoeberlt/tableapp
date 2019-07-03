import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Kind</th>
                        <th>Distance</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>McDonald's</td>
                        <td>Restaurant</td>
                        <td>American</td>
                        <td>1000  m</td>
                    </tr>
                    <tr>
                        <td>Subway</td>
                        <td>Restaurant</td>
                        <td>Sandwich</td>
                        <td>950  m</td>
                    </tr>
                    <tr>
                        <td>Starbucks</td>
                        <td>Cafe</td>
                        <td>Coffee</td>
                        <td>500  m</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table