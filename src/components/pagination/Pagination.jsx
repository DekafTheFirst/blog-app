"use client";
import React from "react";
import styles from './pagination.module.css'
import { useRouter } from "next/navigation";


export const Pagination = ({page, hasPrev, hasNext}) => {
  const router = useRouter()
  console.log(hasPrev)
  return (
    <div className={styles.container}>
      <button   
        className={styles.button} 
        onClick={()=> router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}>
          Previous</button>
      <button 
        className={styles.button} 
        onClick={()=> router.push(`?page=${page + 1}`)}
        disabled={!hasNext}>Next</button>
    </div>
  )
}
