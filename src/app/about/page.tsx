import { Metadata } from 'next';
import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About Us - My Next.js App',
  description: 'Learn more about My Next.js App and our mission.',
}
export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.text_style}>This is About Page</h1>
    </div>
  );
}