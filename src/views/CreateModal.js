import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";

function CreateModal({ show, handleClose, handleSave }) {

    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [classNo, setClassNo] = useState('');

    const onSave = () => {
        handleSave(name, score, classNo);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("Create A Record")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">{t('Name')}</label>
                        <input type="text" className="form-control" id="name" placeholder="John" onChange={(evt) => { setName(evt.target.value); }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="score" className="form-label">{t('Score')}</label>
                        <input type="text" className="form-control" id="score" placeholder="100" onChange={(evt) => { setScore(evt.target.value); }} />
                    </div>
                    <label htmlFor="class" className="form-label">{t('Class')}</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="class" id="classA" />
                        <label className="form-check-label" htmlFor="classA" onClick={(evt) => { setClassNo("A"); }}>
                            A
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="class" id="classB" />
                        <label className="form-check-label" htmlFor="classB" onClick={(evt) => { setClassNo("B"); }}>
                            B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="class" id="classC" />
                        <label className="form-check-label" htmlFor="classC" onClick={(evt) => { setClassNo("C"); }}>
                            C
                        </label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} size="sm">
                        {t('Close')}
                    </Button>
                    <Button variant="primary" onClick={onSave} size="sm">
                        {t('Save')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;