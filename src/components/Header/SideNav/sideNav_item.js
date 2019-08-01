import React from 'react';
import './sideNav.css'
import { Link } from 'react-router-dom';
import Fontawesome from 'react-fontawesome';


const  SideNavItem = () =>{

    const items = [
        { 
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        { 
            icon: 'file-text-o',
            text: 'News',
            link: '/new'
        },
        {
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        { 
            icon: 'sign-in',
            text: 'Sign In',
            link: '/sign-in'
        },
        {
            icon: 'sign-out',
            text: 'Sign Out',
            link: '/sign-out'
        }
    ]

    const showItems =() =>{
        return items.map((item, i) =>{
            return(
                <div 
                    style={{
                        fontWeight: '300',
                        fontSize: '15px',
                        color: 'white',
                        padding: '18px',
                        borderTop: '1px solid #404040'
                    }}
                    key={i} 
                >
                    <Link to={item.link}
                        style={{
                            color: 'white',
                            fontSize: '15px', 
                        }}
                    >
                        <Fontawesome name={item.icon}/>
                        {"  "}{item.text}
                    </Link>
                </div>
            )
        })
    }

   

    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItem;