import React, {useState, useContext} from 'react';
import {AppContext} from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BtnDiv, BtnSerach, Select, Table, Tr, Th, TdFirst, Td, LabelNavTitle } from '../../styled'
import styled from 'styled-components'
import BtnSearchModal from "./BtnSearchModal";
import BdUppgModal from './BdUppgModal';
import {getRoleNameFromJWT} from "../../utills/UsefullFunctions";

const BtnSearch = () => {
    const [ showBtnSearch, setShowBtnSearch] = useState(false);
    const [ showBdUppgModal, setShowBdUppgModal] = useState(false);
    const [ openUppg, setOpenUppg ] = useState(false);

    const [ selectedUppg, setSelectedUppg ] = useState();
    const [ uppgId, setUppgId ] = useState('');

        /** Sborniy punklar (Collection points) kontekstdan **/
    const {openWell, pressureApi, allUppg, findStatus, findColor, handlerWellSearch, selectedWell} = useContext(AppContext);

    /** Skvajina turgan spni nomini topish, skvajinadagi sp (collectionPointId) id **/
    const cpNameFinder=(id)=> {
        let name="";
        /** for each bilan **/
        pressureApi.forEach(cp=>{
            if (cp.objectDto.id==id) {
                name = cp.objectDto.name;
            }
        })

        /** for bilan **/
        // for (let i = 0; i <pressureApi.length ; i++) {
        //     if (pressureApi[i].objectDto.id==id){
        //         name = pressureApi[i].objectDto.name;
        //     }
        // }

        /** map bilan **/
        // pressureApi.map(cp=>{
        //     if (cp.objectDto.id==id) {
        //         name = cp.objectDto.name;
        //     }
        // })
        return name;

    }

    const openBtnSearchModal = (id) => {
        setShowBtnSearch(prev => !prev);
        setUppgId(id);
    }
    const openBdUppgModal = () => {
        setShowBdUppgModal(prev => !prev)
    }
    // const sorted = [];
    // if(openWell){
    //     for (let s = 0; s < openWell.length; s++){
    //         sorted.push({
    //             number: openWell[s].objectDto.number - openWell[s].objectDto.number,
    //             id: openWell[s].objectDto.id,
    //         })
    //     }
    // }
    // console.log(sorted)

    const handlerAllUppg = e => {
        allUppg.forEach(selectUppg => {
            if(selectUppg.objectDto.id == e.target.value){
                setSelectedUppg(selectUppg)
                console.log(selectUppg)
            }
        })
    }

    return (
        <SearchDiv>
            <BtnDiv>
                <Select name="text" id="text" onChange={handlerAllUppg}>
                    <option value="">--Выберите--</option>
                    {allUppg.map((uppg, key) =>
                        <option key={key} value={uppg.objectDto.id}>{uppg.objectDto.name}</option>
                    )}
                </Select>
                <BtnSerach onClick={()=> setOpenUppg(!openUppg)}>
                    <FontAwesomeIcon icon={faSearch} /> Поиск скважины
                </BtnSerach>
                <BdUppgModal showBdUppgModal={showBdUppgModal}
                                setShowBdUppgModal={setShowBdUppgModal}/>
                <BtnSerach onClick={openBdUppgModal} disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}> БД УППГ </BtnSerach>
            </BtnDiv>
            <SearcherSK openUppg={openUppg}>
                <Form>
                    <LabelChange htmlFor="searcher">Введите номер скважины:</LabelChange>
                    <SelectChange  htmlFor='searcher' id="searcher" onChange={handlerWellSearch}>
                        <option value=""> --Поиск скважины-- </option>
                        {openWell.map(wells =>
                            <option key={wells.objectDto.number} value={wells.objectDto.id}>{wells.objectDto.number}</option>
                        )}
                    </SelectChange>
                </Form>
                <Table>
                    <tbody>
                        <Tr>
                            <TdFirstChange>Скважина</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.number : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Сборный пункт</TdFirstChange>
                            <TdChange>{selectedWell ? cpNameFinder(selectedWell.objectDto.collectionPointId) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата ввода в эксплуатацию</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.commissioningDate.slice(0,10) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Горизонт</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.horizon : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Интервал перфарации</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectActionDto.perforation_min + "-" + selectedWell.objectActionDto.perforation_max : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Состояние скважины</TdFirstChange>
                            <TdChange style={{color: `${selectedWell ? findColor(selectedWell.objectActionDto.status) : ''}`}}>{selectedWell ? findStatus(selectedWell.objectActionDto.status) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата изменения состояния</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectActionDto.createdAt.slice(0,10) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Давление Pу, кгс/см²</TdFirstChange>
                            <TdChange>{selectedWell ? Math.round(selectedWell.objectActionDto.pressure*10)/10 : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Температура T, °C</TdFirstChange>
                            <TdChange>{selectedWell ? Math.round(selectedWell.objectActionDto.temperature*10)/10 : ""}</TdChange>
                        </Tr>
                    </tbody>

                </Table>
                <Table>
                    <thead>
                    <Tr>
                        <Th>Добыча</Th>
                        <Th>Часовая</Th>
                        <Th>За тек. сутки</Th>
                        <Th>За тек. месяц</Th>
                        <Th>С нач. года</Th>
                    </Tr>
                    </thead>
                    <tbody>
                    <Tr>
                        <TdFirst>Расход, тыс.м³/час</TdFirst>
                        <Td>{Math.round((selectedWell ? selectedWell.objectActionDto.expend : "")*10)/10}</Td>
                        <Td>{Math.round((selectedWell ? selectedWell.objectActionDto.expend : "")*24*10)/10}</Td>
                        <Td>{Math.round((selectedWell ? selectedWell.objectActionDto.expend : "")*24*30*10)/10}</Td>
                        <Td>{Math.round((selectedWell ? selectedWell.objectActionDto.expend : "")*24*30*365*10)/10}</Td>
                    </Tr>
                    </tbody>
                </Table>
            </SearcherSK>
            <BtnSearchModal showBtnSearch={showBtnSearch}
                            setShowBtnSearch={setShowBtnSearch}
                            uppgId={uppgId}
                            selectedUppg={selectedUppg}
            />
            <Table>
                <thead>
                <Tr>
                    <Th style={{position:'relative'}}>
                        {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon style={{position:'absolute',
                            top:'10px',
                            left:'10px',
                            cursor:'pointer'}}
                            icon={faEdit}
                            onClick={() => openBtnSearchModal(selectedUppg ? selectedUppg.objectActionDto.uppgId : "")}/> : ""}
                        Наименование</Th>
                    <Th>Часовая</Th>
                    <Th>За тек. сутки</Th>
                    <Th>За тек. месяц</Th>
                    <Th>С нач. года</Th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <TdFirst>Проектная производительность <br/> м3/год</TdFirst>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.designedPerformance : "")}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.designedPerformance : "")*24}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.designedPerformance : "")*24*30}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.designedPerformance : "")*24*365}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Фактическая производителность <br/> м3/год</TdFirst>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.actualPerformance : "")}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.actualPerformance : "")*24}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.actualPerformance : "")*24*30}</Td>
                    <Td>{(selectedUppg ? selectedUppg.objectActionDto.actualPerformance : "")*24*365}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По газу, тыс м3</TdFirst>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10/1000)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10/1000)/10 : "")*24}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10/1000)/10 : "")*24*30}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10/1000)/10 : "")*24*365}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По конденсату, тыс.т</TdFirst>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10/1000)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10/1000)/10 : "")*24}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10/1000)/10 : "")*24*30}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10/1000)/10 : "")*24*365}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По воде, тыс. т</TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round(selectedUppg.objectActionDto.onWater*10/1000)/10 : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">{selectedUppg ? selectedUppg.objectActionDto.incomePressure : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">{selectedUppg ? selectedUppg.objectActionDto.exitPressure : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входная температура, *С</TdFirst>
                    <Td colSpan="4">{selectedUppg ? selectedUppg.objectActionDto.incomeTemperature : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходная температура, *С</TdFirst>
                    <Td colSpan="4">{selectedUppg ? selectedUppg.objectActionDto.exitTemperature : ""}</Td>
                </Tr>
                </tbody>
            </Table>
        </SearchDiv>

    )
}
const SearchDiv = styled.div`
  width: 400px;
  position: relative;
`
const SearcherSK = styled.div`
  width:100%;
  height:${({openUppg}) => (openUppg ? "90%" : "0")};
  position:absolute;
  top:35px;
  z-index: 2;
  background: #fff;
  overflow: hidden;
  transition: height 0.5s ease-in;
`
const TdFirstChange = styled(TdFirst)`
  width: 40%;    
`
const TdChange = styled(Td)`
  width: 50%;
`
const Form = styled.form`
  width:100%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LabelChange = styled(LabelNavTitle)`
  font-size:15px;
`
const SelectChange = styled(Select)`
  padding:2px 5px;
  margin-left: 5px;
  background: #fff;
`
export default BtnSearch
