import styles from "./loading-dots.module.css";

const LoadingDots = ({ color }: { color?: string }) => {
  return (
    <span className={styles.loading}>
      <span className={`bg-black dark:bg-white ${color}`} />
      <span className={`bg-black dark:bg-white ${color}`} />
      <span className={`bg-black dark:bg-white ${color}`} />
    </span>
  );
};

export default LoadingDots;
