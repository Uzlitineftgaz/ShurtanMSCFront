import React, {useEffect, useState} from 'react'
import Forecast from './Forecast'
import { H2 } from '../../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ForecastTwo from './ForecastTwo'
import TableGraficModal from "./TableGraficModal";
import TableGraficModalTwo from "./TableGraficModalTwo";
import axios from "axios";

const TableGrafic = () => {
    const [openGrafic, setOpenGrafic] = useState(false);
    const [turnIcon, setTurnIcon] = useState(false);
    const [showTableGraficModal, setShowTableGraficModal] = useState(false);
    const [showTableGraficModalTwo, setShowTableGraficModalTwo] = useState(false);

    const openModal = () => {
        setShowTableGraficModal(prev => !prev);
    }
    const openModalTwo = () => {
        setShowTableGraficModalTwo(prev => !prev);
    }
    const openGraficMore = () => {
        setOpenGrafic(!openGrafic);
        setTurnIcon(!turnIcon);
    }

    // get Api

    const [ firstLastYear, setFirstLastYear ] = useState(0);
    const [ firstThisYear, setFirstThisYear ] = useState(0);
    const [ secondLastYear, setSecondLastYear ] = useState(0);
    const [ secondThisYear, setSecondThisYear ] = useState(0);
    const [ thirdLastYear, setThirdLastYear ] = useState(0);
    const [ thirdThisYear, setThirdThisYear ] = useState(0);
    const [ fourthLastYear, setFourthLastYear ] = useState(0);
    const [ fourthThisYear, setFourthThisYear ] = useState(0);
    const [ fifthLastYear, setFifthLastYear ] = useState(0);
    const [ fifthThisYear, setFifthThisYear ] = useState(0);
    const [ sixthLastYear, setSixthLastYear ] = useState(0);
    const [ sixthThisYear, setSixthThisYear ] = useState(0);
    const [ seventhLastYear, setSeventhLastYear ] = useState(0);
    const [ seventhThisYear, setSeventhThisYear ] = useState(0);
    const [ eighthLastYear, setEighthLastYear ] = useState(0);
    const [ eighthThisYear, setEighthThisYear ] = useState(0);
    const [ ninthLastYear, setNinthLastYear ] = useState(0);
    const [ ninthThisYear, setNinthThisYear ] = useState(0);
    const [ tenthLastYear, setTenthLastYear ] = useState(0);
    const [ tenthThisYear, setTenthThisYear ] = useState(0);
    const [ eleventhLastYear, setEleventhLastYear ] = useState(0);
    const [ eleventhThisYear, setEleventhThisYear ] = useState(0);
    const [ twelfthLastYear, setTwelfthLastYear ] = useState(0);
    const [ twelfthThisYear, setTwelfthThisYear ] = useState(0);

    useEffect(()=> {
        axios.get('https://shurtan.herokuapp.com/api/forecast/gas/all/mining_system/' + 1 + '/' + ((new Date().getFullYear()) - 1) + '/' + new Date().getFullYear())
            .then(res => {
                if(res.data.object.length !== 0){
                    setFirstLastYear(res.data.object[0].amount);
                    setFirstThisYear(res.data.object[12].amount);
                    setSecondLastYear(res.data.object[1].amount);
                    setSecondThisYear(res.data.object[13].amount);
                    setThirdLastYear(res.data.object[2].amount);
                    setThirdThisYear(res.data.object[14].amount);
                    setFourthLastYear(res.data.object[3].amount);
                    setFourthThisYear(res.data.object[15].amount);
                    setFifthLastYear(res.data.object[4].amount);
                    setFifthThisYear(res.data.object[16].amount);
                    setSixthLastYear(res.data.object[5].amount);
                    setSixthThisYear(res.data.object[17].amount);
                    setSeventhLastYear(res.data.object[6].amount);
                    setSeventhThisYear(res.data.object[18].amount);
                    setEighthLastYear(res.data.object[7].amount);
                    setEighthThisYear(res.data.object[19].amount);
                    setNinthLastYear(res.data.object[8].amount);
                    setNinthThisYear(res.data.object[20].amount);
                    setTenthLastYear(res.data.object[9].amount);
                    setTenthThisYear(res.data.object[21].amount);
                    setEleventhLastYear(res.data.object[10].amount);
                    setEleventhThisYear(res.data.object[22].amount);
                    setTwelfthLastYear(res.data.object[11].amount);
                    setTwelfthThisYear(res.data.object[23].amount);
                }
            });
    }, [])

    return (
        <>
            <TableGraficModal showTableGraficModal={showTableGraficModal}
                              setShowTableGraficModal={setShowTableGraficModal}
                              firstLastYear={firstLastYear} firstThisYear={firstThisYear}
                              secondLastYear={secondLastYear} secondThisYear={secondThisYear}
                              thirdLastYear={thirdLastYear} thirdThisYear={thirdThisYear}
                              fourthLastYear={fourthLastYear} fourthThisYear={fourthThisYear}
                              fifthLastYear={fifthLastYear} fifthThisYear={fifthThisYear}
                              sixthLastYear={sixthLastYear} sixthThisYear={sixthThisYear}
                              seventhLastYear={seventhLastYear} seventhThisYear={seventhThisYear}
                              eighthLastYear={eighthLastYear} eighthThisYear={eighthThisYear}
                              ninthLastYear={ninthLastYear} ninthThisYear={ninthThisYear}
                              tenthLastYear={tenthLastYear} tenthThisYear={tenthThisYear}
                              eleventhLastYear={eleventhLastYear} eleventhThisYear={eleventhThisYear}
                              twelfthLastYear={twelfthLastYear} twelfthThisYear={twelfthThisYear}
            />
            <TableGraficModalTwo showTableGraficModalTwo={showTableGraficModalTwo}
                                 setShowTableGraficModalTwo={setShowTableGraficModalTwo}/>
        <TableGraficContainer>
            <TableGraficDiv openGrafic={openGrafic}>
                <H2>Оперативный прогноз добычи</H2>
                <WidthDiv>
                    <LeftDiv onClick={openGraficMore}>
                        <FontAwesomeIconTableGrafic rotation={turnIcon ? 180 : 0} icon={faChevronLeft} />
                    </LeftDiv>
                    <EditDiv>
                        <SelectDiv>
                            <FontAwesomeIcon onClick={openModal} style={{cursor:'pointer'}} icon={faEdit} />
                            <P> Отбор газа млн.м³ </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>{new Date().getFullYear()-1} года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>{new Date().getFullYear()} года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>
                <GraficDiv>
                    <Forecast firstLastYear={firstLastYear}
                              firstThisYear={firstThisYear}
                              secondLastYear={secondLastYear}
                              secondThisYear={secondThisYear}
                              thirdLastYear={thirdLastYear}
                              thirdThisYear={thirdThisYear}
                              fourthLastYear={fourthLastYear}
                              fourthThisYear={fourthThisYear}
                              fifthLastYear={fifthLastYear}
                              fifthThisYear={fifthThisYear}
                              sixthLastYear={sixthLastYear}
                              sixthThisYear={sixthThisYear}
                              seventhLastYear={seventhLastYear}
                              seventhThisYear={seventhThisYear}
                              eighthLastYear={eighthLastYear}
                              eighthThisYear={eighthThisYear}
                              ninthLastYear={ninthLastYear}
                              ninthThisYear={ninthThisYear}
                              tenthLastYear={tenthLastYear}
                              tenthThisYear={tenthThisYear}
                              eleventhLastYear={eleventhLastYear}
                              eleventhThisYear={eleventhThisYear}
                              twelfthLastYear={twelfthLastYear}
                              twelfthThisYear={twelfthThisYear}
                    />
                </GraficDiv>
                <WidthDiv>
                    <EditDiv>
                        <SelectDiv>
                            <FontAwesomeIcon onClick={openModalTwo} style={{cursor:'pointer'}} icon={faEdit} />
                            <P> Отбор конденсата тыс.т </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>{new Date().getFullYear()-1} года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>{new Date().getFullYear()} года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>
                <GraficDiv>
                    <ForecastTwo/>
                </GraficDiv>
            </TableGraficDiv>
        </TableGraficContainer>
        </>
    )
}
const TableGraficContainer = styled.div`
    width: 400px;
    height: 810px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TableGraficDiv = styled.div`
    width: ${({openGrafic})=> (openGrafic ? "850px" : "400px")};
    height: 98%;
    padding-top: 5%;
    position: absolute;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 2px #666;
    overflow: hidden;
    transition:0.2s;
`
const WidthDiv = styled.div`
    display: flex;
`
const LeftDiv = styled.div`
    border: none;
    background-color: #FF914B;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    color:#fff;
    cursor:pointer;
`
const FontAwesomeIconTableGrafic = styled(FontAwesomeIcon)`
    transition: 0.5s;  
`
const EditDiv = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`
const SelectDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
`
const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    align-items: center;
    color: #000000;
    font-size: 16px;
    margin-left: 5px;
`
const YearDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(10px);
`
const YearBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1){
        margin-right: 15px;
    }
`
const YellowDiv = styled.div`
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: #FF914B;
`
const BlueDiv = styled.div`
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: #00A0DC;
`
const YearP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #000000;
    margin-left: 5px;
`
const GraficDiv = styled.div`
  width:400px;
  height:320px;
  @media(min-width:401px){
    width:850px;
  }
`
export default TableGrafic
