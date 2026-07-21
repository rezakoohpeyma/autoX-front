import { METADATA } from '@/constants/metadata';
import { Metadata } from 'next';
import { ComponentProps, JSX } from 'react';
type UserManagementLayoutProps = ComponentProps<'div'>;

export const metadata: Metadata = {
    title: {
        default: `User Management`,
        template: `%s | ${METADATA.userManagement}`
    }
}

export default function UserManagementLayout({ children } : UserManagementLayoutProps): JSX.Element {
    return (
        <div>
            {children}
        </div>
    )
}

