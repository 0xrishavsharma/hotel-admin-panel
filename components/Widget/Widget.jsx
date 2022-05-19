import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './Widget.scss'

const Widget = ({ type }) => {

    //temporary
    const amount = 100
    const diff = 20

    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PermIdentityIcon className='icon' style={{ color: "rgb(176, 73, 73)", backgroundColor: "rgb(254, 200, 200)" }} />
                )
            }

            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='icon' style={{ color: "rgb(12, 2, 99, 0.5)", backgroundColor: "rgb(12, 2, 99, 0.)" }} />
                )
            }

            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See all earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon' style={{ color: "rgb(166 13 203)", backgroundColor: "rgb(163, 36, 194, 0.3)" }} />
                )
            }

            break;
        case "balance":
            data = {
                title: "MY BALANCE",
                isMoney: false,
                link: "View balance",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "rgb(267 202 18)", backgroundColor: "rgb(257, 202, 18, 0.3)" }}/>
                )
            }

            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="row1">
                <p className="title">{data.title}</p>
                <div className="percentage positive">
                    <ArrowDropUpIcon className='icon' />
                    <p>{diff}%</p>
                </div>
            </div>
            <div className="row2">
                {data.isMoney && "$"} {amount}
            </div>
            <div className="row3">
                <p>{data.link}</p>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget