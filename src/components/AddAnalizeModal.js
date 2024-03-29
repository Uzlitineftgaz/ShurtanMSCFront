import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer,
    // SaveBtnModal,
    CloseBtnModal } from '../styled'

const AddAnalizeModal = ({showAddAnalizeModal, setShowAddAnalizeModal, analysis, date}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showAddAnalizeModal ? 1 : 0,
        transform: showAddAnalizeModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowAddAnalizeModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showAddAnalizeModal){
            setShowAddAnalizeModal(false)
        }
    }, [setShowAddAnalizeModal, showAddAnalizeModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showAddAnalizeModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showAddAnalizeModal={showAddAnalizeModal}>
                <H2Div>
                    <H2>Анализ добычи</H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th rowSpan="2" style={{padding:'1rem'}}>Наименование</Th>
                            <Th colSpan="2">За текущий месяц</Th>
                            <Th colSpan="3">С начала года</Th>
                        </Tr>
                        <Tr>
                            <Th>План добычи тыс.м<sup>3</sup></Th>
                            <Th>Факт добыча тыс.м<sup>3</sup></Th>
                            <Th>План добычи тыс.м<sup>3</sup></Th>
                            <Th>Факт добыча тыс.м<sup>3</sup></Th>
                            <Th>За аналог. период прошлого года тыс.м<sup>3</sup></Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {analysis.map((add, key) =>
                        <Tr key={key}>
                            <TdFirst>{add.name}</TdFirst>
                            <Td> <InputModal type="number"  name="name" value={Math.round(add.plan_m/1000*10)/10} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={Math.round(add.fakt_m/1000*10)/10} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={Math.round(add.plan_g/1000*10)/10} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={Math.round(add.fakt_g/1000*10)/10} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={Math.round(add.proshlom_god/1000*10)/10} required/> </Td>
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
                            onClick={()=> setShowAddAnalizeModal(prev => !prev)}>Закрыт
                        </CloseBtnModal>
                    </div>
                </SaveDiv>
            </ModalContainer>
            </animated.div>
        </ModalContainerFluid> 
        ) : null}
        </>
    );
};

export default AddAnalizeModal
