import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSvgPieChart from 'react-svg-piechart';

const data = [
    { title: "Data 1", value: 100, color: "#22594e" },
    { title: "Data 2", value: 60, color: "#2f7d6d" },
    { title: "Data 3", value: 30, color: "#3da18d" },
    { title: "Data 4", value: 20, color: "#69c2b0" },
    { title: "Data 5", value: 10, color: "#a1d9ce" },
]

const MyCompo = () => (
    <ReactSvgPieChart
        data={data}
        // If you need expand on hover (or touch) effect
        expandOnHover
        // If you need custom behavior when sector is hovered (or touched)
        onSectorHover={(d, i, e) => {
            if (d) {
                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
            } else {
                console.log("Mouse leave - Index:", i, "Event:", e)
            }
        }}
    />
)
function App() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 title">
                    MONITOR STATISTICS
            </div>
            </div>
            <div className="row">
                <div className="col-md-4 memory">
                    <span className="titleCard">
                        MEMORY
                        
                        <h4> SWAP </h4>
                    </span>
                </div>
                <div className="col-md-4 cpu">
                    <span className="titleCard">
                        CPU
                </span>
                </div>
                <div className="col-md-4 disk">
                    <span className="titleCard">
                        DISK
                </span>
                </div>
            </div>
            <div className="row">
            <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>M</td>
                                    <td>O</td>
                                    <td>@</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>J</td>
                                    <td>T</td>
                                    <td>@</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td></td>
                                    <td></td>
                                    <td>@r</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </div>
    );
}

export default App;