import StyledComponentsRegistry from '@/app/styling/styled-components/registry';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
