import React from 'react';
import { Sidebar } from "@/layout/Sidebar.jsx";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "@/layout/Navbar.jsx";
import { Outlet } from "react-router";

export const MainLayout = () => {
    return (
        <Flex minH="100vh" bg="gray.50">
            {/* 1. Sidebar: 固定寬度且脫離文檔流 */}
            <Box
                as="nav"
                position="fixed"
                left="0"
                w="285px" // 預留一點空間給選單內距
                h="100vh"
                display={{ base: "none", xl: "block" }}
            >
                <Sidebar />
            </Box>

            {/* 2. 主內容區: 這裡最關鍵，必須使用 ml 頂開 Sidebar 的寬度 */}
            <Box
                flex="1"
                ml={{ base: 0, xl: "285px" }}
                p="20px"
                transition="margin-left 0.2s"
            >
                <Navbar />

                <Box as="main" mt="24px">
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    );
};