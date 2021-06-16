import React, {useState} from 'react';
import Logo from '../../images/capriconWhite.png';
import dashboardBG from '../../images/dashboardBG.png';
import { RiDashboardLine, RiLogoutCircleLine } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";
import { HiOutlineClipboardList, HiOutlineClipboardCheck } from "react-icons/hi";
import { Image, Nav, Button } from 'react-bootstrap';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { sellerActions } from '../../redux/actions';

function Sidebar() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(sellerActions.logout());
    }

    const [selectedMenu, setSelectedMenu] = useState("");

    return (
       <>
        <div style={{ flex: 1 }}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: `url(${dashboardBG})`
                }}
            />
            <a href="/"><Image src={Logo} className="my-4 px-xl-4 px-lg-3" style={{ width: 200 }} fluid /></a>
            <span className="LineSeperator mb-3" />
        </div>

        <div style={{ flex: 4 }}>
            <Nav
                navbar
                fill
                variant="pills"
                activeKey={selectedMenu}
                onSelect={(selectedKey) => setSelectedMenu(selectedKey)}
            >
                <Nav.Item>
                    <Nav.Link href="/seller/dashboard" className="px-xl-5 py-xl-2 py-sm-4 text-white text-left Sidebar-nav-link"><RiDashboardLine className="pr-2 pb-1 Sidebar-nav-link-icon" size={34} /> DASHBOARD</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/seller/products" className="px-xl-5 py-xl-2 py-sm-4 text-white text-left Sidebar-nav-link"><FiCodesandbox className="pr-2 pb-1 Sidebar-nav-link-icon" size={34} /> PRODUCTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/seller/orderstatus" className="px-xl-5 py-xl-2 py-sm-4 text-white text-left Sidebar-nav-link"><HiOutlineClipboardList className="pr-2 pb-1 Sidebar-nav-link-icon" size={34} /> ORDER STATUS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/seller/previousorders" className="px-xl-5 py-xl-2 py-sm-4 text-white text-left Sidebar-nav-link"><HiOutlineClipboardCheck className="pr-2 pb-1 Sidebar-nav-link-icon" size={34} /> PREVIOUS ORDERS</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>

        <div className="mx-2 d-flex" style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
            <Button onClick={() => handleLogout()} className="w-100 py-3 mb-2" style={{ backgroundColor: "rgba(112,112,112,0.9)", borderColor: "rgba(112,112,112,0.9)", marginTop: 10 }}><RiLogoutCircleLine size={26} className="pr-2" style={{ paddingBottom: 2 }} />LOG OUT</Button>
        </div>
</>
    )
}

export default Sidebar

