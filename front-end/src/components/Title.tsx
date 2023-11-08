import "@/styles/components/Title.scss";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
