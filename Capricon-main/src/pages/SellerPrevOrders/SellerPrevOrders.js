import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import ToggleButton from '../../components/ToggleButton';

function SellerPrevOrders(props) {

    const [isOn, setIsOn] = useState(false);

    const handleToggleClick = () => {
        setIsOn(!isOn);
        props.handleTheme();
    }


    return (
        <div>
         <h3 className="mb-3 sellerPageTitle" style={{color: props.isdarkTheme? "#ffffff" : "black"}}>Your Previous Orders</h3>
         <span className="LineSeperator mb-3" />
            <div className="my-5">
                <ToggleButton isOn={isOn} onToggleClick={handleToggleClick} />
            </div>
            
            
        <div style={{ height: 600, overflow: "auto" }}>
            <Table striped bordered hover variant={props.isdarkTheme ? "dark" : ""} responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Watch</td>
                        <td>$ 29</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </div>
    )
}

export default SellerPrevOrders
