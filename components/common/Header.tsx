'use client';

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "@nextui-org/navbar";
import { NavbarBrand } from "@nextui-org/navbar";
import { NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from "@nextui-org/navbar";
import {useState} from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { Tooltip } from "@nextui-org/react";

export const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        "시공 사례",
        "시공 전문가",
        "고객 후기",
        "로그 아웃"
    ];

    return(
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setMenuOpen}
            className="font-serif"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <img src="/Gongson_ico.png" width={50} height={50}/>
                    <p className="font-bold text-inherit">공간손길</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <img src="/Gongson_ico.png" width={50} height={50}/>
                    <p className="font-bold text-inherit text-2xl ml-2">공간손길</p>
                </NavbarBrand>
                <NavbarItem>
                    <Tooltip placement="bottom-start" content={"여러 시공사례들을 만나보세요."} color="primary" showArrow={true}>
                        <Link color="foreground" href="#">
                            시공 사례
                        </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip placement="bottom-start" content={"공손 제휴 엄선된 업체들을 만나보세요."} color="primary" showArrow={true}>
                    <Link color="foreground" href="#">
                        시공 전문가
                    </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip placement="bottom-start" content={"생생한 공손 이용 후기"} color="primary" showArrow={true}>
                    <Link color="foreground" href="#">
                        고객 후기
                    </Link>
                    </Tooltip>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <Tooltip placement="bottom-start" content={"AI 공손이와 함께"} color="primary" showArrow={true}>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        견적 신청하기
                    </Button>
                </Tooltip>
                <NavbarItem className="hidden lg:flex ml-7">
                    <Link href="#">로그인(아이콘 변경 필요)</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat">
                        가입하기
                    </Button>
                </NavbarItem>
                <ThemeSwitch />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full font-serif"
                            color={
                                index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}