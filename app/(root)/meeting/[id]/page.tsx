interface MeetingProps {
  params: { id: string };
}

const Meeting = ({ params: { id } }: MeetingProps) => {
  return <div>Meeting Room: #{id}</div>;
};

export default Meeting;
