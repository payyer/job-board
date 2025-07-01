import AppSidebarClient from '@/components/AppSidebarClient';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
export default function Home() {
  return (
    <SidebarProvider className='overflow-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>CodingSocial Jobs</span>
          </SidebarHeader>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Login
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>
          Hello
        </main>
      </AppSidebarClient>

    </SidebarProvider>
  );
}
