import WebFooter from "@/components/website/web-footer";
import AppHeaderLayout from "./app/app-header-layout";

export default function WebLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppHeaderLayout>
            {children}

            <WebFooter/>
        </AppHeaderLayout>
    );
}
