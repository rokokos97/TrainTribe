import React from "react";
import styles from "./ShareTheStribe.module.scss";
import { useForm } from "react-hook-form";

enum SportEnum {
  swim = "swim",
  bike = "bike",
  run = "run"
}

interface IFormInputSport {
  firstName: string;
  gender: SportEnumEnum;
}

const ShareTheStribe: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <section className={styles.ShareTheStribe}>
      <form className={styles.verticalForm} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Sport
          <select
            className={styles.select}
            {...register("sport", { required: true })}
          >
            <option value={SportEnum.swim}>Swim</option>
            <option value={SportEnum.bike}>Bike</option>
            <option value={SportEnum.run}>Run</option>
          </select>
        </label>
        <label>
          Distance
          <input
            className={styles.select}
            type="number"
            {...register("distance", { required: true })}
          />
        </label>
        <label>
          Level
          <select
            className={styles.select}
            {...register("level", { required: true })}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <label>
          Date
          <input
            className={styles.select}
            type="date"
            {...register("date", { required: true })}
          />
        </label>
        <label>
          Time
          <input
            className={styles.select}
            type="time"
            {...register("time", { required: true })}
          />
        </label>
        <label>
          City
          <input
            className={styles.select}
            type="text"
            {...register("location", { required: true })}
          />
        </label>
        <input
          className={styles.input}
          type="submit"
          value="Share the Stribe"
        />
      </form>
    </section>
  );
};

export default ShareTheStribe;
