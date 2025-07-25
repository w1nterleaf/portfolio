interface Props {
   className?: string;
   children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children }) => {
   return <div className={`max-w-[1260px] mx-auto px-[10px] ${className}`}>{children}</div>;
};

export default Container;