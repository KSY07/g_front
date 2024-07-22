"use client";

import { useEffect } from "react";
import { Modal, useDisclosure } from "@nextui-org/modal";

import { RequestQuotationModal } from "@/components/modals/RequestQuotationModal";
import { MainBanner } from "@/components/main/MainBanner";
import { PopularTags } from "@/components/main/PopularTags";
import { Projects } from "@/components/main/Projects";
import { Reviews } from "@/components/main/Reviews";
import { Story } from "@/components/main/Story";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    //onOpen();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange}>
        <RequestQuotationModal />
      </Modal>
      <MainBanner />
      <PopularTags />
    </main>
  );
}
