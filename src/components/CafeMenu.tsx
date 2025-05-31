"use client";

import { CakeSlice, Cookie} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getContent } from "@/sanity/sanity.utils";
import { useEffect, useState } from "react";
import {
  PortableText,
  PortableTextReactComponents,
} from "next-sanity";
import { Project } from "../../types/Project";

const menuStyle: Partial<PortableTextReactComponents> = {
  block: {
    h3: ({ children }) => (
      <header className="flex items-center mt-3 mb-1">
        <h3 className="text-xl font-semibold">{children}</h3>
      </header>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="flex flex-col justify-stretch align-middle mb-1">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-none flex justify-between w-full border-b border-dotted border-gray-300 pb-1 mb-2">{children}</li>
    ),
  },
};

export function CafeMenu() {
  const [menuItems, setMenuItems] = useState<Project>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      getContent("menu").then((data) => {
        setMenuItems(data);
            setLoading(false);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-lg">
          <CakeSlice className="mr-1 text-green_sid" /> Click here to check our
          menu <Cookie className="ml-1 text-pink_sid" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">
              21 Sid Menu
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Fresh daily selections
            </DrawerDescription>
          </DrawerHeader>

          <article className="p-6 pb-0 max-h-[60vh] overflow-y-auto">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  menuItems && (
                      <PortableText
                        value={menuItems.Content}
                        components={menuStyle}
                      />
                  )
                )}
          </article>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close Menu</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}