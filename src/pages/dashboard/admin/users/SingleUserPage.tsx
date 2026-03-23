import TeacherDetails from '@/components/Teacher/TeacherDetails';
import { useParams } from 'react-router-dom';

const SingleTeacherPage = () => {
  const { teacherId } = useParams<{ teacherId: string }>();

  console.log('teacherId inside single student page file:', teacherId);

  if (!teacherId) {
    return;
  }

  return <TeacherDetails id={teacherId} />;
};

export default SingleTeacherPage;
