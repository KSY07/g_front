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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Modal, useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";

import { ThemeSwitch } from "@/components/theme-switch";
import { RequestQuotationModal } from "@/components/modals/RequestQuotationModal";
import { CompanyAddRequestModal } from "@/components/modals/CompanyAddRequestModal";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "@nextui-org/tooltip";
import { LoginModal } from "@/components/modals/LoginModal";

const useRequestDisclosure = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return {
    isRequestModalOpen: isOpen,
    onRequestModalOpen: onOpen,
    onRequestModalOpenChange: onOpenChange,
  };
};

const useCompanyRegDisclosure = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return {
    isCompanyModalOpen: isOpen,
    onCompanyModalOpen: onOpen,
    onCompanyModalOpenChange: onOpenChange,
    onCompanyModalClose: onClose,
  };
};

const useSignInDisclosure = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return {
    isSignInModalOpen: isOpen,
    onSignInModalOpen: onOpen,
    onSignInModalOpenChange: onOpenChange,
    onSignInModalClose: onClose,
  };
};

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isRequestModalOpen, onRequestModalOpen, onRequestModalOpenChange } =
    useRequestDisclosure();
  const {
    isCompanyModalOpen,
    onCompanyModalOpen,
    onCompanyModalOpenChange,
    onCompanyModalClose,
  } = useCompanyRegDisclosure();
  const {
    isSignInModalOpen,
    onSignInModalOpen,
    onSignInModalOpenChange,
    onSignInModalClose,
  } = useSignInDisclosure();

  const menuItems = ["시공 사례", "시공 전문가", "고객 후기", "로그 아웃"];
  const modalCompleteCallback = (noti: string) => {
    toast(noti);
  };

  return (
    <>
      {/* 견적 신청 모달 */}
      <Modal
        isOpen={isRequestModalOpen}
        size="5xl"
        onOpenChange={onRequestModalOpenChange}
      >
        <RequestQuotationModal />
      </Modal>
      {/* 제휴사 신청 모달 */}
      <Modal
        isOpen={isCompanyModalOpen}
        size="5xl"
        onOpenChange={onCompanyModalOpenChange}
      >
        <CompanyAddRequestModal
          toastCallBack={modalCompleteCallback}
          onClose={onCompanyModalClose}
        />
      </Modal>
      {/*  로그인 모달 */}
      <Modal
        isOpen={isSignInModalOpen}
        size="xl"
        onOpenChange={onSignInModalOpenChange}
      >
        <LoginModal />
      </Modal>
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
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={onRequestModalOpen}
            >
              견적 신청하기
            </Button>
          </Tooltip>
          <Tooltip
            color="primary"
            content={"공손의 제휴사가 되어보세요."}
            placement="bottom-start"
            showArrow={true}
          >
            <Button
              as={Link}
              color="secondary"
              href="#"
              variant="flat"
              onClick={onCompanyModalOpen}
            >
              제휴사 신청하기
            </Button>
          </Tooltip>
          <NavbarItem className="hidden lg:flex ml-7">
            <Tooltip
              color="secondary"
              content={"로그인"}
              placement="bottom-start"
              showArrow={true}
            >
              <PersonOutlineIcon fontSize="large" onClick={() => onSignInModalOpen()}/>
            </Tooltip>
            <Tooltip
              color="secondary"
              content={"고객 회원가입"}
              placement="bottom-start"
              showArrow={true}
            >
              <PersonAddAltIcon className="ml-4" fontSize="large" onClick={() => toast("준비 중 입니다.")}/>
            </Tooltip>
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
    </>
  );
};
