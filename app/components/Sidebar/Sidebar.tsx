import styles from "./Sidebar.module.scss";
import { profile} from "../../lib/data";
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <p  className={styles.sidebar__eyebrow}> {profile.eyebrow} </p>
        <h2 className={styles.sidebar__title}> {profile.name} </h2>
        <h3 className={styles.sidebar__role}> {profile.title} </h3>
        <p className={styles.sidebar__intro}> {profile.intro} </p>
    </aside>
  );
}
