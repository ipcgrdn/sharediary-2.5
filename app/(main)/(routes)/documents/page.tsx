"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Creating a new diary...",
      success: "New diary created!",
      error: "Failed to create a new diary.",
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
      <Image src="/wave.png" height="400" width="400" alt="empty" />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Diary
      </h2>
      <Button variant="second" onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Diary
      </Button>
    </div>
  );
};

export default DocumentsPage;
