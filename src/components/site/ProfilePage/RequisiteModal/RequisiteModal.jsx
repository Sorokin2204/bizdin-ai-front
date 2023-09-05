import React from 'react';
import styles from './RequisiteModal.module.scss';
import clsx from 'clsx';
const RequisiteModal = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.game)}>
            <img src="../img/game-1.webp" alt="" className={clsx(styles.gameImg)} />
            <div className={clsx(styles.box)}>
              <div className={clsx(styles.gameName)}>Identity V</div>
              <div className={clsx(styles.gameCount)}>1 / 20</div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.itemLeft)}>
              <div className={clsx(styles.itemLine)}>
                <div className={clsx(styles.itemLineLabel)}>Ваш ID: </div>
                <div className={clsx(styles.itemLineValue, 'text-monospace')}>3564456</div>
              </div>
              <div className={clsx(styles.itemLine)}>
                <div className={clsx(styles.itemLineLabel)}>Сервер: </div>
                <div className={clsx(styles.itemLineValue, 'text-monospace')}>NA и EU</div>
              </div>
            </div>
            <div className={clsx(styles.itemDelete)}>Удалить</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequisiteModal;
