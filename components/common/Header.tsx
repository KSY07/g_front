"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "@nextui-org/navbar";
import { NavbarBrand } from "@nextui-org/navbar";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";
import { DropdownItem, DropdownMenu, Tooltip } from "@nextui-org/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown, DropdownTrigger } from "@nextui-org/dropdown";

import { ThemeSwitch } from "@/components/theme-switch";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = ["시공 사례", "시공 전문가", "고객 후기", "로그 아웃"];

  return (
    <Navbar
      isBordered
      className="font-serif"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img alt="logo" height={50} src="/Gongson_ico.png" width={50} />
          <p className="font-bold text-inherit">공간손길</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarBrand>
          <img alt="logo" height={50} src="/Gongson_ico.png" width={50} />
          <p className="font-bold text-inherit text-2xl ml-2">공간손길</p>
        </NavbarBrand>
        <NavbarItem>
          <Tooltip
            color="primary"
            content={"AI가 추천하는 맞춤 설계"}
            placement="bottom-start"
            showArrow={true}
          >
            <Link color="foreground" href="#">
              AI 맞춤 설계
            </Link>
          </Tooltip>
          <Tooltip
            color="primary"
            content={"여러 시공사례들을 만나보세요."}
            placement="bottom-start"
            showArrow={true}
          >
            <Link className="ml-4" color="foreground" href="#">
              시공 사례
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip
            color="primary"
            content={"공손 제휴 엄선된 업체들을 만나보세요."}
            placement="bottom-start"
            showArrow={true}
          >
            <Link color="foreground" href="#">
              시공 전문가
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip
            color="primary"
            content={"생생한 공손 이용 후기"}
            placement="bottom-start"
            showArrow={true}
          >
            <Link color="foreground" href="#">
              고객 후기
            </Link>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Tooltip
          color="primary"
          content={"AI 공손이와 함께"}
          placement="bottom-start"
          showArrow={true}
        >
          <Button as={Link} color="primary" href="#" variant="flat">
            견적 신청하기
          </Button>
        </Tooltip>
        <NavbarItem className="hidden lg:flex ml-7">
          <Dropdown>
            <DropdownTrigger>
              <AccountCircleIcon fontSize="large" />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="signIn">로그인</DropdownItem>
              <DropdownItem key="signUp">회원가입</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>

      {/* 모바일 헤더 */}
      <NavbarContent className="sm:hidden" justify="end" />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-serif"
              color={index === menuItems.length - 1 ? "danger" : "foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
