'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';
import useIsMobile from '@/hooks/use-is-mobile';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { Button } from './button';

export function BreadcrumbDynamic() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
            <FaHouse />
            <Link href="/">Home</Link>
        </BreadcrumbItem>
        
        {isMobile || pathSegments.length > 3 
          ? (
            <>
              <BreadcrumbSeparator />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon-sm" variant="ghost">
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-fit'>
                  <DropdownMenuGroup>
                    {pathSegments.map((segment, i) => {
                      const href = `/${pathSegments.slice(0, i + 1).join('/')}`;
                      const isLast = i === pathSegments.length - 1;
                      if (isLast) return;

                      return (
                        <DropdownMenuItem key={href} className='capitalize'>
                          <BreadcrumbLink href={href}>
                            {segment}
                          </BreadcrumbLink>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='capitalize'>
                  {pathSegments[pathSegments.length - 1]}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )
          : (
            pathSegments.map((segment, i) => {
              const href = `/${pathSegments.slice(0, i + 1).join('/')}`;
              const isLast = i === pathSegments.length - 1;

              return (
                <React.Fragment key={href}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className='capitalize'>
                    {isLast ? (
                      <BreadcrumbPage>{segment}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })
          )
        
        }
        
      </BreadcrumbList>
    </Breadcrumb>
  );
}
