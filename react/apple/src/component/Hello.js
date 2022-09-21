import World from './World';
import styles from './Hello.module.css';

export default function Hello() {
  return (
    <>
      <h1
        style={
          {
            color: "#f00",
            borderRight: "12px solid #000",
            marginBottom: "50ox"
          }
        }
      >Hello</h1>
      <World />
      <World />
      <div className={styles.box}>
        Hello
      </div>
    </>
  )
}