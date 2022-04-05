import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSwimmingPool,faDashboard } from '@fortawesome/free-solid-svg-icons'
import twitter from '../../../assets/twitter-brands.svg'

function NavBar({children}) {
    return (
        <div>
            <div className="nav-bar">
                <div className="nav-bar__brand">
                    <FontAwesomeIcon icon={faCoffee} /> 카페:밤
                </div>

                <ul className="nav-bar__menu">
                    <li>
                        <Link href="#"><a>홈</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>소개</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>메뉴</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>오시는길</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>사이트맵</a></Link>
                    </li>
                </ul>

                <ul className="nav-bar__share">
                    <li> <FontAwesomeIcon icon={faSwimmingPool} /></li>
                    <li><FontAwesomeIcon icon={faDashboard} /></li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <style jsx>{`
                .nav-bar {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    box-sizing: border-box;
                    background-color: #1B1B1C;
                    color: white;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
                }
                
                .nav-bar__brand{
                  padding: 25px 30px;
                  
                  width: 20%;
                }
                
                .nav-bar__menu {
                  display: flex;
                  margin-top: 25px;
                  list-style: none;
                  justify-content: center;
                  width: 60%;
                }
                
                .nav-bar__menu li{
                  width: 15%;
                }
                .nav-bar__share{
                  display: flex;
                  list-style: none;
                  width: 20%;
                  margin-top: 25px;
                  justify-content: flex-end;
                }
                
                .nav-bar__share li{
                  width: 30%;
                }
                
                .nav-bar__share li {
                  color:white;
                }
            `}</style>
        </div>
    )
}

export default NavBar;
0