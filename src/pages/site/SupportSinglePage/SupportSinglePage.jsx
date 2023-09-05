import React from 'react';
import styles from './SupportSinglePage.module.scss';
import clsx from 'clsx';
const SupportSinglePage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Как происходит пополнение в игры/сервисы? ⬆️</div>
        <div className={clsx(styles.content)}>
          <p>
            Для разных Сервисов и Игр используется свой способ пополнения. Например в Playstation store, Battle.net, и Steam (На всех регионов, кроме RU), нужно активировать Gift Card, которая выдается вам после покупки. Вам достаточно выбрать желаемую сумму для пополнения, а дальше пройти на
            необходимую платформу и активировать Gift Card. Исключением является Steam RU, где нужно просто ввести свой логин аккаунта Steam, указать желаемую сумму зачисления, и после оплаты средства автоматически поступят на ваш счет. В мобильных играх же достаточно ввести свой ID или UID из игры,
            указать сервер (Если это необходимо), и после оплаты Валюта автоматически зачислится на ваш счет. Там это возможно, поскольку разработчики сами дали возможность прямого официального пополнения, по общедоступным данным, которые видны всем игрокам.
          </p>
          <img src="https://donatov.net/storage/images/donatov.net-16834349114698.webp" alt="Стикер котик Donatov.net в поддержке" class="max-400 w-100 rounded" />
        </div>
      </div>
    </>
  );
};

export default SupportSinglePage;
