'use client';
import useLogout from '@/features/auth/hooks/use-logout';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './alert-dialog';
import { JSX } from 'react';

interface LogoutDialogProps {
    open: boolean,
    setOpenLogoutDialog: (open: boolean) => void,
}

export default function LogoutDialog({ open, setOpenLogoutDialog } : LogoutDialogProps): JSX.Element {
    const { logout, isLogoutLoading } = useLogout();
    return (
        <AlertDialog
            open={open}
            onOpenChange={setOpenLogoutDialog}
        >
            <AlertDialogContent size='sm'>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Confirm Logout
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to end your current session? Any unsaved changes may be lost.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant='outline' className='cursor-pointer'>
                        Cancle
                    </AlertDialogCancel>
                    <AlertDialogAction
                        variant='destructive' 
                        className='cursor-pointer'
                        disabled={isLogoutLoading}
                        onClick={() => logout()}
                    >
                        Log out
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

