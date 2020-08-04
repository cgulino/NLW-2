import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/50333786_2161737350531992_7905881077820948480_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeFRm1B1jUkuMCSidJ6pCoH5KANSndqWBZkoA1Kd2pYFmflRzA1HV52N5A-e-kEAXn8D6kVsr-YxBrBtzRWl8PKB&_nc_ohc=8T3DgffADWIAX-NcCwr&_nc_ht=scontent-gru2-2.xx&oh=4753491eecd30753b6e0d937b004d5bb&oe=5F4F7A15" alt="Celso Vinícius" />
            <div>
                <strong>Celso Vinícius</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
        Mussum Ipsum, cacilds vidis litro abertis. 
        <br></br>
        In elementis mé pra quem é amistosis quis leo. Quem manda na minha terra sou euzis! Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;