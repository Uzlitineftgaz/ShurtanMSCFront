import React, { useState, useContext } from 'react';
import {AppContext} from '../../context';
import { Table, Tr, Th, TdTotalCount, TdTotal } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PressureTable from './PressureTable'

const   Pressure = () => {
    const {pressureApi, totalInWork, totalInIdle, totalInRepair, totalInConservation, totalInLiquidation} = useContext(AppContext);

    const [ showPressureTable, setShowPressureTable ] = useState(false);
    const [ turnIcon, setTurnIcon ] = useState(false);

    const openMoreTable = () => {
        setShowPressureTable(!showPressureTable);
        setTurnIcon(!turnIcon);
    }

    return (
        <PressureContainer>
            <TablePresure showPressureTable={showPressureTable}>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Наименование</Th>
                <Th colSpan="3" style={{position:'sticky', top:'0'}}>Давление, кгс/см2</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Расход, тыс м³/ч</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Темрера- <br/>тура </Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В работе</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В простое</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В ремонте</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В консервации</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В ликвидации</Th>
                <RightTh rowSpan="2" onClick={openMoreTable}>
                    <FontAwesomeIconPresure rotation={turnIcon ? 180 : 0} icon={faChevronRight} />
                </RightTh>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РСП</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РУ</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РПЛ</Th>
            </Tr>
            </thead>
            {pressureApi.map((el) =>
                    <PressureTable el={el} key={el.objectDto.name} />
            )}
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> </TdTotalCount>
                <TdTotalCount> </TdTotalCount>
                <TdTotalCount> </TdTotalCount>
                <TdTotalCount> </TdTotalCount>
                <TdTotalCount> </TdTotalCount>
                <TdTotalCount>{totalInWork}</TdTotalCount>
                <TdTotalCount>{totalInIdle}</TdTotalCount>
                <TdTotalCount>{totalInRepair}</TdTotalCount>
                <TdTotalCount>{totalInConservation}</TdTotalCount>
                <TdTotalCount>{totalInLiquidation}</TdTotalCount>
            </Tr>
            </tfoot>
        </TablePresure>
        </PressureContainer>
    )
}
const PressureContainer = styled.div`
    width: 400px;
    height:565px;  
    position:relative;
`
const TablePresure = styled(Table)`
    width:${({showPressureTable}) => (showPressureTable ? "800px" : "400px")};
    height:590px;
    transition:0.2s;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
`
const FontAwesomeIconPresure = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition:0.5s;
`
const RightTh = styled(Th)`
  border: none;
  background-color: #FF914B;
  padding: 5px;
  color:#fff;
  position: sticky;
  top: 0;
  right: 0;
  cursor: pointer;
`
export default Pressure
