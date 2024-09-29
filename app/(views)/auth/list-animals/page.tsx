import { ListAnimalsView } from "@/app/(views)/auth/list-animals/ui/view/listAnimals.view";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adopt me | List animals",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function ListAnimals () {
    return (
        <ListAnimalsView />
    )
}