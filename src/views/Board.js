import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Board.module.css';
import Form from 'react-bootstrap/Form';
import CreateModal from './CreateModal';
import { addRecord, deleteRecord, getScore } from '../features/counter/scoreSlice';

export function Board() {

    const scores = useSelector(getScore);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const [fromScore, setFromScore] = useState(0);
    const [toScore, setToScore] = useState(100);
    const [classNo, setClassNo] = useState([]);

    const onCloesModal = () => {
        setShowModal(false);
    }

    const onAddRecord = () => {
        setShowModal(true);
    }

    const onSaveRecord = (name, score, clsNo) => {
        console.log(clsNo);
        dispatch(addRecord({
            name,
            score: parseFloat(score),
            classNo: clsNo
        }));
        setShowModal(false);
    }

    const onDeleteRecord = (idx) => {
        dispatch(deleteRecord(idx));
    }

    const onSelectClass = (clsNo) => {
        const idx = classNo.indexOf(clsNo);
        if (idx >= 0) {
            setClassNo([
                ...classNo.slice(0, idx),
                ...classNo.slice(idx + 1)
            ]);
        } else {
            setClassNo([...classNo, clsNo]);
        }
    }

    return (
        <Container>
            <Row className='p-2'>
                <Col>
                    <div>Score Range:</div>
                    <div className={styles.filterForm}>
                        <div>From:</div>
                        <input type="text" className='form-control  form-control-sm' placeholder="0" onChange={(evt) => setFromScore(evt.target.value.trim() == '' ? 0 : parseFloat(evt.target.value.trim()))} />
                        <div>To:</div>
                        <input type="text" className='form-control  form-control-sm' placeholder="100" onChange={(evt) => setToScore(evt.target.value.trim() == '' ? 100 : parseFloat(evt.target.value.trim()))} />
                    </div>
                </Col>
                <Col>
                    <div>Class Range:</div>
                    <div className={styles.filterRadioForm}>
                        <div className={`form-check ${styles.pl25}`}>
                            <input className="form-check-input" type="checkbox" value="" id="filterClassA" onClick={(evt) => onSelectClass('A')} />
                            <label className="form-check-label" htmlFor="filterClassA">
                                A
                            </label>
                        </div>
                        <div className={`form-check ${styles.pl25}`}>
                            <input className="form-check-input" type="checkbox" value="" id="filterClassB" onClick={(evt) => onSelectClass('B')} />
                            <label className="form-check-label" htmlFor="filterClassB">
                                B
                            </label>
                        </div>
                        <div className={`form-check ${styles.pl25}`}>
                            <input className="form-check-input" type="checkbox" value="" id="filterClassC" onClick={(evt) => onSelectClass('C')} />
                            <label className="form-check-label" htmlFor="filterClassC">
                                C
                            </label>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className='btn btn-primary btn-sm' onClick={onAddRecord}>Add</button>
                    <CreateModal show={showModal} handleClose={onCloesModal} handleSave={onSaveRecord} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Score</th>
                                <th scope="col">Class</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                scores.length > 0 && scores.map((b, idx) => {

                                    const bCheckCls = classNo.length == 0 || classNo.indexOf(b.classNo) >= 0;

                                    if (b.score >= fromScore && b.score <= toScore && bCheckCls)
                                        return (
                                            <tr key={idx}>
                                                <td>{idx + 1}</td>
                                                <td>{b.name}</td>
                                                <td>{b.score}</td>
                                                <td>{b.classNo}</td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm' onClick={() => onDeleteRecord(idx)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                })
                            }

                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}
