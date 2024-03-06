import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <main className="box-border flex w-full grow">
        <div className="box-border relative w-full min-h-[calc(100vh-3.75rem)]">
          {children}
        </div>
      </main>
    </>
  );
};

export default Container;
