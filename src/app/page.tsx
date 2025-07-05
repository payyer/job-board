import AppSidebarClient from '@/components/AppSidebarClient';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from '@/components/ui/sidebar';
import { SidebarUserButton } from '@/features/users/SideBarUserButton';
import { SignedIn, SignedOut } from '@/services/clerk/components/SignInStatus';
import { LogInIcon } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <SidebarProvider className='overflow-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>CodingSocial Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/sign-in">
                        <LogInIcon />
                        <span>Login</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarUserButton />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>

        </Sidebar>
        <main className='flex-1'>
          Hello
        </main>
      </AppSidebarClient>

    </SidebarProvider>
  );
}
