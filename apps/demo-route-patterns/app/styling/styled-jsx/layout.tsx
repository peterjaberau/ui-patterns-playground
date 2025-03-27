import StyledJsxRegistry from '@/app/styling/styled-jsx/registry';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledJsxRegistry>{children}</StyledJsxRegistry>;
}
