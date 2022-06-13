import style from "./style/StudentCard.module.css";

const StudentCard = ({ firstname, lastname, campus }) => {
  return (
    <div className={style.userCardContainer}>
      <div className={style.nameContainer}>
        <div>
          {firstname} {lastname}
        </div>
      </div>
      <div className={style.city}>Je suis Wilder(euse) à {campus}</div>
    </div>
  );
};

export default StudentCard;
