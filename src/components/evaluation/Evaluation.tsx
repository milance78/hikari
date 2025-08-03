import './Evaluation.scss'
import { useAppSelector } from '../../redux/store';

const Evaluation = () => {
  const { resultImage } = useAppSelector((state) => state.running);

  return (
    <>{
      resultImage
        ? <img src={resultImage} alt='result' />
        : null
    }</>
  )
}

export default Evaluation