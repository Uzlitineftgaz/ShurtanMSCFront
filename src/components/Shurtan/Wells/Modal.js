import React, {useRef, useEffect, useCallback, useContext} from 'react';
import {AppContext} from '../../../context'
import { motion, AnimatePresence } from 'framer-motion'
import { TableModalShurtan, TdModalShurtanFirst, ModalDivShurtan, TdModalShurtan, TdModalShurtanData, TdModalShurtanColor,
    ButtonModalShurtan } from '../../../styled'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal = ({showModal, setShowModal, id, findColor, findStatus}) => {
    const {openWell, dateTime, date} = useContext(AppContext);
    const filtered = openWell.filter(el => el.objectDto.number === id);

    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modal"
                                variants={modal}
                    >
                        <ModalDivShurtan>
                            <TableModalShurtan>
                                {filtered.map(el =>
                                    <tbody key={el}>
                                    <tr>
                                        <TdModalShurtanFirst>?????????? ????????????????</TdModalShurtanFirst>
                                        <TdModalShurtan>{id}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>????????????</TdModalShurtanFirst>
                                        <TdModalShurtanColor style={{color: `${findColor(el.objectActionDto.status)}`}}>{findStatus(el.objectActionDto.status)}</TdModalShurtanColor>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>?????????????????? ??????????????????</TdModalShurtanFirst>
                                        <TdModalShurtan>{
                                            // el.objectActionDto.createdAt.slice(0, 10)
                                            date
                                        }</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>????, ??????/??????</TdModalShurtanFirst>
                                        <TdModalShurtan>{Math.round(el.objectActionDto.pressure*10)/10 }</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>??????, ??????/??????</TdModalShurtanFirst>
                                        <TdModalShurtan>{Math.round(el.objectActionDto.rpl*10)/10}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>????????????, ????/??</TdModalShurtanFirst>
                                        <TdModalShurtan>{Math.round((el.objectActionDto.expend)*10)/10}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>??????????????????????, ??C</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto.temperature}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>???????????????? ????????????????????</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto.perforation_min}-{el.objectActionDto.perforation_max}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanData colSpan="2">???????? ????????????????????</TdModalShurtanData>
                                    </tr>
                                    <tr>
                                        <TdModalShurtan colSpan="2">{
                                            // el.objectActionDto.createdAt.slice(0, 10)} {el.objectActionDto.createdAt.slice(11, 19)
                                          dateTime
                                        }</TdModalShurtan>
                                    </tr>
                                    </tbody>
                                )}
                            </TableModalShurtan>
                            <ButtonModalShurtan onClick={() => setShowModal(prev => !prev)}>OK</ButtonModalShurtan>
                        </ModalDivShurtan>
                    </motion.div>   
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
// const TdModalShurtanColorWell = styled(TdModalShurtanColor)`
//   color: findColor;
// `
export default Modal
