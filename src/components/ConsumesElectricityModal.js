import React, {useRef, useEffect, useCallback, useContext} from 'react';
import {AppContext} from '../context';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer,
    // SaveBtnModal,
    CloseBtnModal } from '../styled'

const ConsumesElectricityModal = ({showConsumedElectricity, setShowConsumedElectricity, nameAllMining, getElectric}) => {
    const {handlerElectric, onSubmitElectric, date} = useContext(AppContext);

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showConsumedElectricity ? 1 : 0,
        transform: showConsumedElectricity ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowConsumedElectricity(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showConsumedElectricity){
            setShowConsumedElectricity(false)
        }
    }, [setShowConsumedElectricity, showConsumedElectricity])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showConsumedElectricity ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showConsumedElectricity={showConsumedElectricity}>
                <H2Div>
                    <H2>Потребляемая электроэнергия, кв/ч</H2>
                </H2Div>
                <form onSubmit={onSubmitElectric}>
                <Table>
                    <thead>
                        <Tr>
                            <Th style={{padding:'1rem'}}>Наименование</Th>
                            <Th>Часовая</Th>
                            <Th>Сутки</Th>
                            <Th>С начало месяца</Th>
                            <Th>С начало года</Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {getElectric.map((mining, index) =>
                        <Tr key={index}>
                            <TdFirst>{nameAllMining !== null ? nameAllMining[index].name : ""}</TdFirst>
                            <Td> <InputModal type="number" name="name" defaultValue={mining !== null ? mining.hourly : ""} onChange={handlerElectric} required/> </Td>
                            <Td> <InputModal type="number" name="name" defaultValue={mining !== null ? mining.hourly*24 : ""} disabled/> </Td>
                            <Td> <InputModal type="number" name="name" defaultValue={mining !== null ? mining.hourly*24*30 : ""} disabled/> </Td>
                            <Td> <InputModal type="number" name="name" defaultValue={mining !== null ? mining.hourly*24*30*365 : ""} disabled/> </Td>
                        </Tr>
                    )}
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> {date} </SpanModal> </PModal>
                    </div>
                    <div>
                        {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowConsumedElectricity(prev => !prev)}>Закрыт
                        </CloseBtnModal>
                    </div>
                </SaveDiv>
                </form>
            </ModalContainer>
            </animated.div>
        </ModalContainerFluid> 
        ) : null}
        </>
    );
};

export default ConsumesElectricityModal
