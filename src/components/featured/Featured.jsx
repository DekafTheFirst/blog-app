import React from "react";
import styles from './featured.module.css'
import Image from "next/image";


export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> 
        <b>Hey, It's Dekaf!</b> Here Are My Creative Stories and Ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Iure aliquam perspiciatis nihil nobis illo, 
            eligendi saepe. Id iure esse quasi at, placeat porro eligendi saepe quibusdam rerum,
             magni neque alias.         
          </p>
          <button className={styles.button}>Read More</button>
        </div>

      </div>
    </div>
  )
}
