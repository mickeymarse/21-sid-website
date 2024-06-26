interface WrapperProps {
  children: React.ReactNode;
  background: string;
}

const Wrapper: React.FC<WrapperProps> = ({ background, children }) => {
  return <article className={`${background} px-10 py-5 rounded-3xl`}>{children}</article>;
};

export default Wrapper;
