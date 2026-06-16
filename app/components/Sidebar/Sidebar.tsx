import styles from "./Sidebar.module.scss";
import { profile, nav } from "../../lib/data";
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebar__title}> {profile.name} </h1>
        <h2 className={styles.sidebar__role}> {profile.title} </h2>
        <p className={styles.sidebar__intro}> {profile.intro} </p>
      </div>
    </aside>
  );
}
