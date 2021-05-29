import React ,{useState} from 'react'
import Home from "./Home";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {selectCars} from "../features/Car/carSlice";
import {useSelector} from "react-redux";
// import { HashLink } from 'react-router-hash-link';
function Header() {
    const [showBurger, setClose] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
            {cars && cars.map(car=>{
                    return <a key={car} href="#">{car}</a>
            })}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu  onClick={()=>setClose(true)}/>
            </RightMenu>

            <BurgerNav burgerStatus={showBurger}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setClose(false)} />
                </CloseWrapper>

                {cars && cars.map(car=>{
                    return <li key={car}><a href="#">{car}</a></li>
                })}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`


const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;

}

@media(max-width:768px){
    display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;

}
`

const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav=styled.div`
position:fixed;
top:0;
right:0;
width:300px;
z-index:3;
height:100vh;
background-color:white;
list-style:none;
display:flex;
flex-direction:column;
text-align:start;
padding:20px;
transform:${props=>props.burgerStatus?`translateX(0)`:`translateX(100%)`};
transition:transform 0.2s ease-in;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);
    a{
        font-weight:600;
    }
}
`

const CustomClose=styled(ClearIcon)`
cursor:pointer;

`;

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
margin-right:15px;
`