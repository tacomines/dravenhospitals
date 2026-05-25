"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

import styles from "./Navbar.module.css";

import { navigationItems } from "@/config/navigationConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  const mobileMenuRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent
    ) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleOutsideClick
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a
          href="#hero"
          className={styles.logoWrapper}
        >
          <Image
            src="/images/logos/draven-logo.png"
            alt="Draven Hospitals"
            width={220}
            height={60}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.desktopNav}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className={styles.ctaButton}
        >
          Book Appointment
        </a>

        <button
          className={
            styles.mobileMenuButton
          }
          onClick={() =>
            setIsOpen(!isOpen)
          }
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IoClose size={28} />
          ) : (
            <HiOutlineMenuAlt3 size={28} />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className={
            styles.mobileMenuOpen
          }
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                styles.mobileNavLink
              }
              onClick={() =>
                setIsOpen(false)
              }
            >
              {item.label}
            </a>
          ))}

          <a
            href="#cta"
            className={
              styles.mobileCtaButton
            }
            onClick={() =>
              setIsOpen(false)
            }
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}