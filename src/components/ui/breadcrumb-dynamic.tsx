'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';

export function BreadcrumbDynamic() {
  const pathname = usePathname();
  
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
            <FaHouse />
            <Link href="/">Home</Link>
        </BreadcrumbItem>
        
        {pathSegments.map((segment, i) => {
          const href = `/${pathSegments.slice(0, i + 1).join('/')}`;
          const isLast = i === pathSegments.length - 1;
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
