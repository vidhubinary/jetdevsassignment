import React from "react";
import Text from "../components/Text";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import Icon from "../components/Icon";
import Incremental from "../components/Incremental";
import usePrevious from "../components/Effect";

interface CardStyledInterface {
    type: string | undefined;
}

const CardStyled = styled.div <CardStyledInterface>`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:10px;
    background-color:${(props) => (props.type == "odd") ? "#F9FAFE" : "#ffff"};
    border-bottom:1px  grey;
    &:hover{
        background-color:#4A69DD;
    };
`
const ProfileContainer = styled.div`
    display:flex;
    font-size:30px;
    font-weight:bold;
    min-width:200px;
    max-width:200px;
`

function CardComponent(props: CardComponentInterface) {
    const previousNumber = usePrevious(props.score);
    return (
        <CardStyled data-key={props.userID} key={props.userID} type={props.type}>
            <ProfileContainer>
                <Icon rank={props.rank} />
                <Avatar src={props.imageLink} rank={props.rank} />
                <Text text={props.text} />
            </ProfileContainer>
            <Incremental start={previousNumber} end={props.score} timer={100} />
        </CardStyled>
    )
}

export default CardComponent;

interface CardComponentInterface {
    text: string,
    rank: number,
    imageLink: string,
    key?: number | string,
    type?: string,
    score: number,
    id?: string | number,
    userID: string,
}