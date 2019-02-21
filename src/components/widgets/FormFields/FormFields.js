import React from 'react';
import styles from './formFields.module.css';

const FormField = ({formdata, id, change}) => {

    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className={styles.labelError}>
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch (formdata.element) {
            case 'input':
                formTemplate = (
                    <div>
                        <input 
                            {...formdata.config}
                            onChange={(event) => change({event, id, blur: false})}
                            onBlur={(event) => change({event, id, blur: true})}
                        />
                        {showError()}
                    </div>
                )
                break;
        
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;