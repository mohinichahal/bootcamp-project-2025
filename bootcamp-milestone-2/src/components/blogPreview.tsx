import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import { Blog } from '../app/blogData';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <Link href={props.title} className={style.blogLink}>
      <div className={style.blogPreview}>
        <h3>{props.title}</h3>
        <div>
          <Image src={props.image} alt={props.title} width={500} height={500} />
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}
/*
export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <Link href={`/blog/${props.slug}`} className={style.blogLink}>

    <div className={style.blogPreview}>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt={props.title} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
	  </div>
      </Link>
  );
}*/