'use client';

import {RequestQuotationModal} from "@/components/modals/RequestQuotationModal";
import {useEffect, useState} from "react";
import {MainBanner} from "@/components/main/MainBanner";
import {PopularTags} from "@/components/main/PopularTags";
import {Projects} from "@/components/main/Projects";
import {Reviews} from "@/components/main/Reviews";
import {Story} from "@/components/main/Story";
import { Modal, useDisclosure } from "@nextui-org/modal";


export default function Home() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
        onOpen();
    }, []);

  return (
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
                    <RequestQuotationModal />
                </Modal>
                <MainBanner />
                <PopularTags />
                <Projects />
                <Reviews />
                <Story />
            </main>
  );
}
