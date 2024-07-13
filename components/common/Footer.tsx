import styles from "../../public/css/Footer.module.css";
import React from "react";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";

export const Footer = () => {
    return(
      <>
        <footer className="w-full flex items-center justify-center py-3 border-t-1">
            <p className="text-default">© 2024 Gongson. All rights reserved.</p>
        </footer>
      </>
    )
}