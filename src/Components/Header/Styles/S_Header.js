import React from 'react'
import styled from 'styled-components';

const myRed = '#fb595d';
const myBlue = '#9FCDE6';

export default styled.section`
header{
    display: flex;
    background: ${myRed};
    height: 50px;
    justify-content: space-between;
}
ul.nav{
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: flex-end;
}


ul.nav li{
    color: white;
    list-style-type: none;
    margin: 10px;
    align-self: center;
}

ul.nav li:hover{
    color: ${myBlue};
    cursor: pointer;
}

span.logo{
    margin: 10px;
    color: white;
    align-self: center;
}
img{
    height: 50px;
}
img:hover{
    cursor: pointer;
}
`;

