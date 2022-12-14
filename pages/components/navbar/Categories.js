import React from "react";
import styles from "./styles/Categories.module.css";
import { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState(null);

  const fetcher = async () => {
    const res = await fetch("/api/categories");

    const data = await res.json();

    setCategories(data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <ul className={styles.categories}>
      {categories && categories.map((category, _index) => <li key={_index}>{category}</li>)}
    </ul>
  );
}
