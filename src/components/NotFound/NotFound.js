import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.NotFound} >
      <PageTitle>404 not found</PageTitle>
      <p>Lorem ipsum</p> 
    </div>
  );
};

export default NotFound;