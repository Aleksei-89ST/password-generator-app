import React from "react";
import styles from "./password-generator.module.css";
import Input from "../../ui/input/input";
import Select from "../../ui/select/select";
import Checkbox from "../../ui/checkbox/checkbox";
import Button from "../../ui/button/button";

function PasswordGenerator() {
  const passwordLengthValues = [12, 13, 14, 15, 16];
  return (
    <div className={styles["root"]}>
      <h1 className={styles["title"]}>Генератор паролей</h1>
      <div className={styles["result"]}>
        <Input type="text" readOnly={true}></Input>
        <button className={styles["copy"]}></button>
        <span className={styles["copied"]}>Скопировано</span>
      </div>
      <div className={styles["option"]}>
        <span className={styles["option-name"]}>Длина пароля</span>
        <Select options={passwordLengthValues}></Select>
      </div>
      <div className={styles["option"]}>
        <label className={styles["option-label"]} htmlFor="symbols">
          Использовать спецсимволы
        </label>
        <Checkbox defaultChecked={false} id="symbols"></Checkbox>
      </div>
      <Button type='button'>Сгенерировать пароль</Button>
    </div>
  );
}

export { PasswordGenerator };