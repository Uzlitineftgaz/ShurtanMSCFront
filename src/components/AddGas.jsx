import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AddGasModal from './AddGasModal'
import CountUp from 'react-countup'

const AddGas = () => {
    const {addGas, totalAddGas} = useContext(AppContext);

    const [showAddGassModal, setShowAddGassModal] = useState(false);

    const openModal = () => {
        setShowAddGassModal(prev => !prev);
    };

    return (
        <>
            <TableAddGas>
                <thead>
                <Tr>
                    <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наименование</Th>
                    <Th colSpan="3" style={{position:'sticky', top:'0'}}>Добыча газа, млн.м3 
                        <FontAwesomeIcon style={{
                                            position:'absolute', 
                                            right:'5px', 
                                            top:'3px', 
                                            cursor:'pointer'}} 
                                            icon={faEdit} 
                                            onClick={openModal}/> 
                    </Th>
                </Tr>
                <Tr>
                    <Th style={{position:'sticky', top:'23px'}}>Часовая</Th>
                    <Th style={{position:'sticky', top:'23px'}}>С начала суток</Th>
                    <Th style={{position:'sticky', top:'23px'}}>За прошлые сутки </Th>
                </Tr>
                </thead>
                <tbody>
                {addGas.map((mining, key) =>
                    <Tr key={key}>
                        <TdFirst>{mining.objectDto !== null ? mining.objectDto.name : ""}</TdFirst>
                        <Td> <CountUp end={mining.objectActionDto !==null ? mining.objectActionDto.expend : ""} duration={2}/> </Td>
                        <Td> <CountUp end={mining.objectActionDto !==null ? mining.objectActionDto.expend*24 : ""} duration={4}/> </Td>
                        <Td> <CountUp end={0} duration={5}/> </Td>
                    </Tr>
                )}
                </tbody>
                <tfoot>
                <Tr>
                    <TdTotal>Итого</TdTotal>
                    <TdTotalCount> <CountUp end={totalAddGas} duration={2}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={totalAddGas*24} duration={4}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={0} duration={5}/> </TdTotalCount>
                </Tr>
                </tfoot>
            </TableAddGas>
            <AddGasModal showAddGassModal={showAddGassModal} setShowAddGassModal={setShowAddGassModal} addGas={addGas}/>
        </>
    )
}
const TableAddGas = styled(Table)`
    width:380px;
    height:400px;
    margin-bottom: 5px;
`
export default AddGas
