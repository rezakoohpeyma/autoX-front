'use client';

import SidebarFooter from './sidebar-footer';
import SidebarCategory from './sidebar-category';
import SidebarHeader from './sidebar-header';
import { JSX } from 'react';
import { SIDEBAR_WIDTH } from '../config/sidebar-width';
import { motion, AnimatePresence } from "motion/react"
import { sidebar } from '../config/sidebar';
import useSidebar from '../hooks/use-sidebar';

export default function Sidebar(): JSX.Element {
    const { collapsed } = useSidebar();
    return (
        <AnimatePresence>
            <motion.div 
                className='bg-white flex justify-center items-start flex-col border border-sidebar-border size-full rounded-2xl'
                animate={{
                    width: collapsed ? 'auto' : SIDEBAR_WIDTH
                }}
            >
                <SidebarHeader />
                <div className='overflow-y-scroll w-full flex-1'>
                    {sidebar.map((category, i) => <SidebarCategory category={category} key={i}/>)}
                </div>
                <SidebarFooter />
            </motion.div>
        </AnimatePresence>
    )
}

