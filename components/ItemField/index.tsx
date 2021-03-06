import React, {LiHTMLAttributes, MouseEventHandler} from 'react';
import styles from './style.module.scss';
import cn from "classnames";
import InputFieldController from "../InputFieldController";
import {Control} from "react-hook-form/dist/types/form";

interface IProps extends LiHTMLAttributes<HTMLLIElement>, Item {
    index: number;
    onDelete?: MouseEventHandler;
    control: Control;
};

const ItemField: React.FC<IProps> = ({
                                         index, name, quantity, price, total,
                                         onDelete, control, className, ...props
                                     }) => {
    return (
        <li className={cn(styles.item, className)}
            {...props}
        >
            <InputFieldController control={control}
                                  type={'text'}
                                  id={`items[${index}].name`}
                                  name={`items[${index}].name`}
            >
                Item Name
            </InputFieldController>
            <div className={styles.itemDetailsContainer}>
                <InputFieldController control={control}
                                      type={'text'}
                                      id={`items[${index}].quantity`}
                                      name={`items[${index}].quantity`}
                >
                    Qty.
                </InputFieldController>
                <InputFieldController control={control}
                                      type={'text'}
                                      id={`items[${index}].price`}
                                      name={`items[${index}].price`}
                >
                    Price
                </InputFieldController>
                <InputFieldController control={control}
                                      className={styles.totalInputField}
                                      type={'text'}
                                      name={`items[${index}].total`}
                                      disabled
                >
                    Total
                </InputFieldController>
                <button className={styles.deleteButton}
                        type={'button'}
                        onClick={onDelete}
                >
                    <img src={'/img/icon-delete.svg'}
                         alt={'delete'}
                    />
                </button>
            </div>
        </li>
    );
};

export default ItemField;
