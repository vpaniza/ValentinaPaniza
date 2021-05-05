import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.scss';
import _ from 'lodash';

const ContactForm = ({clearFormFields, onShowSuccessMessage}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [isUsernameSet, setIsUsernameSet] = useState(false);
    const [isEmailSet, setIsEmailSet] = useState(false);
    const [isMessageSet, setIsMessageSet] = useState(false);

    useEffect(() => {
        if(_.isFunction(onShowSuccessMessage)) onShowSuccessMessage(showSuccessMessage);
    }, [showSuccessMessage]);
    
    useEffect(() => {
        if(clearFormFields) setShowSuccessMessage(false);
    }, [clearFormFields]);
    
    useEffect(() => {
        checkCompleteFields();
    }, [email, userName, message]);
    
    useEffect(() => {
        setIsFormComplete(isUsernameSet && isEmailSet && isMessageSet);
    }, [isUsernameSet, isEmailSet, isMessageSet]);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_portfolio', 'template_portfolio', e.target, 'user_Ls5BThSyy85KheJknldIO')
        .then((result) => {
            console.log(result.text);
            setShowSuccessMessage(true);
            resetFields();
        }, (error) => {
            console.log(error.text);
        });
    }
    
    const handleFieldChange = (e, field) => {
        if(field === 'user_name'){
            setUserName(e.target.value);
        }
        if(field === 'user_email'){
            setEmail(e.target.value);
        }
        if(field === 'message'){
            setMessage(e.target.value);
        }
    }
    
    const handleSubmit = (e) => {
        sendEmail(e);
    }

    const resetFields = () => {
        setUserName("");
        setEmail("");
        setMessage("");
    }

    const checkCompleteFields = () => {
        setIsUsernameSet(userName !== "" ? true : false);
        setIsEmailSet(email !== "" ? true : false);
        setIsMessageSet(message !== "" ? true : false);
    }

    return (
        <form className={styles['form']} onSubmit={e => handleSubmit(e)}>
            <div className={styles['nonMessage']}>
                <input type="text" name="user_name" placeholder="Name" value={userName} onChange={(e) => handleFieldChange(e, 'user_name')} />
                <input type="email" name="user_email" placeholder="Email" value={email} onChange={(e) => handleFieldChange(e, 'user_email')}/>
            </div>
            <textarea name="message" className={styles['messageBox']} placeholder="Type here" value={message} onChange={(e) => handleFieldChange(e, 'message')}/>
            <input 
                type="submit" 
                value="Submit" 
                className={isFormComplete ? styles['submit'] : styles['disabled']} 
                disabled={!isFormComplete}
            />
        </form>
    );
}

export default ContactForm;

