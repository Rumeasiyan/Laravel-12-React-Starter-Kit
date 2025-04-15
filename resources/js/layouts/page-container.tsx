import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default PageContainer;
