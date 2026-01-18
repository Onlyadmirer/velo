"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface ConfirmDeleteProps {
  item: {
    id: number;
  };
  removeItem: (id: number) => void;
}

function ConfirmDelete({ item, removeItem }: ConfirmDeleteProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} aria-label='Remove item'>
          <Trash2 className='w-5 h-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Anda yakin hapus item ini?</AlertDialogTitle>
          <AlertDialogDescription>
            Item akan dihapus dari keranjang dan Anda tidak dapat membatalkan
            tindakan ini.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => removeItem(item.id)}>
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmDelete;
