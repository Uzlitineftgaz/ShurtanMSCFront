import React, {useRef, useEffect, useCallback, useContext} from 'react';
import {AppContext} from "../../../context";
import { motion, AnimatePresence } from 'framer-motion'
import {
    AddGasNavbarModalDiv,
    NavbarModalP,
    ButtonNavbarCancel,
    ButtonNavbarSave,
    ButtonDiv,
    ParametersP,
    ParametersDiv,
    ParametersCard,
    ParametersInput,
    LabelNav,
    SelectNav,
    NavbarModalInput,
    AddFactDiv, CurrentMonthDiv
} from '../../../styled'
import styled from 'styled-components'

// Modal animation
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

const RegistrationWell = () => {
    const {
        numberWell, handlerNumberWell,
        uppg, handlerUppg,
        point, handlerPoint, getPoint,
        horizon, handlerHorizon,
        comDate, handlerComDate,
        drillDate, handlerDrillDate,
        category, handlerCategory,
        state, handlerState,
        intervalWell, handlerInterval,
        altitude, handlerAltitude,
        depth, handlerDepth,
        coordX, hadlerCoordX,
        coordY, hadlerCoordY,
        getUppg, handlerSubmit,
        showRegistrationWell, setShowRegistrationWell,
    } = useContext(AppContext);

    // Modal animation
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowRegistrationWell(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showRegistrationWell){
            setShowRegistrationWell(false)
        }
    }, [setShowRegistrationWell, showRegistrationWell]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showRegistrationWell && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalWellOparation"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form onSubmit={handlerSubmit}>
                                <ParametersDiv>
                                    <ParametersCard>
                                        <LabelNav htmlFor="well">?????????? ????????????????</LabelNav>
                                        <ParametersInput type="number" name="well" id="well" value={numberWell} onChange={handlerNumberWell} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="uppg">????????</LabelNav>
                                        <SelectNav name="uppg" id="uppg" value={uppg} onChange={handlerUppg} required>
                                            <option value="">--????????????????--</option>
                                            {getUppg.map((el, u) =>
                                                <option key={u} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="sp">????</LabelNav>
                                        <SelectNav name="sp" id="sp" value={point} onChange={handlerPoint} required>
                                            <option value="">--????????????????--</option>
                                            {getPoint.map((el, p) =>
                                                <option key={p} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>????????????????</ParametersPChange>
                                        <ParametersInputChange type="text" name="text" value={horizon} onChange={handlerHorizon} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>???????? ?????????? ?? ????????????????????????</ParametersPChange>
                                        <ParametersInputChange type="date" name="date" value={comDate} onChange={handlerComDate} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>???????? ???????????? ??????????????</ParametersPChange>
                                        <ParametersInputChange type="date" name="date" value={drillDate} onChange={handlerDrillDate} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="category">??????????????????</LabelNav>
                                        <SelectNav name="category" id="category" value={category} onChange={handlerCategory} required>
                                            <option value="">--????????????????--</option>
                                            <option value="MINING">????????????????????</option>
                                            <option value="DISCHARGE">????????????????????????????</option>
                                            <option value="EXPLORATION">??????????????????????</option>
                                            <option value="PIEZOMETRIC">????????????????????????????????</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="state">??????????????????</LabelNav>
                                        <SelectNav name="state" id="state" value={state} onChange={handlerState} required>
                                            <option value="">--????????????????--</option>
                                            <option value="IN_WORK">?? ????????????</option>
                                            <option value="IN_IDLE">?? ??????????????</option>
                                            <option value="IN_REPAIR">?? ??????????????</option>
                                            <option value="IN_CONSERVATION">?? ??????????????????????</option>
                                            <option value="IN_LIQUIDATION">?? ????????????????????</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>???????????????? ????????????????????</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={intervalWell} onChange={handlerInterval} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>??????????????????, ??</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={altitude} onChange={handlerAltitude} required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>??????????????, ??</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={depth} onChange={handlerDepth} required/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <CurrentMonthDivChange>
                                    <div>
                                        <NavbarModalP>????????????????????</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="X=" value={coordX} onChange={hadlerCoordX} required/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>????????????????????</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="Y=" value={coordY} onChange={hadlerCoordY} required/>
                                    </AddFactDiv>
                                </CurrentMonthDivChange>
                                <ButtonDivChange>
                                    <ButtonNavbarSave disabled>??????????????????</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowRegistrationWell(prev => !prev)}>??????????</ButtonNavbarCancel>
                                </ButtonDivChange>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const ParametersPChange = styled(ParametersP)`
  text-align: center;
  width: 220px;
`
const ParametersInputChange = styled(ParametersInput)`
  width:170px;
`
const NavbarModalInputChange = styled(NavbarModalInput)`
  text-align: start;
  padding-left: 25px;
`
const CurrentMonthDivChange = styled(CurrentMonthDiv)`
  margin: 5px;
`
const ButtonDivChange = styled(ButtonDiv)`
  margin: 10px 0 0 0;
`

export default RegistrationWell
