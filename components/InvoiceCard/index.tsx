import React from 'react';
import styles from './style.module.scss';
import StatusBox from "../StatusBox";

interface IProps {
    id: string;
    clientName: string;
    paymentDue: string;
    total: number;
    status: string;
};

const InvoiceCard: React.FC<IProps> = ({
                                           id, clientName, paymentDue, total,
                                           status
                                       }) => {
    return (
        <div className={styles.invoiceCard}>
            <span className={styles.id}>
                <span className={styles.hashtag}>#</span>
                {id}
            </span>
            <span className={styles.clientName}>
                {clientName}
            </span>
            <span className={styles.paymentDue}>
                {paymentDue}
            </span>
            <span className={styles.total}>
                £ {total?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            <div className={styles.statusWrapper}>
                <StatusBox status={status} />
            </div>
        </div>
    );
};

export default InvoiceCard;
