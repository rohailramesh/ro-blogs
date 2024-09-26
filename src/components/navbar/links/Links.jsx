"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const admin = true;
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.links}>
        {/* These links are visible to anyone regardless of session or admin property */}
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* First check if session is true. if it is, then check if admin is true and if that is true than show admin link. If admin is false but session is true than show logout */}
        {session ? (
          <>
            {admin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          // If session is false than show login
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} />
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
